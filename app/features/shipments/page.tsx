"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  Truck,
  ShieldCheck,
  ArrowRight,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Package,
  UserCheck,
} from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";

export default function ShipmentsPage() {
  const shipmentsUrl = `${APP_BASE_URL}/shipments`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-400">
                <Truck className="w-3.5 h-3.5" />
                <span>Tracked Logistics &amp; Tamper-Evident Delivery</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]">
                End-to-end parcel tracking with secret scratch-off PINs.
              </h1>

              <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Stop fraudulent rider claims, lost parcels, and unverified package handovers. Connect shipments to dual-layer QR stickers with confidential scratch-off PINs, locked customer names, and audited reverse logistics for doorstep disputes.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={shipmentsUrl}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Truck className="w-4 h-4" />
                  <span>Open Shipments Hub</span>
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Operations Quota</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Secret SP-XXXX scratch PIN</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Locked recipient anti-spoofing badge</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Full reverse logistics custody</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Walkthrough Grid */}
        <section className="py-16 sm:py-24 max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-16">
          
          {/* Workflow 1: Dual-Layer Dispatch Labels & Scratch-Off PIN */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                Tamper-Proof Labeling
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Two layers of cryptographic protection on every package.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Delivery riders frequently claim packages were handed over when they were left with unauthorized third parties or stolen. SellerPadi prevents this using dual-layer dispatch labels with confidential scratch-off inner PINs.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Outer Tracking QR:</strong> Publicly scannable by delivery riders or dispatch hubs to inspect package destination and delivery checkpoints.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Inner Scratch-Off Secret PIN (SP-XXXX):</strong> Concealed under physical scratch-off foil. Only the verified recipient scratches it upon physical delivery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">10-up A4 Batch Printing:</strong> Pre-print branded sticker sheets ahead of morning rush hours with high-resolution layout.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-display">
                    Package SHPT-920412
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  In Transit
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>TRACKING ID:</span>
                  <span className="text-slate-900 dark:text-white font-bold">SHPT-920412</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>DISPATCH STICKER:</span>
                  <span className="text-slate-900 dark:text-white">Dual-Layer Tamper-Proof</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2 font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                      Scratch-Off Inner Secret:
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-white bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-sm tracking-widest">
                      SP-••••
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 italic">
                    Remains confidential until recipient scratches foil upon doorstep handover.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 2: Public Handover Verification & Anti-Spoofing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-3">
                <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-xs">
                  <UserCheck className="w-4 h-4" />
                  <span>PUBLIC HANDOVER VERIFICATION (/scan/[id])</span>
                </div>
                <div className="space-y-1.5 text-xs font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Recipient Name:</span>
                    <span className="font-bold text-slate-900 dark:text-white">Engr. Tunde Adeleke</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Recorded at Sale · Locked</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-blue-200/60 dark:border-blue-900/60 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-500">Handover PIN:</span>
                  <span className="font-bold text-emerald-600">SP-4819 (Verified)</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                Anti-Spoofing Security
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Locked recipient names prevent impostor handovers.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                When the delivery rider arrives, they scan the package QR with their smartphone. On the public verification page at <code className="text-xs font-mono font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-1.5 py-0.5 rounded-sm">/scan/[id]</code>, the buyer&apos;s name recorded during sale creation is permanently locked and non-editable.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">&ldquo;Recorded at Sale&rdquo; Badge:</strong> Riders cannot overwrite or change the buyer name to cover up handing packages to unauthorized third parties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Strict PIN Gating:</strong> Verification requires the 4-digit scratch-off secret. Without the secret, status remains unverified.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workflow 3: Doorstep Disputes & Reverse Custody */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800">
                Doorstep Dispute Control
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Doorstep rejection triggers transparent reverse logistics.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                When a customer rejects a package due to wrong item, transit damage, or cancellation, SellerPadi requires a verified dispute reason and transitions the shipment into a transparent reverse custody state machine.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Mandatory Dispute Reason:</strong> Minimum 5 characters required with confirmation review modal (<code className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded-sm">DisputeConfirmModal</code>).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Return Rider Handover:</strong> Records return rider name, phone, and hub stamp (<code className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded-sm">/return-handover</code>), moving status to <em>ReturnInTransit</em>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Physical Store Reception:</strong> Warehouse staff confirms physical store return (<code className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded-sm">/store-received</code>), moving status to <em>StoreReceived</em>.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>REVERSE CUSTODY · RETURN IN TRANSIT</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Doorstep dispute confirmed: &ldquo;Customer ordered Space Grey, but Silver delivered.&rdquo;
                </p>
                <div className="text-[11px] font-mono text-slate-700 dark:text-slate-300 pt-1 border-t border-slate-200 dark:border-slate-700 flex justify-between">
                  <span>Return Rider:</span>
                  <span>Musa Yakubu (+234 802 345 6789)</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Step 1: Doorstep Rejection Confirmed</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span>Step 2: Return Rider in Transit to Store</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>Step 3: Store Physical Reception &amp; Restock</span>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 4: Dispute Settlement Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3 font-sans text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-blue-600" />
                  Option 1: Refund &amp; Restock
                </div>
                <p className="text-slate-500 text-[11px]">
                  Automatically voids the linked digital receipt and restores inventory stock back into the origin branch.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  Option 2: 1-Click Replacement Re-Dispatch
                </div>
                <p className="text-slate-500 text-[11px]">
                  Generates a fresh package tracking code and new confidential scratch PIN while invalidating the old tracking label.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  Option 3: Dispute Dismissed
                </div>
                <p className="text-slate-500 text-[11px]">
                  Resolves invalid or fraudulent claims with mandatory audit notes recorded in the permanent ledger.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                Settlement Governance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Owners and Managers settle disputes in 1 click.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Only Store Owners and Branch Managers have authority to resolve disputes via the <code className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded-sm">DisputeSettlementModal</code>. Once resolved, inventory and sales ledgers update automatically without manual accounting corrections.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Seamless Inventory Restoration:</strong> Restock paths return items directly to origin branch counts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Permanent Audit Log:</strong> Settlement actor, resolution category, and notes are stamped into permanent history.</span>
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
                Protect your dispatches today.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Issue dual-layer tamper-evident dispatch labels with scratch PINs and transparent reverse custody tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={shipmentsUrl}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-xs cursor-pointer"
                >
                  Start Tracking Dispatches
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-2xs cursor-pointer"
                >
                  View Unified Quotas
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
