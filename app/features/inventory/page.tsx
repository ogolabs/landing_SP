"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  Boxes,
  ArrowRightLeft,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  History,
} from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";

export default function InventoryPage() {
  const inventoryUrl = `${APP_BASE_URL}/workspace?tab=inventory`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-xs font-bold text-teal-700 dark:text-teal-400">
                <Boxes className="w-3.5 h-3.5 shrink-0" />
                <span>Multi-Branch Inventory &amp; Stock Control</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]">
                Real-time stock control across every branch you operate.
              </h1>

              <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Connect your catalog to live counter sales. Track item cost prices, selling margins, and branch quantities in real time. Move stock between branches with audited transfer codes and export periodic valuation reports.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={inventoryUrl}
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Boxes className="w-4 h-4" />
                  <span>Open Inventory Manager</span>
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Plan SKU Limits</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Real-time counter auto-depletion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Inter-branch TRF codes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Automated stock valuation metrics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Walkthrough Grid */}
        <section className="py-16 sm:py-24 max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-16">
          
          {/* Workflow 1: Catalog Management & Valuation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                Catalog &amp; Valuation
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Live stock valuation and profit margin intelligence.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Know the exact financial health of your merchandise at any given moment. SellerPadi calculates total cost value, projected retail revenue, and anticipated gross profit margin across your entire product line.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">SKU &amp; Barcode Tracking:</strong> Organize merchandise with custom barcodes, internal product SKUs, and categories.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Low-Stock Alert Thresholds:</strong> Configure minimum threshold quantities per product to trigger timely re-order alerts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Tier SKU Allowances:</strong> Scale from 25 SKUs on Free, 150 on Starter, 500 on Growth, 1,500 on Business, to unlimited catalog items on Scale.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Total Cost Value</span>
                  <div className="text-sm sm:text-base font-bold font-mono text-slate-900 dark:text-white">
                    ₦4,250,000
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Retail Sales Value</span>
                  <div className="text-sm sm:text-base font-bold font-mono text-teal-600 dark:text-teal-400">
                    ₦6,800,000
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Projected Margin</span>
                  <div className="text-sm sm:text-base font-bold font-mono text-emerald-600">
                    +37.5%
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Smart Solar Inverter 3.5kVA</div>
                    <div className="text-[11px] text-slate-500 font-mono">SKU: INV-35KVA · Ikeja Store</div>
                  </div>
                  <div className="text-left sm:text-right font-mono shrink-0">
                    <span className="font-bold text-slate-900 dark:text-white block">14 in stock</span>
                    <span className="text-[10px] text-emerald-600">Cost: ₦180k · Sell: ₦245k</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Deep Cycle Tubular Battery 220Ah</div>
                    <div className="text-[11px] text-slate-500 font-mono">SKU: BAT-220AH · VI Store</div>
                  </div>
                  <div className="text-left sm:text-right font-mono shrink-0">
                    <span className="font-bold text-rose-600 dark:text-rose-400 block">3 in stock (Low)</span>
                    <span className="text-[10px] text-emerald-600">Cost: ₦140k · Sell: ₦185k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 2: Inter-Branch Stock Transfers & Isolation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-display">
                    Stock Transfer TRF-839210
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  Completed
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>ORIGIN BRANCH:</span>
                  <span className="text-slate-900 dark:text-white font-bold">Main Warehouse (HQ)</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>DESTINATION:</span>
                  <span className="text-slate-900 dark:text-white font-bold">Lekki Phase 1 Branch</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>DISPATCHED BY:</span>
                  <span className="text-slate-900 dark:text-white font-bold">Ibrahim B. (Lead Accountant)</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 font-sans space-y-1">
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                    <span>10x Smart Solar Inverter 3.5kVA</span>
                    <span className="font-mono text-emerald-600">Transferred</span>
                  </div>
                  <p className="text-[10px] text-slate-500 italic">
                    Reason: Routine stock replenishment ahead of weekend sales rush.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                Inter-Branch Logistics
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Move stock between stores with atomic TRF audit codes.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                When one store runs low on high-demand stock, transfer items from your central warehouse or another retail branch in seconds. Transfers are atomic: quantities decrement immediately from the origin branch and increment in the destination branch.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Branch-Isolated Privacy:</strong> Sales reps and branch managers strictly see and sell inventory in their assigned store.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Unique TRF Codes:</strong> Every transfer generates an immutable <code className="text-xs font-mono font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-1 py-0.5 rounded-sm">TRF-XXXXXX</code> reference code.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Accountant &amp; Manager Controls:</strong> Only Owners, Managers, and Accountants can initiate transfers, preventing unauthorized stock diversion.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workflow 3: Chronological Movements & Audit Logs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                Chronological Audit Trail
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Every unit accounted for. Every movement logged.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Stock shrinkage, unexplained quantity drops, and stock discrepancies cost retail businesses billions. SellerPadi maintains a complete chronological movement ledger where every stock adjustment is permanently attributed.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">7 Audited Movement Types:</strong> Automatic sales depletion, sale void restock, manual supplier restocking, audit adjustment, inbound transfer, outbound transfer, and vendor bill stock receipt.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Mandatory Reasons:</strong> Manual stock adjustments require a recorded reason (e.g. damaged in transit, supplier bonus, count audit).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Staff Attribution:</strong> Every ledger entry stamps the exact staff member who initiated the adjustment.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 font-sans">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <History className="w-4 h-4 text-indigo-600" />
                  Recent Chronological Movements
                </span>
                <span className="text-[10px] text-slate-400">Live Feed</span>
              </div>
              <div className="space-y-2 pt-1 font-sans">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="text-emerald-600 font-bold font-mono text-xs block">+25 Restocked</span>
                    <span className="text-[11px] text-slate-500">Inbound supplier delivery · Lead Accountant</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">10 mins ago</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="text-rose-600 font-bold font-mono text-xs block">-1 Counter Sale</span>
                    <span className="text-[11px] text-slate-500">Receipt RCP-261105-8942 · Sales Rep Chioma</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">28 mins ago</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="text-blue-600 font-bold font-mono text-xs block">+1 Void Restored</span>
                    <span className="text-[11px] text-slate-500">Corrected mistaken counter entry · Branch Manager</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">1 hr ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 4: Periodic Inventory PDF Reports */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-2">
                <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-bold text-xs uppercase tracking-wider">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>PERIODIC VALUATION REPORT · MONTHLY AUDIT</span>
                </div>
                <p className="text-xs text-teal-900 dark:text-teal-200">
                  Export complete branch snapshots with opening stock, closing balances, sales depletion, and profit valuation.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-slate-400 block text-[10px]">Frequency</span>
                  <span className="font-bold text-slate-900 dark:text-white">Daily</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-slate-400 block text-[10px]">Frequency</span>
                  <span className="font-bold text-slate-900 dark:text-white">Weekly</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-slate-400 block text-[10px]">Frequency</span>
                  <span className="font-bold text-slate-900 dark:text-white">Monthly</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-slate-400 block text-[10px]">Frequency</span>
                  <span className="font-bold text-slate-900 dark:text-white">Yearly</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                Auditor-Ready PDF Reports
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                One-click export for accountants and tax auditors.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Never spend hours manually preparing end-of-month stock spreadsheets. Generate crisp, professional PDF valuation reports covering your opening stock, total inbound replenishments, outbound transfers, counter depletions, and closing inventory valuations.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Custom Audit Intervals:</strong> Generate reports for specific business days, operational weeks, calendar months, or financial years.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Branch Filtering:</strong> Run consolidated company-wide reports or isolate individual store branches.</span>
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
                Eliminate inventory shrinkage today.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Manage your store stock with real-time counter depletion, inter-branch transfers, and chronological movement auditing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={inventoryUrl}
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-xs cursor-pointer"
                >
                  Manage Your Inventory
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-2xs cursor-pointer"
                >
                  Explore Plan Quotas
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
