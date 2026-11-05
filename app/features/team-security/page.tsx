"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  ShieldCheck,
  Users,
  KeyRound,
  Smartphone,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Building2,
  RefreshCw,
} from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";

export default function TeamSecurityPage() {
  const staffLoginUrl = `${APP_BASE_URL}/workspace/login`;
  const teamSettingsUrl = `${APP_BASE_URL}/settings?tab=team`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Multi-User Roles &amp; Security Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]">
                Empower your team. Safeguard your store.
              </h1>

              <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Scale your retail business across branches without sacrificing security. Provide frictionless 6-digit numeric PIN logins for branch staff, enforce single-device session locks, and preserve permanent audit accountability on every transaction.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={teamSettingsUrl}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  <span>Manage Team &amp; Branches</span>
                </a>
                <a
                  href={staffLoginUrl}
                  className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Staff PIN Login Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Frictionless 6-digit PIN logins</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Single-device session lock</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Permanent actor accountability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Role Comparison Matrix Section */}
        <section className="py-16 sm:py-24 max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
              Role Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              4 distinct roles tailored for modern retail operations.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Every staff member operates inside a strict, role-scoped boundary. Staff never interact with crypto wallets, recovery phrases, or private keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Role 1: Store Owner (CEO) */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Store Owner (CEO)</h3>
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">Merchant Governor</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Supreme store governance across all physical branches, financial subscriptions, team management, and global audit queries.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Global visibility across all branches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Manage billing, quotas &amp; payment methods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Invite &amp; revoke staff members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Settle any credit receipt in store</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Role 2: Branch Manager */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Branch Manager</h3>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">Store Supervisor</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Complete operational authority for their assigned physical branch location. Supervise cashiers, manage stock transfers, and settle branch disputes.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Branch counter sales &amp; stock control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Extend &amp; settle credit sales (own receipts)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Inter-branch stock transfer initiation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dispute settlement &amp; re-dispatch</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Role 3: Sales Rep */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Sales Rep</h3>
                  <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Counter Cashier</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Frictionless counter sales checkout and smart QR receipt issuance. Locked strictly out of store settings, financial credit, and catalog modifications.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Rapid counter sales &amp; QR receipt generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Personal receipt voiding only (with reason)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Strictly blocked from extending credit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Strictly blocked from settling debt</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Role 4: Accountant */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Accountant</h3>
                  <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">Enterprise Financial &amp; AP Officer</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Enterprise-wide scope across Headquarters &amp; all branches. Available on Business (Lead Accountant) and Scale (Lead &amp; Deputy Accountants). Oversees stock valuation, purchase bills, and vendor AP with 4 optional CEO-delegated operational privileges.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Multi-branch inventory valuation &amp; stock count audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Vendor profiles, purchase bills &amp; 30/60/90+ day AP aging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>A4 vector PDF valuation &amp; audit statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">4 CEO-Toggled Privileges: Sales, Dispatches, Catalog &amp; Transfers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Granular Permissions Boundary Matrix Table */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
            <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                Detailed Permissions Boundary Matrix
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Authoritative permission boundaries enforced by SellerPadi security middleware. Accountant capabilities are delegated based on CEO authorization.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-100 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4 sm:px-6">Permission / Capability</th>
                    <th className="py-3 px-4 text-center">Owner (CEO)</th>
                    <th className="py-3 px-4 text-center">Branch Manager</th>
                    <th className="py-3 px-4 text-center">Sales Rep</th>
                    <th className="py-3 px-4 text-center">Accountant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Issue Counter Sales &amp; QR Receipts</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ All Branches</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ Own Branch</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ Own Branch</td>
                    <td className="py-3.5 px-4 text-center text-blue-600 dark:text-blue-400 font-semibold">Optional (CEO Granted)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Void Mistakes on Digital Receipts</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-semibold">Own Issued Only</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-semibold">Own Issued Only</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-semibold">Own Issued Only</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-semibold">Own Issued Only</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Extend Store Credit to Shoppers</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Settle Customer Debtor Balances</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ Any Receipt</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">Own Receipts Only</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Create &amp; Dispatch Shipments (SHPT)</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ All Branches</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ Own Branch</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ Own Branch</td>
                    <td className="py-3.5 px-4 text-center text-blue-600 dark:text-blue-400 font-semibold">Optional (CEO Granted)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Update Dispatches &amp; Reprint Labels</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-semibold">Creator Only</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-semibold">Creator Only</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-semibold">Creator Only</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-semibold">Creator Only</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Settle Doorstep Disputes &amp; Returns</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ All Branches</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ Own Branch</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Create Items &amp; Adjust Inventory</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ Own Branch</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ (Audit &amp; Stock Count)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Inter-Branch Stock Transfers (TRF)</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-blue-600 dark:text-blue-400 font-semibold">Optional (CEO Granted)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Manage Vendors, Bills &amp; AP Aging</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ All Branches</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ All Branches</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Export Financial &amp; Valuation Reports</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ All Branches</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ Own Branch</td>
                    <td className="py-3.5 px-4 text-center text-slate-500 font-medium">Basic Sales Only</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓ All Branches</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">Billing, Subscription &amp; Staff Settings</td>
                    <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                    <td className="py-3.5 px-4 text-center text-rose-500 font-bold">✗ Blocked</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security & Authentication Guarantees */}
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                Security Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Enterprise-grade security without operational friction.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Security Pill 1: 6-Digit PIN Authentication */}
              <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  Frictionless 6-Digit PIN Logins
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Branch staff sign in at <code className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-1 py-0.5 rounded-sm">/workspace/login</code> using only their email and a secure 6-digit PIN. Staff never handle crypto wallets or private keys.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 font-mono">
                  Hashed via bcrypt (10 rounds) · Zero plaintext storage
                </div>
              </div>

              {/* Security Pill 2: Single-Device Enforcement */}
              <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  Single-Device Session Lock
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Staff can only log in on <strong>one device at a time</strong>. Signing in on a new device immediately terminates and expires the prior active session.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 font-mono">
                  5 failed PIN attempts triggers a 15-minute security lockout
                </div>
              </div>

              {/* Security Pill 3: Real-Time Privilege Sync */}
              <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  Real-Time Privilege Sync
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  When a store owner modifies a staff member&apos;s role or branch assignment in settings, changes reflect immediately across active sessions without requiring re-login.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 font-mono">
                  Guided inactive actions with informative guidance alerts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-2xs">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
                Ready to secure your store operations?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Invite branch managers, sales cashiers, and inventory accountants with frictionless 6-digit PIN logins and permanent accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={teamSettingsUrl}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-xs cursor-pointer"
                >
                  Manage Team &amp; Branches
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-2xs cursor-pointer"
                >
                  View Team Tier Quotas
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
