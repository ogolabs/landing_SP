import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Multi-User Staff Roles & Security Architecture | SellerPadi",
  description:
    "Granular role-based access for Owners, Managers, Sales Reps, and Accountants. Frictionless 6-digit PIN logins, single-device session lock, real-time privilege sync, and immutable actor accountability.",
  openGraph: {
    ...sharedOpenGraph,
    title: "Staff Roles & Store Security Architecture | SellerPadi",
    description:
      "Role-based access control, 6-digit numeric PINs, single-device enforcement, real-time privilege synchronization, and permanent transaction audit stamps.",
    url: "/features/team-security",
  },
};

export default function TeamSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

