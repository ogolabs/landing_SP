export const LANDING_BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://sellerpadi.com"
).replace(/\/$/, "");

export const APP_BASE_URL = (
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://app.sellerpadi.com")
).replace(/\/$/, "");

export const isTestnet =
  process.env.NEXT_PUBLIC_NETWORK?.toLowerCase() !== "mainnet";

export const NETWORK_NAME = isTestnet
  ? "Avalanche Fuji Testnet"
  : "Avalanche C-Chain";

export const BLOCK_EXPLORER_URL = isTestnet
  ? "https://testnet.snowtrace.io"
  : "https://snowtrace.io";

