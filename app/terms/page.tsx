"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  ShieldCheck,
  Clock,
  FileCheck,
  Building2,
  Coins,
  CreditCard,
  Lock,
  Layers,
  ArrowRight,
  PackageCheck,
  Scale,
  Mail,
  Printer,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 py-12 sm:py-16 xl:py-24 sm:px-6 lg:px-8 space-y-8 xl:space-y-12">
          {/* Header Tag & Title */}
          <div className="space-y-3 xl:space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-blue-700 dark:text-blue-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Legal &amp; Merchant Governance</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Statutory Entity: RC 10005885</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Terms of Service &amp; Merchant Operating Agreement
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Effective Date: November 12, 2026</span>
              </div>
              <span>&bull;</span>
              <span>Operator: OGOLABS TECHNOLOGY LTD (RC: 10005885)</span>
            </div>
          </div>

          {/* Corporate Entity & Statutory Governance Disclosure */}
          <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-5 sm:p-6 space-y-2.5">
            <div className="flex items-center gap-2 text-blue-900 dark:text-blue-300 font-bold text-sm sm:text-base">
              <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Corporate Operator &amp; Statutory Registration Disclosure</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>SellerPadi</strong> (accessible via <code className="font-mono text-xs font-semibold">sellerpadi.com</code> and related applications) is a proprietary business operating system and commercial software platform developed, owned, and operated by <strong>OGOLABS TECHNOLOGY LTD</strong>, a private company limited by shares duly registered and incorporated under the <strong>Companies and Allied Matters Act 2020 (CAMA 2020)</strong> by the <strong>Corporate Affairs Commission (CAC), Federal Republic of Nigeria</strong> with Company Registration Number <strong>RC 10005885</strong> and Tax Identification Number <strong>TIN 2623024126994</strong>, having its registered corporate address at <strong>45, Lagbe Area, Moniya, Oyo State, Nigeria</strong>.
            </p>
          </div>

          {/* Section 1: Non-Custodial Operating OS */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  1. Non-Custodial Architecture &amp; Zero Custody of Consumer Funds
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi is a merchant operating system, digital sales register, multi-branch inventory engine, and cryptographic parcel delivery verification platform. <strong>SellerPadi and OGOLABS TECHNOLOGY LTD are not a bank, depository institution, payment processor, licensed escrow provider, money service business, or freight transport carrier.</strong>
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Zero Custody of Consumer Checkout Payments:</strong> SellerPadi does not intermediate, hold, pool, or escrow fiat payments made by consumers at your counter or upon delivery. Retail customer purchases are paid directly to your merchant bank account or counter register through <strong>Cash</strong>, direct <strong>Bank Transfer</strong>, external <strong>Card POS Terminals</strong>, or <strong>Store Credit</strong>. SellerPadi charges solely for software subscription licenses and operations quota overages.
              </p>
              <p>
                <strong>Merchant Statutory Tax Responsibility:</strong> Merchants maintain exclusive statutory responsibility for calculating, charging, collecting, and remitting all applicable retail Value Added Tax (VAT), sales taxes, and local levies, and for adhering to the Nigeria Revenue Service (NRS) electronic invoicing regulations or equivalent international revenue authorities.
              </p>
            </div>
          </div>

          {/* Section 2: Subscription Plans, Currency Isolation & Universal Overage */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <CreditCard className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  2. Subscription Plans, Billing Cycles &amp; Universal Overage Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi operates transparent, volume-based subscription tiers backed by our <strong>Universal Overage Guarantee</strong> so store checkouts and package dispatches never halt unexpectedly.
                </p>
              </div>
            </div>

            {/* Pricing Matrix */}
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/70 dark:bg-slate-800/60 text-slate-900 dark:text-white font-semibold">
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="py-2.5 px-3">Plan Tier</th>
                    <th className="py-2.5 px-3">Operations / Month (Receipts + Dispatches)</th>
                    <th className="py-2.5 px-3">SKU Catalog</th>
                    <th className="py-2.5 px-3">Nigeria (NGN)</th>
                    <th className="py-2.5 px-3">International (USD)</th>
                    <th className="py-2.5 px-3">Branches &amp; Staff Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Free</td>
                    <td className="py-2.5 px-3">100 / mo</td>
                    <td className="py-2.5 px-3">25 SKUs</td>
                    <td className="py-2.5 px-3 font-mono font-medium">₦0 / mo</td>
                    <td className="py-2.5 px-3 font-mono font-medium">$0.00 / mo</td>
                    <td className="py-2.5 px-3">Main Store &bull; Owner + 1 Staff member</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Starter 500</td>
                    <td className="py-2.5 px-3">500 / mo (6,000 / yr)</td>
                    <td className="py-2.5 px-3">150 SKUs</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">₦1,000 / mo &bull; ₦11,400 / yr</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">$2.01 / mo &bull; $22.91 / yr</td>
                    <td className="py-2.5 px-3">1 branch &bull; 1 manager &bull; 1 sales rep</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Growth 1,000</td>
                    <td className="py-2.5 px-3">1,000 / mo (12,000 / yr)</td>
                    <td className="py-2.5 px-3">500 SKUs</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">₦2,000 / mo &bull; ₦22,800 / yr</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">$3.03 / mo &bull; $34.54 / yr</td>
                    <td className="py-2.5 px-3">2 branches &bull; 2 managers &bull; 4 sales reps</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Business 2,500</td>
                    <td className="py-2.5 px-3">2,500 / mo (30,000 / yr)</td>
                    <td className="py-2.5 px-3">1,500 SKUs</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">₦5,000 / mo &bull; ₦57,000 / yr</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">$6.07 / mo &bull; $69.20 / yr</td>
                    <td className="py-2.5 px-3">3 branches &bull; 3 managers &bull; 6 reps &bull; 1 Accountant &bull; Full AP</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Scale 5,000</td>
                    <td className="py-2.5 px-3">5,000 / mo (60,000 / yr)</td>
                    <td className="py-2.5 px-3">Unlimited SKUs</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">₦10,000 / mo &bull; ₦114,000 / yr</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">$11.14 / mo &bull; $127.00 / yr</td>
                    <td className="py-2.5 px-3">5 branches &bull; 5 managers &bull; 10 reps &bull; 2 Accountants &bull; Full AP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Operations Overage Guarantee</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Excess receipts and dispatch waybills are billed at a flat rate: <strong>₦10 NGN per operation</strong> in Nigeria; <strong>$0.003 USD per operation</strong> internationally. Operations never freeze during business rushes.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Expansion Overage</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Additional branch stores or staff member seats beyond plan capacity are billed at a flat rate: <strong>₦100 NGN</strong> in Nigeria; <strong>$0.10 USD</strong> internationally.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Billing Cycles &amp; Quota Resets:</strong> Monthly cycles span strictly 30 days; yearly cycles span 365 days with an upfront pooled quota (12 &times; monthly quota). Upon cycle expiration, the monthly usage count cleanly resets to zero. Mid-cycle upgrades require payment of strictly the price difference, immediately unlocking increased capacities while preserving cycle dates.
              </p>
              <p>
                <strong>Payment Gateway Routing:</strong> Transactions within Nigeria are settled in Nigerian Naira (NGN) via licensed Central Bank of Nigeria gateway partner <strong>Paystack</strong>. International merchants settle in United States Dollars (USD) via <strong>Stripe</strong>.
              </p>
            </div>
          </div>

          {/* Section 3: Digital Sales Book, Immutable Receipts & Role Controls */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <FileCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  3. Digital Sales Book, Immutable Proof of Sale &amp; Role-Scoped Voiding
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi enforces permanent audit ledger integrity. Finalized customer sales receipts can never be silently deleted or altered.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Audit-Safe Voiding Workflow:</strong> Cashiers cannot modify sales retroactively. Erroneous receipts must be voided and re-issued. Every void operation mandates an explicit explanatory reason (minimum 5 characters), records the acting staff member&apos;s identity and timestamp, and leaves an immutable audit trail marked with a prominent VOIDED banner.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Automatic Inventory Restoration:</strong> Voiding an issued sales receipt automatically restocks the exact product quantities back to the issuing branch inventory with an automated audit log entry.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Strict Role Permissions:</strong> Store Owners (CEOs) possess store-wide void authority. Branch Managers and Sales Reps (Cashiers) may only void receipts they personally issued. Only Store Owners and Managers may extend or settle Store Credit; Sales Reps are strictly prohibited from granting credit sales.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Customer Debtors Ledger:</strong> Sales on store credit generate tracked aging entries. Repayments update customer outstanding balances in real time with logged actor attribution.
                </span>
              </div>
            </div>
          </div>

          {/* Section 4: Multi-Branch Inventory Control & Transfers */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Layers className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  4. Multi-Branch Inventory Control, Stock Transfers &amp; Adjustments
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi provides unified stock synchronization across isolated retail stores, warehouse locations, and staff terminals.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Inter-Branch Stock Transfers:</strong> Moving stock between retail stores creates linked twin audit entries (<code className="font-mono text-xs">TRF-XXXXXX</code>) ensuring stock counts decrement from the sending branch and increment at the receiving branch in an atomic transaction.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Audit-Justified Stock Reconciliations:</strong> Manual stock adjustments for breakage, shrinkage, expiration, or physical recount require mandatory justification notes and record the reconciling actor.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Combo Bundles &amp; Packages:</strong> Selling product bundles triggers automated component stock deductions from underlying individual inventory SKUs.
                </span>
              </div>
            </div>
          </div>

          {/* Section 5: Tracked Package Dispatches & Scratch-Off Handover */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <PackageCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  5. Tracked Package Dispatches, Scratch-Off Handover &amp; Reverse Logistics
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi eliminates delivery repudiation and dispatch disputes through tamper-evident package labels and physical scratch-off secret PINs.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Scratch-Off Inner Secret Confidentiality:</strong> Package dispatch labels feature an outer tracking QR code and a confidential inner PIN (<code className="font-mono text-xs">SP-XXXX</code>). The PIN must remain confidential between sender and recipient until physical doorstep delivery. Public tracking routes (<code className="font-mono text-xs">/scan/[id]</code>) strictly conceal the PIN before verification.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Doorstep Dispute Controls &amp; Return Handover:</strong> If a package is rejected at the doorstep, recording a dispute mandates a descriptive dispute reason and confirmation modal. Rejected parcels can be handed back to a delivery rider via documented return custody, updating status to ReturnInTransit until physically confirmed at the store.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Dispute Settlement Authority:</strong> Only Store Owners and Branch Managers can settle disputes via refund and restock (voiding the linked receipt and restoring inventory), replacement re-dispatch (generating a fresh tracking code and PIN), or dismissal.
                </span>
              </div>
            </div>
          </div>

          {/* Section 6: Wholesale Vendor Suite & Accounts Payable */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  6. Wholesale Vendor Management &amp; Accounts Payable Suite
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi provides non-custodial procurement accounting, goods receiving vouchers, and supplier aging ledgers for commercial merchants.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Zero Custody of Supplier Payments:</strong> SellerPadi does not intermediate, hold, or disburse procurement payments to suppliers. All bill payments, bank transfers, or supplier settlements occur directly between the merchant and the wholesale vendor outside the platform.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Settled Bill Immutability:</strong> Fully paid purchase bills are strictly immutable and cannot be edited. Erroneous bills may be archived with mandatory archiver attribution to protect bookkeeping integrity.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Price Comparison &amp; Receiving Vouchers:</strong> Generating goods receiving vouchers establishes internal store audit trails but does not constitute an endorsement, warranty, or guarantee by OGOLABS TECHNOLOGY LTD regarding supplier merchandise quality or contractual terms.
                </span>
              </div>
            </div>
          </div>

          {/* Section 7: Retail Hardware, Cash Drawers & Thermal POS Integration */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Printer className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  7. Retail Hardware, Cash Drawers &amp; Modus Operandi Flexibility
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi is designed with complete operational flexibility: merchants can operate 100% paperless via Smart QR receipts, or integrate standard retail POS thermal printers and cash drawers to suit their business type.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Thermal Printer Support:</strong> The platform natively formats printable slips for standard 80mm and 58mm thermal receipt printers via Web Print and raw ESC/POS command sequences, while always retaining the scannable digital Smart QR proof of sale.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Cash Drawer Triggering:</strong> Standard RJ11/RJ12 cash drawer kick pulses triggered via ESC/POS printer passthrough are supported. Merchants remain responsible for hardware physical cabling and compatibility with their computer or tablet devices.
                </span>
              </div>
            </div>
          </div>

          {/* Section 8: Staff Authentication, Device Concurrency & Compliance */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Lock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  8. Staff PIN Security, Device Concurrency &amp; Account Compliance
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  To eliminate cashier credential sharing, internal leakage, and fraud, SellerPadi enforces strict concurrency boundaries.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-semibold text-slate-900 dark:text-white">Merchant Owner Concurrency</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Merchant Owners are permitted up to <strong>2 simultaneous active device sessions</strong>. Signing in on a 3rd device automatically revokes all prior active sessions.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-semibold text-slate-900 dark:text-white">Staff 1-Device Enforcement</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Staff members log in via email + 6-digit numeric PIN (bcrypt hashed with 10 salt rounds). Staff accounts are strictly limited to <strong>1 active device at a time</strong>.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>Account Suspension &amp; Anti-Fraud Compliance:</strong> OGOLABS TECHNOLOGY LTD reserves the right to audit and freeze accounts violating these Terms or suspected of fraudulent activity. Administrative suspension locks write privileges while keeping historical public receipts and parcel handover records permanently accessible to protect consumer rights.
            </div>
          </div>

          {/* Section 9: Cryptographic Anchoring & Zero-PII */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  9. Decentralized Ledger Anchoring &amp; The Zero-PII Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi bridges non-custodial cloud bookkeeping with immutable cryptographic audit references on Electroneum Smart Chain.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Zero Personal Data on Decentralized Ledgers:</strong> Under no circumstances are customer names, phone numbers, addresses, item breakdowns, or staff emails broadcast or stored on the public blockchain.
              </p>
              <p>
                <strong>Cryptographic Merkle Batch Trees:</strong> The platform aggregates sales digests and handover commitments into mathematical Merkle trees, periodically anchoring non-reversible SHA-256 root hashes to smart contracts. This guarantees tamper-evident mathematical authenticity without exposing personal records.
              </p>
            </div>
          </div>

          {/* Section 10: Limitation of Liability & Governing Law */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Scale className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  10. Limitation of Liability, Indemnification &amp; Governing Law
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  To the maximum extent permitted by applicable law, OGOLABS TECHNOLOGY LTD, its directors, officers, and affiliates shall not be liable for any indirect, incidental, punitive, or consequential damages, lost profits, or business interruption.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Monetary Liability Cap:</strong> In all circumstances, the total cumulative liability of OGOLABS TECHNOLOGY LTD for all claims arising under this Agreement shall not exceed the total subscription fees actually paid by you to SellerPadi in the three (3) months preceding the event giving rise to the claim, or ₦50,000 NGN (whichever is greater).
              </p>
              <p>
                <strong>Governing Law &amp; Jurisdiction:</strong> These Terms and any dispute arising from them shall be governed by and construed in accordance with the laws of the <strong>Federal Republic of Nigeria</strong>, including the Companies and Allied Matters Act 2020. The parties agree to submit to the exclusive jurisdiction of the competent courts of Nigeria for resolution of legal disputes.
              </p>
            </div>
          </div>

          {/* Contact Notice Card */}
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Legal &amp; Regulatory Inquiries</span>
              </p>
              <p>
                <strong>OGOLABS TECHNOLOGY LTD</strong> (RC: 10005885) &bull; 45, Lagbe Area, Moniya, Oyo State, Nigeria.
              </p>
              <p className="text-xs text-slate-500">Official Inquiries: <a href="mailto:support@ogolabs.si" className="text-blue-600 hover:underline">support@ogolabs.si</a> &bull; <a href="mailto:legal@sellerpadi.com" className="text-blue-600 hover:underline">legal@sellerpadi.com</a></p>
            </div>
            <a
              href="mailto:legal@sellerpadi.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-2xs shrink-0"
            >
              <span>Contact Legal Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Back Navigation */}
          <div className="pt-2 flex items-center justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <Link
              href="/"
              className="font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              &larr; Return to Home
            </Link>
            <Link
              href="/privacy"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              Read Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
