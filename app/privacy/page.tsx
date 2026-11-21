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
  Building2,
  CheckCircle2,
  UserCheck,
  PackageCheck,
  Layers,
  Cookie,
} from "lucide-react";
import Link from "next/link";
import { APP_VERSION_LABEL } from "@/lib/version";

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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Statutory Entity: RC 10005885</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-blue-700 dark:text-blue-300 font-mono font-medium">
                <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Release: Live Public Beta ({APP_VERSION_LABEL})</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Privacy Policy &amp; Data Protection Charter
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Effective Date: November 12, 2026</span>
              </div>
              <span>&bull;</span>
              <span>Data Controller: OGOLABS TECHNOLOGY LTD (RC: 10005885)</span>
            </div>
          </div>

          {/* Core Non-Monetization Pledge */}
          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-5 sm:p-6 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Our Commercial Non-Monetization Pledge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>OGOLABS TECHNOLOGY LTD will never sell, rent, monetize, broker, or harvest your retail sales records, inventory stock positions, customer receipt details, or supplier purchase bills.</strong> Your commercial sales book belongs strictly to your enterprise. We monetize exclusively through transparent software subscription tiers and flat overage fees.
            </p>
          </div>

          {/* Section 1: Statutory Controller & Legal Framework */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  1. Statutory Data Controller &amp; Regulatory Framework
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  The data controller responsible for the personal and commercial data processed across <strong>SellerPadi</strong> is <strong>OGOLABS TECHNOLOGY LTD</strong>, a private company limited by shares incorporated under the <strong>Companies and Allied Matters Act 2020 (CAMA 2020)</strong> by the Corporate Affairs Commission (CAC), Nigeria, with <strong>RC 10005885</strong>, <strong>TIN 2623024126994</strong>, having its registered office at <strong>45, Lagbe Area, Moniya, Oyo State, Nigeria</strong>.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Statutory Compliance:</strong> This Privacy Policy is constructed in strict conformity with the <strong>Nigeria Data Protection Act 2023 (NDPA 2023)</strong>, oversight guidelines issued by the <strong>Nigeria Data Protection Commission (NDPC)</strong>, and international benchmarks including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA) for international cross-border transactions.
              </p>
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
                  2. The Zero-PII On-Chain Cryptographic Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Public blockchains are globally permanent and transparent. Writing consumer names, phone numbers, or itemized prices to a decentralized ledger violates statutory privacy rights and exposes businesses to commercial surveillance.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Zero Personal Data Touches the Ledger:</strong> Under no circumstances are customer names, telephone numbers, purchased product line items, staff emails, or store physical addresses broadcast or written to the Electroneum Smart Chain.
              </p>
              <p>
                <strong>Cryptographic SHA-256 Hashes Only:</strong> The only data recorded on-chain are non-reversible mathematical digests (<code className="font-mono text-xs">receiptHash</code> and <code className="font-mono text-xs">innerSecretHash</code>) anchored into periodic Merkle batch trees. These establish immutable mathematical proof of transaction timestamp and validity without exposing any human-readable content.
              </p>
              <p>
                <strong>Confidential Scratch-Off PIN:</strong> Package dispatch PINs (<code className="font-mono text-xs">SP-XXXX</code>) remain strictly confidential between merchant and recipient. Public scan routes (<code className="font-mono text-xs">/scan/[id]</code>) never expose the inner PIN prior to physical doorstep verification.
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
                  3. Information We Collect &amp; Secure Off-Chain Storage
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  All readable operational data is stored in encrypted off-chain MongoDB Atlas cloud database clusters with strict network boundary isolation.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 grid sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Store Identity &amp; Staff Security</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Business name, store handle, verified support phone, and staff emails. Staff 6-digit numeric PINs are hashed using <code className="font-mono text-xs">bcryptjs</code> (10 salt rounds)—we never store or log plaintext PINs.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Sales &amp; Receipt Records</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Product line items, pricing, tax calculations, payment channels (Cash, Transfer, POS/Card, Store Credit), and optional customer name/phone to prevent disputes and power receipts lookup.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <PackageCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Tracked Package Dispatches</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Recipient name (locked from sale), delivery phone, destination address, package tracking code (<code className="font-mono text-xs">SHPT-XXXXXX</code>), and cryptographic scratch-off PIN commitments.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Wholesale Vendors &amp; AP</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Supplier business names, contact details, payment terms, itemized purchase bills, goods receiving vouchers, and AP aging buckets (stored strictly off-chain).
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Enterprise Infrastructure & Sub-Processors */}
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
                  OGOLABS TECHNOLOGY LTD partners strictly with certified SOC-2, ISO 27001, and PCI-DSS compliant infrastructure providers:
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/70 dark:bg-slate-800/60 text-slate-900 dark:text-white font-semibold">
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="py-2.5 px-3">Sub-Processor</th>
                    <th className="py-2.5 px-3">Role</th>
                    <th className="py-2.5 px-3">Data Processed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">MongoDB Atlas</td>
                    <td className="py-2.5 px-3">Encrypted Cloud Database</td>
                    <td className="py-2.5 px-3">Encrypted merchant store, receipt, inventory, and staff records (AES-256 at rest)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Vercel Inc.</td>
                    <td className="py-2.5 px-3">Edge Web Hosting &amp; Serverless Runtime</td>
                    <td className="py-2.5 px-3">Encrypted HTTPS web traffic delivery (TLS 1.3), edge caching, and stateless API execution (no persistent database storage)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Paystack (Stripe Subsidiary)</td>
                    <td className="py-2.5 px-3">Domestic NGN &amp; USD Gateway</td>
                    <td className="py-2.5 px-3">Merchant email, phone, and subscription payment transaction references</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Stripe</td>
                    <td className="py-2.5 px-3">International Subscription Billing</td>
                    <td className="py-2.5 px-3">Tokenized customer billing ID and payment method tokens</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Google Identity Services</td>
                    <td className="py-2.5 px-3">Merchant Single Sign-On</td>
                    <td className="py-2.5 px-3">Verified email, Google subject ID, and merchant profile picture</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">ZeptoMail (Zoho)</td>
                    <td className="py-2.5 px-3">Transactional Email &amp; PDF Statements</td>
                    <td className="py-2.5 px-3">Merchant email, login OTP passcodes, and attached automated 3-statement PDF bundles</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Termii</td>
                    <td className="py-2.5 px-3">Transactional SMS Routing</td>
                    <td className="py-2.5 px-3">Recipient telephone number, SMS verification passcodes, and subscription expiry alerts</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Cloudflare</td>
                    <td className="py-2.5 px-3">Turnstile Bot Mitigation &amp; Edge CDN</td>
                    <td className="py-2.5 px-3">Client IP address, browser telemetry, and challenge response tokens</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Electroneum Smart Chain</td>
                    <td className="py-2.5 px-3">Decentralized Merkle Tree Anchoring</td>
                    <td className="py-2.5 px-3">Non-reversible SHA-256 root hashes only (Zero PII on-chain)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: Cookies & Local Storage Disclosure */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Cookie className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  5. Strictly Necessary Cookies &amp; Local Storage (No Cross-Site Ad Tracking)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  SellerPadi operates under a privacy-first engineering model. We do not use third-party advertising cookies, behavioral profiling pixels, or cross-site commercial trackers.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Exemption from Consent Banners:</strong> Under the Nigeria Data Protection Act 2023 (NDPA), the EU/UK ePrivacy Directive (Article 5(3)), and global privacy benchmarks, digital platforms do not require intrusive cookie consent banners when cookies are strictly technical and essential for service delivery. SellerPadi utilizes exclusively <strong>Strictly Necessary</strong> identifiers:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100/70 dark:bg-slate-800/60 text-slate-900 dark:text-white font-semibold">
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      <th className="py-2.5 px-3">Identifier</th>
                      <th className="py-2.5 px-3">Type</th>
                      <th className="py-2.5 px-3">Purpose &amp; Expiry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-semibold text-slate-900 dark:text-white">auth_token</td>
                      <td className="py-2.5 px-3">HTTP-Only Cookie (Secure)</td>
                      <td className="py-2.5 px-3">Authenticates merchant owner sessions via passwordless OTP. Inaccessible to JavaScript; multi-device enforcement.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-semibold text-slate-900 dark:text-white">workspace_session</td>
                      <td className="py-2.5 px-3">HTTP-Only Cookie (Secure)</td>
                      <td className="py-2.5 px-3">Authenticates staff PIN logins (Manager, Sales Rep, Accountant) with single-device enforcement (7-day duration).</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-semibold text-slate-900 dark:text-white">sellerpadi_access</td>
                      <td className="py-2.5 px-3">HTTP-Only Cookie (Secure)</td>
                      <td className="py-2.5 px-3">Verifies authorized staging / early access passphrase entry.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-semibold text-slate-900 dark:text-white">theme</td>
                      <td className="py-2.5 px-3">Client LocalStorage</td>
                      <td className="py-2.5 px-3">Persists user light or dark mode visual preference on the client device.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Zero Ad Trackers or Third-Party Pixels:</strong> We do not load Meta (Facebook) Pixel, Google Ads Remarketing, TikTok Pixel, or any commercial audience tracking scripts. Because no personal data is transferred to behavioral ad brokers, no consent banner or tracking opt-out is required.
              </p>
            </div>
          </div>

          {/* Section 6: Data Subject Rights & Security */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <Lock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  6. Data Subject Rights, Export Controls &amp; Deactivation
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Under the Nigeria Data Protection Act 2023 (NDPA) and global privacy standards, you maintain rights to access, rectify, port, and request deactivation of your personal information:
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Data Portability:</strong> Merchants can export vector PDF sales statements, debtors aging lists, inventory valuations, and CSV reports at any time directly from their workspace.
              </p>
              <p>
                <strong>Accounting &amp; Tax Audit Retention:</strong> Because issued receipts and stock movements constitute accountant-grade commercial records subject to statutory tax audit rules, finalized financial ledger entries remain archived with cryptographic hash commitments to prevent accounting fraud.
              </p>
            </div>
          </div>

          {/* Section 7: Public Beta Data Protection & Continuity Charter */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/50 dark:border-blue-800/50">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  7. Public Beta Data Protection, Cloud Infrastructure &amp; Continuity Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  During this live commercial Public Beta (<code className="font-mono text-xs">{APP_VERSION_LABEL}</code>), your personal, commercial, and financial records are governed by the same rigorous privacy standards as our General Availability platform:
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Zero Data Loss Guarantee:</strong> All merchant account registrations, verified store branches, inventory catalog items, digital receipts, customer debts, tracked packages, and partner commission balances generated during the Public Beta will permanently persist without interruption, wipes, or resets into General Availability (GA).
              </p>
              <p>
                <strong>Statutory Data Protection Standards:</strong> All statutory protections under the Nigeria Data Protection Act 2023 (NDPA), NDPC guidelines, and GDPR apply with full force and effect during the Public Beta. We do not degrade privacy safeguards, encryption standards, or compliance monitoring for Beta participants.
              </p>
              <p>
                <strong>Cloud Security Posture:</strong> All operational databases are hosted on <strong>MongoDB Atlas</strong> with enterprise AES-256 encryption at rest, automated replica sets, and strict network isolation. Web and API traffic is served via <strong>Vercel</strong> edge infrastructure over TLS 1.3 encryption.
              </p>
              <p>
                <strong>Beta Security Inquiries:</strong> Any privacy questions or vulnerability reports regarding the Public Beta may be submitted directly to our dedicated support desk at <a href="mailto:support@sellerpadi.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">support@sellerpadi.com</a>.
              </p>
            </div>
          </div>

          {/* Contact Notice Card */}
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Privacy Inquiries &amp; Data Protection Officer (DPO)</span>
              </p>
              <p>
                <strong>OGOLABS TECHNOLOGY LTD</strong> (RC: 10005885) &bull; 45, Lagbe Area, Moniya, Oyo State, Nigeria.
              </p>
              <p className="text-xs text-slate-500">Official Desk: <a href="mailto:support@sellerpadi.com" className="text-blue-600 hover:underline">support@sellerpadi.com</a> &bull; <a href="mailto:support@ogolabs.si" className="text-blue-600 hover:underline">support@ogolabs.si</a></p>
            </div>
            <a
              href="mailto:support@sellerpadi.com"
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
              Read Terms of Service &rarr;
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
