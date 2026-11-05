"use client";

import { useId, useMemo, useState } from "react";
import {
  Calculator,
  ArrowRight,
  ShieldCheck,
  Store,
  Users,
  ShoppingBag,
  Landmark,
} from "lucide-react";
import {
  UserCurrencyInfo,
  convertNgnPrice,
  PLAN_TIERS,
  OPERATIONS_OVERAGE_FEE_NGN,
  OPERATIONS_OVERAGE_FEE_USD,
  BRANCH_STAFF_OVERAGE_FEE_NGN,
  BRANCH_STAFF_OVERAGE_FEE_USD,
  PlanTierConfig,
} from "@/lib/currency";
import { APP_BASE_URL } from "@/lib/config";

interface PricingCalculatorProps {
  userCurrency: UserCurrencyInfo | null;
}

type TierChoice = "auto" | "free" | "starter_500" | "growth_1000" | "business_2500" | "scale_5000";

export default function PricingCalculator({ userCurrency }: PricingCalculatorProps) {
  const operationsInputId = useId();
  const branchesInputId = useId();
  const repsInputId = useId();
  const vendorsInputId = useId();

  // Selected base tier mode: "auto" or a specific plan key
  const [selectedTier, setSelectedTier] = useState<TierChoice>("growth_1000");

  // Store usage inputs
  const [operations, setOperations] = useState<number>(1250);
  const [branches, setBranches] = useState<number>(2);
  const [salesReps, setSalesReps] = useState<number>(4);
  const [needsVendors, setNeedsVendors] = useState<boolean>(false);

  const isNigeria = userCurrency?.currency === "NGN" || userCurrency?.countryCode === "NG";

  const opsUnitRateFormatted = convertNgnPrice(OPERATIONS_OVERAGE_FEE_NGN, userCurrency).formattedLocal;
  const branchUnitRateFormatted = convertNgnPrice(BRANCH_STAFF_OVERAGE_FEE_NGN, userCurrency).formattedLocal;

  // Resolve which tier to evaluate
  const calculation = useMemo(() => {
    // 1. Determine best recommended tier if in "auto" mode
    let autoTierKey: keyof typeof PLAN_TIERS = "scale_5000";
    if (needsVendors) {
      if (operations <= 2500 && branches <= 3 && salesReps <= 6) {
        autoTierKey = "business_2500";
      } else {
        autoTierKey = "scale_5000";
      }
    } else {
      if (operations <= 100 && branches === 0 && salesReps <= 1) {
        autoTierKey = "free";
      } else if (operations <= 500 && branches <= 1 && salesReps <= 1) {
        autoTierKey = "starter_500";
      } else if (operations <= 1000 && branches <= 2 && salesReps <= 4) {
        autoTierKey = "growth_1000";
      } else if (operations <= 2500 && branches <= 3 && salesReps <= 6) {
        autoTierKey = "business_2500";
      } else {
        autoTierKey = "scale_5000";
      }
    }

    const effectiveTierKey: keyof typeof PLAN_TIERS =
      selectedTier === "auto" ? autoTierKey : selectedTier;

    const tier: PlanTierConfig = PLAN_TIERS[effectiveTierKey];

    // 2. Calculate excess operations (Dispatches & Receipts above base quota)
    // Free tier has a strict hard cap of 100 ops; paid tiers use universal overage
    const isFreeTier = effectiveTierKey === "free";
    const extraOps = isFreeTier ? 0 : Math.max(0, operations - tier.quota);
    const extraBranches = isFreeTier ? 0 : Math.max(0, branches - tier.branches);
    const extraReps = isFreeTier ? 0 : Math.max(0, salesReps - tier.salesReps);
    const totalExtraStaff = extraBranches + extraReps;

    // Unit rates
    const opsUnitCostNgn = OPERATIONS_OVERAGE_FEE_NGN;
    const opsUnitCostUsd = OPERATIONS_OVERAGE_FEE_USD;
    const staffUnitCostNgn = BRANCH_STAFF_OVERAGE_FEE_NGN;
    const staffUnitCostUsd = BRANCH_STAFF_OVERAGE_FEE_USD;

    // Dollar & Naira amounts
    const baseNgn = tier.ngnMonthly;
    const baseUsd = tier.usdMonthly;

    const opsOverageCostNgn = extraOps * opsUnitCostNgn;
    const opsOverageCostUsd = extraOps * opsUnitCostUsd;

    const staffOverageCostNgn = totalExtraStaff * staffUnitCostNgn;
    const staffOverageCostUsd = totalExtraStaff * staffUnitCostUsd;

    const totalOverageNgn = opsOverageCostNgn + staffOverageCostNgn;
    const totalOverageUsd = opsOverageCostUsd + staffOverageCostUsd;

    const totalBillNgn = baseNgn + totalOverageNgn;
    const totalBillUsd = baseUsd + totalOverageUsd;

    // Formatted strings
    const basePriceFormatted = convertNgnPrice(baseNgn, userCurrency).formattedLocal;
    const opsOverageCostFormatted = isNigeria
      ? `₦${opsOverageCostNgn.toLocaleString()}`
      : `$${opsOverageCostUsd.toFixed(2)}`;
    const staffOverageCostFormatted = isNigeria
      ? `₦${staffOverageCostNgn.toLocaleString()}`
      : `$${staffOverageCostUsd.toFixed(2)}`;
    const totalBillFormatted = isNigeria
      ? `₦${totalBillNgn.toLocaleString()}`
      : `$${totalBillUsd.toFixed(2)}`;

    // Percentage of quota consumed
    const quotaUsedPercent = Math.min(100, Math.round((operations / tier.quota) * 100));

    return {
      tierKey: effectiveTierKey,
      tier,
      isFreeTier,
      extraOps,
      extraBranches,
      extraReps,
      totalExtraStaff,
      hasOpsOverage: extraOps > 0,
      hasStaffOverage: totalExtraStaff > 0,
      quotaUsedPercent,
      basePriceFormatted,
      opsOverageCostFormatted,
      staffOverageCostFormatted,
      totalBillFormatted,
    };
  }, [selectedTier, operations, branches, salesReps, needsVendors, isNigeria, userCurrency]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl xl:rounded-3xl p-5 sm:p-8 xl:p-12 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] sm:text-xs font-bold text-blue-700 dark:text-blue-300">
            <Calculator className="w-3.5 h-3.5 shrink-0" />
            <span className="sm:hidden">Universal Overage Calculator</span>
            <span className="hidden sm:inline">Interactive Universal Overage Calculator</span>
          </div>
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Operations Quota &amp; Universal Overage Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
            See exactly how Universal Overage works. Select any plan tier below and test what happens when your sales book or logistics dispatches exceed base monthly limits.
          </p>
        </div>

        {/* Universal Overage Guarantee Badge */}
        <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 shrink-0 self-start lg:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div className="leading-tight">
            <span className="font-bold block whitespace-nowrap">Universal Overage Guarantee</span>
            <span className="text-[11px] text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
              Operations never halt · Flat {opsUnitRateFormatted}/op
            </span>
          </div>
        </div>
      </div>

      {/* Tier Switcher Tabs: Lets User Test Specific Plans or Auto-Select */}
      <div className="space-y-2">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Step 1: Choose Base Subscription Plan to Simulate
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          <button
            type="button"
            onClick={() => setSelectedTier("auto")}
            className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
              selectedTier === "auto"
                ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                : "bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300"
            }`}
          >
            Auto-Recommend
          </button>
          {(["free", "starter_500", "growth_1000", "business_2500", "scale_5000"] as const).map((key) => {
            const t = PLAN_TIERS[key];
            const isSelected = selectedTier === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedTier(key)}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                    : "bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                }`}
              >
                <span>{t.name}</span>
                <span className="block text-[10px] font-normal opacity-80">
                  {t.quota.toLocaleString()} ops
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Input Sliders vs Detailed Calculation Receipt */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Step 2: Adjust Monthly Store Volume &amp; Expansion
          </span>

          {/* Operations Slider */}
          <div className="space-y-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800/80 p-4 sm:p-5 rounded-xl">
            <div className="flex items-center justify-between">
              <label htmlFor={operationsInputId} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                <ShoppingBag className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Monthly Operations (Receipts + Dispatches)</span>
              </label>
              <div className="text-right">
                <span className="text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 font-display block">
                  {operations.toLocaleString()} ops
                </span>
                <span className="text-[10px] text-slate-500">
                  Base quota: {calculation.tier.quota.toLocaleString()} ops
                </span>
              </div>
            </div>

            <input
              id={operationsInputId}
              type="range"
              min={50}
              max={7500}
              step={50}
              value={operations}
              onChange={(e) => setOperations(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />

            {/* Visual Quota vs Overage Meter */}
            <div className="space-y-1.5 pt-1">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                <span>
                  Base Quota:{" "}
                  <strong>
                    {Math.min(operations, calculation.tier.quota).toLocaleString()} / {calculation.tier.quota.toLocaleString()}
                  </strong>
                </span>
                {calculation.hasOpsOverage ? (
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    +{calculation.extraOps.toLocaleString()} overage units (@ {opsUnitRateFormatted}/op)
                  </span>
                ) : (
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    100% within plan allowance
                  </span>
                )}
              </div>

              {/* Two-part Progress bar */}
              <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${calculation.quotaUsedPercent}%` }}
                />
                {calculation.hasOpsOverage && (
                  <div
                    className="bg-blue-600 h-full transition-all duration-300 animate-pulse"
                    style={{
                      width: `${Math.min(
                        100,
                        (calculation.extraOps / calculation.tier.quota) * 100
                      )}%`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Physical Branches Slider */}
          <div className="space-y-2.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800/80 p-4 sm:p-5 rounded-xl">
            <div className="flex items-center justify-between">
              <label htmlFor={branchesInputId} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                <Store className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Physical Store Branches</span>
              </label>
              <div className="text-right">
                <span className="text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 font-display block">
                  {branches === 0 ? "HQ Store only" : `${branches} ${branches === 1 ? "branch" : "branches"}`}
                </span>
                <span className="text-[10px] text-slate-500">
                  Included in plan: {calculation.tier.branches} {calculation.tier.branches === 1 ? "branch" : "branches"}
                </span>
              </div>
            </div>

            <input
              id={branchesInputId}
              type="range"
              min={0}
              max={10}
              step={1}
              value={branches}
              onChange={(e) => setBranches(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />

            {calculation.extraBranches > 0 && (
              <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                +{calculation.extraBranches} extra {calculation.extraBranches === 1 ? "branch" : "branches"} beyond {calculation.tier.name} base ({branchUnitRateFormatted}/branch)
              </p>
            )}
          </div>

          {/* Sales Reps Slider */}
          <div className="space-y-2.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800/80 p-4 sm:p-5 rounded-xl">
            <div className="flex items-center justify-between">
              <label htmlFor={repsInputId} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Sales Staff &amp; Cashiers</span>
              </label>
              <div className="text-right">
                <span className="text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 font-display block">
                  {salesReps} {salesReps === 1 ? "rep" : "reps"}
                </span>
                <span className="text-[10px] text-slate-500">
                  Included in plan: {calculation.tier.salesReps} {calculation.tier.salesReps === 1 ? "rep" : "reps"}
                </span>
              </div>
            </div>

            <input
              id={repsInputId}
              type="range"
              min={1}
              max={20}
              step={1}
              value={salesReps}
              onChange={(e) => setSalesReps(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />

            {calculation.extraReps > 0 && (
              <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                +{calculation.extraReps} extra {calculation.extraReps === 1 ? "rep" : "reps"} beyond {calculation.tier.name} base ({branchUnitRateFormatted}/rep)
              </p>
            )}
          </div>

          {/* Vendors & Accounts Payable Suite Toggle */}
          <div className="flex items-start justify-between gap-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800/80 p-4 sm:p-5 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                <Landmark className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <label htmlFor={vendorsInputId} className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white cursor-pointer">
                  Require Vendor Directory &amp; AP Aging Suite
                </label>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  Requires Business (2,500 Ops) or Scale (5,000 Ops). Includes supplier profiles, purchase bills, 30/60/90+ day aging, and multi-supplier price comparison.
                </p>
              </div>
            </div>
            <input
              id={vendorsInputId}
              type="checkbox"
              checked={needsVendors}
              onChange={(e) => setNeedsVendors(e.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer mt-1"
            />
          </div>
        </div>

        {/* Detailed Itemized Calculation Receipt Card */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 xl:p-8 space-y-6 border border-slate-800 shadow-xs">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block font-mono">
                {selectedTier === "auto" ? "Recommended Plan" : "Simulated Base Plan"}
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                {calculation.tier.name} Subscription
              </h3>
            </div>
            <span className="bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shrink-0">
              {calculation.basePriceFormatted}/mo
            </span>
          </div>

          {/* Transparent Itemized Calculation Receipt */}
          <div className="space-y-3 text-xs">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block font-mono">
              Transparent Cost Breakdown
            </span>

            {/* Line 1: Base Tier Cost */}
            <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
              <span className="text-slate-300">
                {calculation.tier.name} Base ({calculation.tier.quota.toLocaleString()} ops included)
              </span>
              <span className="font-mono font-bold text-white">
                {calculation.basePriceFormatted}
              </span>
            </div>

            {/* Line 2: Operations Overage */}
            <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
              <div>
                <span className="text-slate-300 block">Operations Universal Overage</span>
                {calculation.hasOpsOverage ? (
                  <span className="text-[10px] text-blue-400 font-mono">
                    {calculation.extraOps.toLocaleString()} extra ops × {opsUnitRateFormatted}
                  </span>
                ) : (
                  <span className="text-[10px] text-emerald-400">Within plan allowance (0 extra)</span>
                )}
              </div>
              <span
                className={`font-mono font-bold ${
                  calculation.hasOpsOverage ? "text-blue-300" : "text-slate-500"
                }`}
              >
                {calculation.hasOpsOverage ? `+${calculation.opsOverageCostFormatted}` : "₦0"}
              </span>
            </div>

            {/* Line 3: Branch & Staff Add-ons */}
            <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
              <div>
                <span className="text-slate-300 block">Branch &amp; Staff Expansion</span>
                {calculation.hasStaffOverage ? (
                  <span className="text-[10px] text-blue-400 font-mono">
                    {calculation.totalExtraStaff} extra units × {branchUnitRateFormatted}
                  </span>
                ) : (
                  <span className="text-[10px] text-emerald-400">Within plan allowance (0 extra)</span>
                )}
              </div>
              <span
                className={`font-mono font-bold ${
                  calculation.hasStaffOverage ? "text-blue-300" : "text-slate-500"
                }`}
              >
                {calculation.hasStaffOverage ? `+${calculation.staffOverageCostFormatted}` : "₦0"}
              </span>
            </div>

            {/* Total Monthly Investment */}
            <div className="flex items-center justify-between pt-2 text-sm font-bold">
              <span className="text-white">Estimated Monthly Total</span>
              <span className="text-xl sm:text-2xl font-extrabold text-blue-400 font-display">
                {calculation.totalBillFormatted}
                <span className="text-xs text-slate-400 font-normal ml-1">/mo</span>
              </span>
            </div>
          </div>

          {/* Universal Overage Guarantee Banner */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5 space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Universal Overage Guarantee</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Store operations <strong>never freeze</strong>. When busy holiday rushes push you past 100% of your quota, cash registers continue issuing QR receipts and dispatches proceed without interruption. Any excess is billed at a flat <strong>{opsUnitRateFormatted}/op</strong>.
            </p>
          </div>

          {/* Action CTA Button */}
          <a
            href={`${APP_BASE_URL}/settings?plan=${calculation.tierKey}`}
            className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all cursor-pointer flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
          >
            <span>Activate {calculation.tier.name} Plan</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
