import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Vendor Management & Accounts Payable (AP) Suite | SellerPadi",
  description:
    "Manage suppliers, record purchase bills with auto-stock replenishment, track 30/60/90+ day overdue debt aging, and optimize margins with multi-supplier price comparison.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Vendor Directory & Accounts Payable Suite | SellerPadi",
    description:
      "Full vendor directory, purchase bills (BILL-XXXXXX), 1-click stock receiving, AP aging reports, and multi-supplier price comparison matrix for Business & Scale tiers.",
    url: "/features/vendors",
  },
};

export default function VendorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

