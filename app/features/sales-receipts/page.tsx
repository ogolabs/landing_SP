"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  Receipt,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Printer,
  Share2,
  FileText,
  BadgeAlert,
  CreditCard,
} from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";

export default function SalesReceiptsPage() {
  const salesBookUrl = `${APP_BASE_URL}/receipts/new`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                <Receipt className="w-3.5 h-3.5" />
                <span>Digital Sales Book &amp; Smart QR Receipts</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]">
                Counter checkout with instant verifiable QR receipts.
              </h1>

              <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Replace costly thermal paper rolls, lost invoice slips, and dispute headaches. Build customer carts in seconds, issue camera-scannable digital proofs of sale, track debtors, and maintain an immutable ledger.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={salesBookUrl}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Receipt className="w-4 h-4" />
                  <span>Open Digital Sales Book</span>
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Pricing &amp; Free Tier</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero app download for buyers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>80mm thermal receipt printer ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Permanent audit trail with role locks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Walkthrough Grid */}
        <section className="py-16 sm:py-24 max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-16">
          
          {/* Workflow 1: Rapid Counter Sales Register */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                Rapid Counter Sales Entry
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Designed for speed during busy counter rushes.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Counter sales should never slow down your checkout queue. SellerPadi provides quick-tap catalog presets, autocomplete search with last-recorded selling prices, and intuitive line-item steppers.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Multi-Unit Line Items:</strong> Record item name, quantity, unit price, and subtotal automatically.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Automatic Stock Depletion:</strong> Registered catalog items automatically decrement from the acting cashier&apos;s assigned branch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Multiple Payment Tenders:</strong> Tag sales as Cash, Bank Transfer, POS/Card Terminal, or Store Credit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Dual Fulfillment Options:</strong> Switch seamlessly between Store Counter Handover and Direct Dispatch Packaging.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Live Sales Slip Preview
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                  Instant Verification
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>RECEIPT NO:</span>
                  <span className="font-bold text-slate-900 dark:text-white">RCP-261105-8942</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>BRANCH:</span>
                  <span className="text-slate-900 dark:text-white">Victoria Island Flagship</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>CASHIER:</span>
                  <span className="text-slate-900 dark:text-white">Chioma N. (Sales Rep)</span>
                </div>
                <div className="pt-2 border-t border-dashed border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex justify-between font-sans text-xs">
                    <span>1x Wireless Bluetooth Earbuds</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">₦24,500</span>
                  </div>
                  <div className="flex justify-between font-sans text-xs">
                    <span>2x Fast Charging USB-C Cables</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">₦9,000</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between font-bold text-sm text-slate-900 dark:text-white">
                  <span>TOTAL PAID:</span>
                  <span className="text-emerald-600 dark:text-emerald-400">₦33,500</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-[10px] text-slate-500 dark:text-slate-400 font-sans">
                  Audit Reference: 0x8a9f...e43c · Secured Digital Proof of Sale
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 2: Customer Zero-App Experience & Multi-Channel Share */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <Smartphone className="w-6 h-6 text-blue-600 mx-auto" />
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Camera Scan</div>
                  <p className="text-[11px] text-slate-500">Instant view in mobile Safari or Chrome without installing apps.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <Share2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <div className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp Share</div>
                  <p className="text-[11px] text-slate-500">1-tap formatted slip and direct verifiable receipt link.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <Printer className="w-6 h-6 text-slate-700 dark:text-slate-300 mx-auto" />
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Thermal Slip Print</div>
                  <p className="text-[11px] text-slate-500">Pixel-perfect 80mm slip format with your company logo.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <FileText className="w-6 h-6 text-indigo-600 mx-auto" />
                  <div className="text-xs font-bold text-slate-900 dark:text-white">PDF Invoice</div>
                  <p className="text-[11px] text-slate-500">Download high-res accountant-grade PDF files anytime.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                Zero App Friction
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Your customers scan with their normal camera.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Never force shoppers to download an application or sign up for an account just to get their receipt. With dynamic high-resolution QR codes, customers point their phone camera and immediately access their permanent proof of purchase at <code className="text-xs font-mono font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-1.5 py-0.5 rounded-sm">/r/[receiptNumber]</code>.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Mobile Camera Scan:</strong> Fully responsive down to 375px mobile screens with clean typography.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Multi-Device Support:</strong> Works identically on iPhones, Android devices, tablets, and desktop browsers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Zero Paper Waste:</strong> Save thousands annually on thermal paper rolls, ink cartridges, and lost receipt reprints.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workflow 3: Permanent Ledger & Role-Scoped Voiding */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800">
                Auditing &amp; Anti-Fraud Controls
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                No silent deletions. Strict role-scoped voiding.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                In traditional retail systems, rogue employees delete sales or void orders without oversight to conceal missing cash. SellerPadi enforces permanent ledger integrity so no transaction can ever be erased.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Role-Scoped Boundary:</strong> Store Owners, Managers, and Sales Reps can <em>only void receipts they personally issued</em>. Nobody can alter another staff member&apos;s records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Mandatory Audit Reason:</strong> A minimum 5-character reason is strictly required for every void attempt.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Prominent VOIDED Banner:</strong> Public and internal links display an indelible red banner detailing the exact voiding actor, timestamp, and explanation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Automatic Stock Restoration:</strong> Voiding a sale automatically returns item quantities back into the branch catalog stock.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Sales Channels, COGS &amp; Cash Flow:</strong> Attribute orders to Walk-in, WhatsApp, Instagram, Website, or Phone, track Gross Margin from item cost prices, and monitor real Money In vs. Money Out (Operating Expenses &amp; Vendor Payments).</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-2">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
                  <BadgeAlert className="w-4 h-4" />
                  <span>VOIDED RECORD #RCP-261105-8942</span>
                </div>
                <p className="text-xs text-rose-800 dark:text-rose-300 font-mono">
                  Voided by: Adeola O. (Branch Manager) on Nov 5, 2026, 11:42 AM
                </p>
                <p className="text-xs text-rose-700 dark:text-rose-300/90 italic">
                  &ldquo;Customer accidentally ordered 2 units instead of 1; corrected at counter.&rdquo;
                </p>
              </div>
              <div className="text-xs text-slate-500 space-y-2 pt-2">
                <div className="flex justify-between">
                  <span>Audit Stamp:</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">0x9c4f...7281</span>
                </div>
                <div className="flex justify-between">
                  <span>Inventory Restored:</span>
                  <span className="text-emerald-600 font-semibold">+2 Units returned to stock</span>
                </div>
                <div className="flex justify-between">
                  <span>Ledger Status:</span>
                  <span className="text-slate-900 dark:text-white font-semibold">Permanently Preserved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 4: Debtors Ledger & Credit Settlement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-display">
                    Debtor Account: Chief Emeka Okafor
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950 dark:text-blue-300">
                  Store Credit
                </span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Initial Sale Value:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">₦85,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Initial Deposit Paid:</span>
                  <span className="font-mono text-emerald-600 font-bold">₦35,000 (Cash)</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Outstanding Debt:</span>
                  <span className="font-mono text-rose-600 dark:text-rose-400 font-bold text-sm">₦50,000</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Latest Settlement Entry
                  </span>
                  <div className="flex justify-between font-mono text-[11px]">
                    <span>₦25,000 received via Bank Transfer</span>
                    <span className="text-emerald-600 font-semibold">Remaining: ₦25,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                Debtors &amp; Credit Ledger
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Extend store credit with strict governance.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                In many retail and wholesale hubs, extending credit to loyal customers is a commercial necessity. SellerPadi lets you offer credit safely with granular role controls and partial settlement tracking.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Credit Extension Permissions:</strong> Only Store Owners and Branch Managers can issue credit sales. Sales Reps are strictly blocked.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Credit Settlement Boundaries:</strong> Store Owners can settle any credit receipt in the store; Branch Managers can settle only credit receipts they personally issued.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Partial Debt Installments:</strong> Record partial repayments anytime with reference notes, updating the outstanding balance instantly.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
            <div className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-2xs">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
                Ready to upgrade your store sales book?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Start with 100 free operations monthly. No hardware contracts, no thermal paper costs, and zero app download required for your shoppers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={salesBookUrl}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-xs cursor-pointer"
                >
                  Start Recording Counter Sales
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-2xs cursor-pointer"
                >
                  Explore All Pricing Tiers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
