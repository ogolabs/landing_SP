"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  ShieldCheck,
  Clock,
  FileCheck,
  Building2,
  AlertCircle,
  Coins,
  CreditCard,
  Lock,
  Layers,
  ArrowRight,
  PackageCheck,
  Scale,
  Mail,
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-mono font-medium">
                <span>Release: Public Beta (v1.0-beta)</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Public Beta Terms of Service
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Effective Date: November 2, 2026</span>
              </div>
              <span>&bull;</span>
              <span>Operator: SellerPadi Software Initiative (Pre-Incorporation)</span>
            </div>
          </div>

          {/* Beta Notice & Preamble */}
          <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-5 sm:p-6 space-y-2.5">
            <div className="flex items-center gap-2 text-blue-900 dark:text-blue-300 font-bold text-sm sm:text-base">
              <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Public Beta &amp; Pre-Incorporation Operating Disclosure</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              SellerPadi is currently deployed in <strong>Public Beta</strong> by its founding development maintainers prior to formal statutory corporate registration. All services, APIs, and relayer interfaces are provided on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis. By registering an account, configuring branches, or issuing digital receipts, you agree to these Terms. Upon statutory corporate incorporation, all agreements will seamlessly assign to the registered entity.
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
                  1. Non-Custodial Operating System &amp; Zero Fund Custody
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi is a business operations platform, digital sales register, and cryptographic delivery verification system. <strong>SellerPadi is not a bank, depository institution, payment processor, escrow agent, or money transmitter.</strong>
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Zero Custody of Consumer Funds:</strong> SellerPadi never touches, holds, or intermediates customer checkout payments. When a buyer makes a purchase, funds are paid directly to the merchant via <strong>Cash</strong>, direct <strong>Bank Transfer</strong>, external <strong>POS Card Terminals</strong>, or <strong>Store Credit</strong>. SellerPadi only collects software subscription fees.
              </p>
              <p>
                <strong>Merchant Tax Responsibility:</strong> Merchants bear exclusive responsibility for collecting and remitting all statutory retail sales taxes, Value Added Tax (VAT), and adhering to local invoicing regulations (such as Nigeria Revenue Service e-invoicing).
              </p>
            </div>
          </div>

          {/* Section 2: Subscription Pricing & Universal Overage Guarantee */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <CreditCard className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  2. Subscription Plans, Currency Isolation &amp; Universal Overage
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi operates transparent volume tiers backed by our <strong>Universal Overage Guarantee</strong> so cash registers never halt during trading hours.
                </p>
              </div>
            </div>

            {/* Pricing Matrix */}
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/70 dark:bg-slate-800/60 text-slate-900 dark:text-white font-semibold">
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="py-2.5 px-3">Plan Tier</th>
                    <th className="py-2.5 px-3">Monthly Ops (Receipts + Dispatches)</th>
                    <th className="py-2.5 px-3">SKU Catalog</th>
                    <th className="py-2.5 px-3">Nigeria (NGN)</th>
                    <th className="py-2.5 px-3">International (USD)</th>
                    <th className="py-2.5 px-3">Stores &amp; Staff</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Free</td>
                    <td className="py-2.5 px-3">100 / mo</td>
                    <td className="py-2.5 px-3">25 items</td>
                    <td className="py-2.5 px-3 font-mono font-medium">₦0 / mo</td>
                    <td className="py-2.5 px-3 font-mono font-medium">$0.00 / mo</td>
                    <td className="py-2.5 px-3">HQ only &bull; Up to 1 Manager or Sales Rep*</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Starter 500</td>
                    <td className="py-2.5 px-3">500 / mo</td>
                    <td className="py-2.5 px-3">150 items</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">₦1,000 / mo</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">$2.01 USD / mo</td>
                    <td className="py-2.5 px-3">1 branch &bull; 1 manager &bull; 1 rep</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Growth 1,000</td>
                    <td className="py-2.5 px-3">1,000 / mo</td>
                    <td className="py-2.5 px-3">500 items</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">₦2,000 / mo</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">$3.03 USD / mo</td>
                    <td className="py-2.5 px-3">2 branches &bull; 2 managers &bull; 4 reps</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Business 2,500</td>
                    <td className="py-2.5 px-3">2,500 / mo</td>
                    <td className="py-2.5 px-3">1,500 items</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">₦5,000 / mo</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">$6.07 USD / mo</td>
                    <td className="py-2.5 px-3">3 branches &bull; 3 managers &bull; 6 reps</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Scale 5,000</td>
                    <td className="py-2.5 px-3">5,000 / mo</td>
                    <td className="py-2.5 px-3">Unlimited</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">₦10,000 / mo</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-900 dark:text-white">$11.14 USD / mo</td>
                    <td className="py-2.5 px-3">5 branches &bull; 5 managers &bull; 10 reps</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              *Free tier includes the Store Owner plus up to 1 staff member (either 1 Manager or 1 Sales Rep) at Headquarters. Creating separate additional branches or inviting further staff requires upgrading to a paid tier.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Operations Overage</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Excess receipts &amp; dispatches: Flat <strong>₦10 NGN per unit</strong> in Nigeria; flat <strong>$0.003 USD per unit</strong> internationally.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Expansion Overage</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Extra branches or staff: Flat <strong>₦100 NGN</strong> in Nigeria; flat <strong>$0.10 USD</strong> internationally.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
              <strong>Billing Cycle &amp; Non-Refundable Policy:</strong> Subscriptions renew every 30 days. You may cancel renewal at any time. Because operational quotas and relayer reserves are allocated immediately upon payment, all subscription and overage fees in Public Beta are non-refundable.
            </p>
          </div>

          {/* Section 3: Ledger Integrity & Voiding Governance */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <FileCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  3. Digital Sales Book, Immutable Receipts &amp; Role-Scoped Voiding
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi enforces permanent ledger integrity. Finalized receipts cannot be silently deleted or edited in place.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Strict Void &amp; Re-Issue Workflow:</strong> To correct a sale, the cashier must void the receipt and issue a fresh one. Every void requires a descriptive reason (minimum 5 characters) and permanently records the acting staff member.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Role Boundaries:</strong> Owners can void any receipt store-wide. Branch Managers and Sales Reps can only void receipts they personally issued. Only Owners and Managers may extend or settle store credit.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong>Automatic Inventory Restoration:</strong> Voiding an issued receipt automatically restores product quantities to the issuing store&apos;s inventory with an immutable movement audit record.
                </span>
              </div>
            </div>
          </div>

          {/* Section 4: Security & Device Concurrency */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Lock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  4. Staff PIN Security &amp; Anti-Fraud Device Concurrency
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  To eliminate cashier fraud and credential sharing, SellerPadi enforces strict concurrency boundaries.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-semibold text-slate-900 dark:text-white">Merchant Device Concurrency</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Merchant Owners are permitted up to <strong>2 simultaneous active sessions</strong>. Logging in on a 3rd device automatically terminates all prior active sessions.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-semibold text-slate-900 dark:text-white">Staff 1-Device Limit</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Staff members log in via email + 6-digit numeric PIN (bcrypt hashed). Staff accounts are strictly limited to <strong>1 active device at a time</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Tracked Dispatches & Scratch-Off Handover */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <PackageCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  5. Tracked Package Dispatches &amp; Scratch-Off Handover Verification
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Deliveries feature a confidential 4-digit scratch-off PIN (<code className="font-mono text-xs">SP-XXXX</code>). Entering this code at <code className="font-mono text-xs">/scan/[id]</code> mathematically confirms physical parcel handover. Public tracking routes never reveal the scratch-off PIN prior to verification.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Beta Liability Cap */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Scale className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  6. Limitation of Liability &amp; Public Beta Monetary Cap
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  To the maximum extent permitted by applicable law, SellerPadi and its operators shall not be liable for any indirect, incidental, or consequential damages. In all events, our total cumulative liability under Public Beta is strictly capped at the greater of <strong>$50.00 USD</strong> (or <strong>₦25,000 NGN</strong>) or the total subscription fees paid by you in the 30 days preceding the claim.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Notice Card */}
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Questions or Legal Inquiries?</span>
              </p>
              <p>For questions regarding our Public Beta Terms of Service, contact our legal team.</p>
            </div>
            <a
              href="mailto:legal@sellerpadi.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-2xs shrink-0"
            >
              <span>Contact Legal</span>
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
              Read Public Beta Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
