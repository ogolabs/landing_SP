#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import console from "node:console";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// 1. Resolve SellerPadi Application version (single source of truth for the entire platform)
let version = process.env.NEXT_PUBLIC_APP_VERSION || "";

// Method A: Check local sibling ../frontend/package.json (instant for local builds)
const frontendPkgPath = path.resolve(rootDir, "..", "frontend", "package.json");
if (!version && fs.existsSync(frontendPkgPath)) {
  try {
    const frontendPkg = JSON.parse(fs.readFileSync(frontendPkgPath, "utf-8"));
    version = frontendPkg.version;
  } catch (e) {
    console.warn("[VersionStamp] Could not read frontend/package.json:", e.message);
  }
}

// Method B: Remote fetch if building in isolated CI/Vercel without sibling frontend
if (!version) {
  try {
    const res = await fetch("https://raw.githubusercontent.com/ogolabs/frontend_SP/staging/package.json", {
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.version) version = data.version;
    }
  } catch {
    // Continue to fallback
  }
}

// Method C: Fallback
if (!version) {
  const pkgPath = path.join(rootDir, "package.json");
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
      version = pkg.version;
    } catch {}
  }
  version = version || "0.1.7-beta";
}

// 2. Resolve commit hash from hosting environment or git
let commitHash = (
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
  process.env.RAILWAY_GIT_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  ""
).slice(0, 7);

if (!commitHash) {
  try {
    commitHash = execSync("git rev-parse --short HEAD", { cwd: rootDir })
      .toString()
      .trim();
  } catch {
    commitHash = "dev";
  }
}

const buildTime = new Date().toISOString();
const versionLabel = `v${version}`;
const cacheKey = `SellerPadi-landing-cache-${version}-${commitHash}`;

// 3. Write lib/version.ts
const versionTsPath = path.join(rootDir, "lib", "version.ts");
const versionTsContent = `// Auto-generated build stamp — DO NOT EDIT DIRECTLY
// Generated at ${buildTime}
export const APP_VERSION = "${version}";
export const APP_STAGE = "Public Beta";
export const APP_IS_BETA = true;
export const APP_COMMIT = "${commitHash}";
export const APP_BUILD_TIME = "${buildTime}";
export const APP_VERSION_LABEL = "${versionLabel}";
export const APP_CACHE_KEY = "${cacheKey}";
`;

fs.writeFileSync(versionTsPath, versionTsContent, "utf-8");

console.log(`[VersionStamp] Injected ${versionLabel} into landing (Commit: ${commitHash})`);
