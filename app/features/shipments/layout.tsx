import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Tracked Logistics, Secret Handover PINs & Reverse Custody | SellerPadi",
  description:
    "Protect dispatches with dual-layer QR labels and secret scratch-off 4-digit PINs. Zero-app camera handover verification, doorstep dispute management, and transparent reverse logistics.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Tracked Logistics & Tamper-Evident Delivery | SellerPadi",
    description:
      "Dual-layer QR labels, secret scratch-off PINs (SP-XXXX), locked recipient names, doorstep dispute filing, and complete reverse logistics tracking.",
    url: "/features/shipments",
  },
};

export default function ShipmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

