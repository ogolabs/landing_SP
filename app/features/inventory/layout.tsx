import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Multi-Branch Inventory & Stock Control | SellerPadi",
  description:
    "Real-time multi-branch stock tracking, SKU catalog valuation, automated counter checkout depletion, inter-branch stock transfers, and chronological movement audit logs.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Multi-Branch Inventory & Stock Control | SellerPadi",
    description:
      "Track merchandise across multiple stores in real time. Automatic sales depletion, inter-branch transfers with TRF references, and periodic PDF valuation reports.",
    url: "/features/inventory",
  },
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

