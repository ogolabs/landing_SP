"use client";

import { Check, Minus, HelpCircle } from "lucide-react";
import { UserCurrencyInfo, convertNgnPrice, getPlanTiers, OPERATIONS_OVERAGE_FEE_NGN, BRANCH_STAFF_OVERAGE_FEE_NGN } from "@/lib/currency";
import { APP_BASE_URL } from "@/lib/config";

interface PricingComparisonTableProps {
  userCurrency: UserCurrencyInfo | null;
  billingInterval?: "monthly" | "yearly";
  discountPercent?: number;
}

interface FeatureRow {
  name: string;
  tooltip?: string;
  free: string | boolean;
  starter: string | boolean;
  growth: string | boolean;
  business: string | boolean;
  scale: string | boolean;
}

interface FeatureSection {
  title: string;
  rows: FeatureRow[];
}

export default function PricingComparisonTable({
  userCurrency,
  billingInterval = "monthly",
  discountPercent = 5,
}: PricingComparisonTableProps) {
  const opsOverageFormatted = convertNgnPrice(OPERATIONS_OVERAGE_FEE_NGN, userCurrency).formattedLocal;
  const branchOverageFormatted = convertNgnPrice(BRANCH_STAFF_OVERAGE_FEE_NGN, userCurrency).formattedLocal;

  const isYearly = billingInterval === "yearly";
  const tiers = getPlanTiers(discountPercent);

  const freePrice = convertNgnPrice(tiers.free.ngnMonthly, userCurrency).formattedLocal;
  const starterPrice = convertNgnPrice(isYearly ? tiers.starter_500.ngnYearly : tiers.starter_500.ngnMonthly, userCurrency).formattedLocal;
  const growthPrice = convertNgnPrice(isYearly ? tiers.growth_1000.ngnYearly : tiers.growth_1000.ngnMonthly, userCurrency).formattedLocal;
  const businessPrice = convertNgnPrice(isYearly ? tiers.business_2500.ngnYearly : tiers.business_2500.ngnMonthly, userCurrency).formattedLocal;
  const scalePrice = convertNgnPrice(isYearly ? tiers.scale_5000.ngnYearly : tiers.scale_5000.ngnMonthly, userCurrency).formattedLocal;

  const periodSuffix = isYearly ? "/yr" : "/mo";

  const sections: FeatureSection[] = [
    {
      title: "Core Capacities & Quotas",
      rows: [
        {
          name: isYearly ? `Annual Base Price (${discountPercent}% Off)` : "Monthly Base Price",
          free: freePrice,
          starter: `${starterPrice}${periodSuffix}`,
          growth: `${growthPrice}${periodSuffix}`,
          business: `${businessPrice}${periodSuffix}`,
          scale: `${scalePrice}${periodSuffix}`,
        },
        {
          name: isYearly ? "Annual Operations Quota" : "Monthly Operations Quota",
          tooltip: "Receipts issued + Package dispatches tracked combined",
          free: "100 ops/mo",
          starter: isYearly ? "6,000 ops/yr" : "500 ops/mo",
          growth: isYearly ? "12,000 ops/yr" : "1,000 ops/mo",
          business: isYearly ? "30,000 ops/yr" : "2,500 ops/mo",
          scale: isYearly ? "60,000 ops/yr" : "5,000 ops/mo",
        },
        {
          name: "Inventory SKU Capacity",
          tooltip: "Distinct product variants tracked in your catalog",
          free: "25 SKUs",
          starter: "150 SKUs",
          growth: "500 SKUs",
          business: "1,500 SKUs",
          scale: "Unlimited SKUs",
        },
        {
          name: "Universal Overage Protection",
          tooltip: "Store operations never halt when busy",
          free: "Hard Cap",
          starter: `${opsOverageFormatted}/op`,
          growth: `${opsOverageFormatted}/op`,
          business: `${opsOverageFormatted}/op`,
          scale: `${opsOverageFormatted}/op`,
        },
        {
          name: "Extra Branch / Staff Add-on",
          free: false,
          starter: `${branchOverageFormatted}/unit`,
          growth: `${branchOverageFormatted}/unit`,
          business: `${branchOverageFormatted}/unit`,
          scale: `${branchOverageFormatted}/unit`,
        },
      ],
    },
    {
      title: "Multi-Branch & Store Network",
      rows: [
        {
          name: "Physical Store Branches",
          free: "HQ Store only",
          starter: "1 Branch",
          growth: "2 Branches",
          business: "3 Branches",
          scale: "5 Branches",
        },
        {
          name: "Inter-Branch Stock Transfers",
          tooltip: "Official TRF-XXXXXX transfer receipts with origin/destination dispatch validation",
          free: false,
          starter: false,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Real-Time Multi-Branch Valuation",
          tooltip: "Aggregate valuation across all active retail locations",
          free: false,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Branch-Scoped Inventory Catalog",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Product Packages / Combo Bundles",
          tooltip: "Bundle 2+ products into pre-packed combos with automatic component stock deduction",
          free: false,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Price List PDF & CSV Exports",
          tooltip: "Export customer price lists filtered by All Items, Packages Only, or Single Products Only",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Bulk Import (Excel .xlsx & CSV)",
          tooltip: "Upload your entire inventory catalog in bulk using Excel or CSV spreadsheets",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
      ],
    },
    {
      title: "Team Roles & Access Controls",
      rows: [
        {
          name: "Included Branch Managers",
          tooltip: "Strictly 1 manager assigned per branch location",
          free: "1 HQ Manager",
          starter: "1 Manager",
          growth: "2 Managers",
          business: "3 Managers",
          scale: "5 Managers",
        },
        {
          name: "Included Sales Representatives",
          free: "1 HQ Rep",
          starter: "1 Rep",
          growth: "4 Reps",
          business: "6 Reps",
          scale: "10 Reps",
        },
        {
          name: "Dedicated Store Accountants",
          tooltip: "Full financial visibility across revenue, voids, AP aging, and vendor ledgers",
          free: false,
          starter: false,
          growth: false,
          business: "1 Lead Accountant",
          scale: "2 Accountants (Lead & Deputy)",
        },
        {
          name: "Role-Scoped Data Isolation",
          tooltip: "Sales reps see only their sales; managers see their branch; CEO/Accountant see company",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "6-Digit Staff PIN & Single-Device Lock",
          tooltip: "Prevents credential sharing and terminates prior device sessions",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "5-Attempt Lockout Protection",
          tooltip: "15-minute brute-force lockout for failed PIN attempts",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
      ],
    },
    {
      title: "Vendor Directory & Accounts Payable Suite",
      rows: [
        {
          name: "Supplier Profiles & Bank Remittances",
          tooltip: "Directory with 1-click bank account copy for fast supplier payment",
          free: false,
          starter: false,
          growth: false,
          business: true,
          scale: true,
        },
        {
          name: "Purchase Bills & Restocking",
          tooltip: "Official BILL-XXXXXX entries with automatic inventory replenishment",
          free: false,
          starter: false,
          growth: false,
          business: true,
          scale: true,
        },
        {
          name: "30/60/90+ Day AP Aging Buckets",
          tooltip: "Track overdue balances and upcoming supplier debt maturities",
          free: false,
          starter: false,
          growth: false,
          business: true,
          scale: true,
        },
        {
          name: "Multi-Supplier Price Comparison Matrix",
          tooltip: "Compare vendor quotes side-by-side with lowest-spread potential savings",
          free: false,
          starter: false,
          growth: false,
          business: true,
          scale: true,
        },
      ],
    },
    {
      title: "Smart QR Receipts & Cash Register",
      rows: [
        {
          name: "Counter Sales Register & Quick Presets",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Barcode Scanner & Camera Scanning POS",
          tooltip: "Plug-and-play USB/Bluetooth barcode guns plus mobile camera scanning with audio feedback",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Instant Customer QR Code Delivery",
          tooltip: "Customers scan directly with their phone camera with zero app install",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Printable 80mm Thermal Slips & PDF",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Audit-Safe Voiding (5+ Char Reason)",
          tooltip: "Immutable ledger record; only issuing actor can void their receipt",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Credit Sales & Partial Debt Settlements",
          tooltip: "Extend credit with customer debt balance tracking and audited payment logs",
          free: "Basic",
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
      ],
    },
    {
      title: "Tracked Logistics & Custody",
      rows: [
        {
          name: "Tracked Dispatch Labels (SHPT-XXXXXX)",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Scratch-Off PIN Handover Verification (SP-XXXX)",
          tooltip: "Inner 4-digit scratch PIN guarantees physical delivery before verification",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Locked Customer Name Verification",
          tooltip: "Anti-spoofing badge locked to original customer name",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Doorstep Dispute & Reverse Custody",
          tooltip: "Return rider handover & store-received confirmation workflow",
          free: false,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
      ],
    },
    {
      title: "Reporting & SLA Support",
      rows: [
        {
          name: "Periodic Valuation Reports (A4 PDF)",
          tooltip: "Daily, weekly, monthly, and yearly store inventory audit reports",
          free: "Basic PDF",
          starter: "Full PDF",
          growth: "Full PDF",
          business: "Advanced PDF",
          scale: "Advanced PDF",
        },
        {
          name: "Cryptographic Secured Ledger",
          free: true,
          starter: true,
          growth: true,
          business: true,
          scale: true,
        },
        {
          name: "Support SLA",
          free: "Community Help",
          starter: "Standard Email",
          growth: "Priority Email",
          business: "Priority Email & WhatsApp",
          scale: "24/7 Dedicated Support",
        },
      ],
    },
  ];

  const renderValue = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto shrink-0" />
      ) : (
        <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto shrink-0" />
      );
    }
    return <span className="font-semibold text-slate-900 dark:text-white whitespace-nowrap">{val}</span>;
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-4 sm:p-8 xl:p-12 shadow-xs space-y-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
          Full 5-Tier Plan Comparison
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Compare quotas, team permissions, inventory limits, and advanced modules across every SellerPadi subscription tier.
        </p>
      </div>

      {/* Overflow wrapper for table responsiveness */}
      <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
        <table className="w-full min-w-190 text-left border-collapse text-xs sm:text-sm whitespace-nowrap">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th className="py-4 px-3 sm:px-4 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs w-1/4 whitespace-nowrap">
                Plan Feature
              </th>
              <th className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base whitespace-nowrap">Free</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-normal whitespace-nowrap">{freePrice}</div>
              </th>
              <th className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base whitespace-nowrap">Starter</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-normal whitespace-nowrap">{starterPrice}</div>
              </th>
              <th className="py-4 px-3 sm:px-4 text-center bg-blue-50/50 dark:bg-blue-950/20 border-x border-blue-200/50 dark:border-blue-800/40 whitespace-nowrap">
                <div className="font-extrabold text-blue-600 dark:text-blue-400 text-sm sm:text-base whitespace-nowrap">Growth</div>
                <div className="text-[11px] sm:text-xs text-blue-600/80 dark:text-blue-400/80 font-normal whitespace-nowrap">{growthPrice}</div>
              </th>
              <th className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base whitespace-nowrap">Business</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-normal whitespace-nowrap">{businessPrice}</div>
              </th>
              <th className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base whitespace-nowrap">Scale</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-normal whitespace-nowrap">{scalePrice}</div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {sections.map((section, sIdx) => (
              <tr key={`section-wrapper-${sIdx}`} className="contents">
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td
                    colSpan={6}
                    className="py-2.5 px-3 sm:px-4 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 border-t border-b border-slate-200 dark:border-slate-800 whitespace-nowrap"
                  >
                    {section.title}
                  </td>
                </tr>

                {section.rows.map((row, rIdx) => (
                  <tr
                    key={`row-${sIdx}-${rIdx}`}
                    className="border-b border-slate-100 dark:border-slate-800/60 hover:bg-slate-50/60 dark:hover:bg-slate-800/20 transition-colors"
                  >
                    <td className="py-3 px-3 sm:px-4 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span>{row.name}</span>
                        {row.tooltip && (
                          <span title={row.tooltip} className="cursor-help text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0">
                            <HelpCircle className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">{renderValue(row.free)}</td>
                    <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">{renderValue(row.starter)}</td>
                    <td className="py-3 px-3 sm:px-4 text-center bg-blue-50/30 dark:bg-blue-950/10 border-x border-blue-200/50 dark:border-blue-800/40 whitespace-nowrap">
                      {renderValue(row.growth)}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">{renderValue(row.business)}</td>
                    <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">{renderValue(row.scale)}</td>
                  </tr>
                ))}
              </tr>
            ))}
          </tbody>

          {/* Action Footer */}
          <tfoot>
            <tr className="border-t border-slate-200 dark:border-slate-800">
              <td className="py-4 px-3 sm:px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">Get Started</td>
              <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <a
                  href={`${APP_BASE_URL}/workspace`}
                  className="inline-block py-2 px-3 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  Start Free
                </a>
              </td>
              <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <a
                  href={`${APP_BASE_URL}/settings?plan=starter_500`}
                  className="inline-block py-2 px-3 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  Choose Starter
                </a>
              </td>
              <td className="py-4 px-3 sm:px-4 text-center bg-blue-50/50 dark:bg-blue-950/20 border-x border-blue-200/50 dark:border-blue-800/40 whitespace-nowrap">
                <a
                  href={`${APP_BASE_URL}/settings?plan=growth_1000`}
                  className="inline-block py-2 px-3 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-2xs whitespace-nowrap shrink-0"
                >
                  Choose Growth
                </a>
              </td>
              <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <a
                  href={`${APP_BASE_URL}/settings?plan=business_2500`}
                  className="inline-block py-2 px-3 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  Choose Business
                </a>
              </td>
              <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <a
                  href={`${APP_BASE_URL}/settings?plan=scale_5000`}
                  className="inline-block py-2 px-3 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  Choose Scale
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
