"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  ShieldCheck,
  Clock,
  FileText,
  Database,
  Lock,
  EyeOff,
  Server,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                <span>Data Privacy &amp; Cryptographic Security</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-mono font-medium">
                <span>Release: Public Beta (v1.0-beta)</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Public Beta Privacy Policy
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Effective Date: November 2, 2026</span>
              </div>
              <span>&bull;</span>
              <span>Data Controller: SellerPadi Software Initiative (Pre-Incorporation)</span>
            </div>
          </div>

          {/* Core Non-Monetization Pledge */}
          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-5 sm:p-6 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Our Commercial Non-Monetization Pledge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>SellerPadi will never sell, rent, monetize, or trade your store sales records, inventory lists, or customer receipt details to data brokers, advertisers, or third parties.</strong> Your sales book and customer relationships belong strictly to your store. We monetize solely through transparent software subscription tiers and flat overage fees.
            </p>
          </div>

          {/* Section 1: Pre-Incorporation Operator & Beta Scope */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <FileText className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  1. Pre-Incorporation Controller &amp; Scope of Beta Operations
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi is currently deployed in a pre-incorporation Public Beta. The data controller responsible for personal and commercial data is the SellerPadi founding developer team. Upon statutory corporate incorporation, all controller commitments will automatically assign to the registered entity.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Zero-PII On-Chain Guarantee */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <EyeOff className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  2. The Zero-PII On-Chain Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Public blockchains are globally readable. Writing personal customer data or invoice prices directly to a public ledger violates privacy laws and creates business surveillance risks.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Zero Personal Data Touches the Chain:</strong> Under no circumstances are customer names, phone numbers, items, staff emails, or store addresses written to the decentralized ledger.
              </p>
              <p>
                <strong>One-Way SHA-256 Hashes Only:</strong> The only data recorded on-chain are non-reversible mathematical digests (<code className="font-mono text-xs">receiptHash</code> and <code className="font-mono text-xs">innerSecretHash</code>) anchoring immutable proof of sale and delivery timestamps without exposing transaction content.
              </p>
              <p>
                <strong>Confidential Scratch-Off PIN:</strong> Package delivery PINs (<code className="font-mono text-xs">SP-XXXX</code>) remain private between merchant and recipient. Public scan routes (<code className="font-mono text-xs">/scan/[id]</code>) never expose the PIN prior to verification.
              </p>
            </div>
          </div>

          {/* Section 3: Information We Collect */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Database className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  3. Information We Collect &amp; Store
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  All readable operational data is stored in encrypted off-chain MongoDB Atlas cloud databases.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 grid sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">Store Identity &amp; Staff</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Business name, handle, support phone, and staff emails. Staff PINs are hashed using <code className="font-mono text-xs">bcrypt</code> (10 salt rounds)—we never store raw PINs.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">Sales &amp; Receipt Records</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Line items, prices, and attached customer name/phone to prevent customer disputes and power loyalty references.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">Package Dispatches</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Recipient name, phone, delivery address, parcel tracking identifier (<code className="font-mono text-xs">SHPT-XXXXXXXXXXXX</code>), and encrypted scratch-off PIN commitments.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">Bot Defense &amp; Security</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Cloudflare Turnstile tokens, IP addresses, and user-agent strings to prevent bot brute-force attacks on OTP endpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Sub-Processors */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Server className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  4. Enterprise Infrastructure &amp; Third-Party Sub-Processors
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi works strictly with SOC-2 and PCI-DSS certified enterprise infrastructure partners:
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/70 dark:bg-slate-800/60 text-slate-900 dark:text-white font-semibold">
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="py-2.5 px-3">Provider</th>
                    <th className="py-2.5 px-3">Role</th>
                    <th className="py-2.5 px-3">Data Handled</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">MongoDB Atlas</td>
                    <td className="py-2.5 px-3">Encrypted Cloud Database</td>
                    <td className="py-2.5 px-3">Encrypted merchant, receipt, and inventory data</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Paystack</td>
                    <td className="py-2.5 px-3">Domestic NGN &amp; International USD Billing</td>
                    <td className="py-2.5 px-3">Merchant email, phone, and subscription transaction references</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Stripe</td>
                    <td className="py-2.5 px-3">International Subscription Billing</td>
                    <td className="py-2.5 px-3">Tokenized customer ID and billing addresses</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Google Identity</td>
                    <td className="py-2.5 px-3">Merchant Single Sign-On</td>
                    <td className="py-2.5 px-3">Verified email, Google sub ID, and profile picture</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">ZeptoMail (Zoho)</td>
                    <td className="py-2.5 px-3">Transactional Email Delivery</td>
                    <td className="py-2.5 px-3">Recipient email and OTP / staff PIN verification codes</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Termii</td>
                    <td className="py-2.5 px-3">Transactional SMS (Coming Soon)</td>
                    <td className="py-2.5 px-3">Recipient phone and SMS verification passcodes</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Cloudflare</td>
                    <td className="py-2.5 px-3">Turnstile Bot Defense &amp; CDN</td>
                    <td className="py-2.5 px-3">Client IP, browser telemetry, and challenge tokens</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Avalanche C-Chain</td>
                    <td className="py-2.5 px-3">Decentralized Cryptographic Timestamping</td>
                    <td className="py-2.5 px-3">Non-reversible SHA-256 hashes (Zero PII on-chain)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: Data Rights & Security Controls */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Lock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  5. Data Security, Export Rights &amp; Deactivation
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Merchants can export PDF sales statements and CSV spreadsheets at any time. You may request account deactivation by emailing our privacy desk. Issued receipts and movement logs remain archived with cryptographic hashes to maintain accounting audit integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Notice Card */}
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Privacy Inquiries or Data Requests?</span>
              </p>
              <p>Contact our dedicated data protection desk for any questions or requests.</p>
            </div>
            <a
              href="mailto:privacy@sellerpadi.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-2xs shrink-0"
            >
              <span>Email Privacy Desk</span>
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
              href="/terms"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              Read Public Beta Terms of Service &rarr;
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
