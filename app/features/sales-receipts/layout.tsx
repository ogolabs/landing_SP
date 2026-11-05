import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Smart QR Receipts & Digital Sales Book | SellerPadi",
  description:
    "Fast counter checkout, instant smartphone QR receipts, debtor ledger tracking, and audit-safe voiding with automatic branch inventory synchronization.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Smart QR Receipts & Digital Sales Book | SellerPadi",
    description:
      "Replace lost paper slips with tamperproof digital receipts. Fast counter entry, customer QR scans, debtor tracking, and role-scoped voiding.",
    url: "/features/sales-receipts",
  },
};

export default function SalesReceiptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

