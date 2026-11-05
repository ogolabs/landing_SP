"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Lock,
  Globe2,
  Store,
  ExternalLink,
} from "lucide-react";
import { APP_BASE_URL, isTestnet, NETWORK_NAME, BLOCK_EXPLORER_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 pt-12 xl:pt-16 pb-10 xl:pb-14 transition-colors">
      <div className="mx-auto max-w-[1920px] 2xl:max-w-[2400px] w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Top Guarantee / Telemetry Ribbon */}
        <div className="mb-12 pb-8 border-b border-slate-100 dark:border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0 flex items-center group">
              <Image
                src="/logo-full.svg"
                alt="SellerPadi Logo"
                width={152}
                height={25}
                style={{ width: "auto" }}
                className="h-7 sm:h-8 lg:h-9 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Live Network & Security Telemetry */}
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-mono text-[11px] whitespace-nowrap">
                {isTestnet ? "Testnet Operational" : "Mainnet Operational"}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap shrink-0">
              <Zap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="font-mono text-[11px] whitespace-nowrap">~42ms Latency</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap shrink-0">
              <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="font-mono text-[11px] whitespace-nowrap">Zero-Knowledge Proofs</span>
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12">
          {/* Col 1: Core Features */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Store className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Platform Features</span>
            </h4>
            <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/features/sales-receipts" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Smart QR Receipts &amp; Sales Book
                </Link>
              </li>
              <li>
                <Link href="/features/inventory" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Multi-Branch Inventory &amp; Stock
                </Link>
              </li>
              <li>
                <Link href="/features/shipments" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Tracked Shipments &amp; PIN Dispatch
                </Link>
              </li>
              <li>
                <Link href="/features/vendors" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Vendor Directory &amp; AP Suite
                </Link>
              </li>
              <li>
                <Link href="/features/team-security" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Staff Roles &amp; Security Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Live Store Solutions */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Store Workspace</span>
            </h4>
            <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a href={`${APP_BASE_URL}/receipts/new`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Counter Sales Book
                </a>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace?tab=inventory`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Branch Stock Transfers
                </a>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace?tab=vendors`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Accounts Payable Aging
                </a>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace/login`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Staff 6-Digit PIN Portal
                </a>
              </li>
              <li>
                <a href={`${APP_BASE_URL}/workspace`} className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Merchant Workspace
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Company */}
          <div className="space-y-3.5">
            <h4 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Trust &amp; Pricing</span>
            </h4>
            <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Tiers &amp; Operations Quota Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  About SellerPadi
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Privacy Policy &amp; Zero PII
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Merchant Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Secured Infrastructure Badge */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Decentralized Ledger</span>
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <Image
                  src="/avax.svg"
                  alt="Avalanche Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block text-[9px] uppercase font-bold tracking-wider font-mono">
                    Underlying Settlement
                  </span>
                  <a
                    href={BLOCK_EXPLORER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 dark:text-white text-xs hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors inline-flex items-center gap-1 group/link"
                  >
                    <span>{NETWORK_NAME}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-blue-500 shrink-0" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Every sales receipt and custody handover is certified with an immutable cryptographic audit reference.
              </p>
              <div className="pt-1 border-t border-slate-200/80 dark:border-slate-800 text-[10px] text-slate-500 flex items-center justify-between font-mono">
                <span>Consensus: Snowman</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2 text-[11px]">
            <Image
              src="/logo-icon.svg"
              alt="SellerPadi"
              width={20}
              height={20}
              className="w-4 h-4 xl:w-5 xl:h-5 object-contain shrink-0"
            />
            <span>© {new Date().getFullYear()} SellerPadi. Digital Sales Book &amp; Logistics OS.</span>
          </div>
          <div className="flex items-center gap-5 text-xs font-medium">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
