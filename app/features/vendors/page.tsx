"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  Building2,
  Receipt,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
} from "lucide-react";
import { APP_BASE_URL } from "@/lib/config";
import {
  detectUserCurrency,
  convertNgnPrice,
  UserCurrencyInfo,
  PLAN_TIERS,
} from "@/lib/currency";

export default function VendorsPage() {
  const [userCurrency, setUserCurrency] = useState<UserCurrencyInfo | null>(null);

  useEffect(() => {
    detectUserCurrency().then(setUserCurrency);
  }, []);

  const businessPrice = convertNgnPrice(
    PLAN_TIERS.business_2500.ngnMonthly,
    userCurrency
  ).formattedLocal;

  const scalePrice = convertNgnPrice(
    PLAN_TIERS.scale_5000.ngnMonthly,
    userCurrency
  ).formattedLocal;

  const vendorsUrl = `${APP_BASE_URL}/workspace?tab=vendors`;
  const pricingUrl = `/pricing`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col justify-between transition-colors">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-[11px] sm:text-xs font-bold text-indigo-700 dark:text-indigo-400">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>Accounts Payable Suite · Business &amp; Scale</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]">
                Master supplier debt, purchase bills, and inventory restocking.
              </h1>

              <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Take control of what you owe your suppliers. Record purchase bills with 1-click automatic stock receiving, monitor debt maturity with 30/60/90+ day aging buckets, and compare prices across vendors to protect your profit margins.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={vendorsUrl}
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Open Vendors &amp; AP Suite</span>
                </a>
                <Link
                  href={pricingUrl}
                  className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-7 py-4 text-sm sm:text-base transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Business &amp; Scale Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>30/60/90+ day AP aging buckets</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Auto-stock branch replenishment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Multi-supplier price spread matrix</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Walkthrough Grid */}
        <section className="py-16 sm:py-24 max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-16">
          
          {/* Workflow 1: Vendor Directory & 1-Click Bank Remittance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                Centralized Directory
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                All your suppliers and remittance details in one place.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Never search through chat apps or scrapbooks for vendor account numbers when making bank transfers. Store supplier business contacts, warehouse addresses, standard payment terms, and bank details with 1-click clipboard copy.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Bank Remittance Copy:</strong> Bank name, account number, and account title ready for fast mobile banking transfers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Live Debt Summary:</strong> Total Purchases, Total Paid, and Current Balance Owed calculated dynamically.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Standard Credit Terms:</strong> Tag vendors with payment terms (e.g. Net 15, Net 30, Net 60) for automatic due date tracking.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 min-w-0">
                  <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-display truncate">
                    Apex Electronics &amp; Solar Importers Ltd
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 whitespace-nowrap shrink-0 self-start sm:self-auto">
                  Owing ₦1,250,000
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Bank Name:</span>
                  <span className="font-bold text-slate-900 dark:text-white">Zenith Bank Plc</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Account Number:</span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">1012345678</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Account Name:</span>
                  <span className="text-slate-900 dark:text-white font-medium">Apex Solar Solutions Ltd</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1 font-mono">
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[10px] text-slate-400 block font-sans">Total Purchased</span>
                  <span className="font-bold text-slate-900 dark:text-white">₦5,400,000</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[10px] text-slate-400 block font-sans">Total Paid</span>
                  <span className="font-bold text-emerald-600">₦4,150,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 2: Purchase Bills & Inflow Auto-Restocking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 min-w-0">
                  <Receipt className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-display truncate">
                    Purchase Bill BILL-891042
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 whitespace-nowrap shrink-0">
                  Partially Paid
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>VENDOR:</span>
                  <span className="text-slate-900 dark:text-white font-bold">Apex Electronics</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>BILL TOTAL:</span>
                  <span className="text-slate-900 dark:text-white font-bold">₦1,750,000</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>DEPOSIT PAID:</span>
                  <span className="text-emerald-600 font-bold">₦500,000 (Transfer)</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">BALANCE REMAINING:</span>
                  <span className="text-rose-600 dark:text-rose-400 font-bold text-sm">₦1,250,000</span>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 font-sans space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                    <PackageCheck className="w-4 h-4" />
                    <span>Auto-Stock Replenishment: Active</span>
                  </div>
                  <p className="text-[10px] text-emerald-700 dark:text-emerald-300/90">
                    Received 10 units directly into Main Warehouse inventory as audited movement &ldquo;bill_receipt&rdquo;.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                1-Click Stock Receiving
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Record purchase bills and restock inventory in one go.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Recording supplier purchases should never require duplicate data entry. When you enter a purchase bill, check <strong className="text-slate-900 dark:text-white">&ldquo;Automatically receive items into branch inventory&rdquo;</strong> to increment your stock counts atomically.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Unique BILL-XXXXXX Identifiers:</strong> Formal accounting invoice reference for clean supplier audits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">VAT, Tax &amp; Freight Breakdown:</strong> Enter item lines alongside shipping and tax fees for accurate landed cost calculations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Initial Deposit Tracking:</strong> Pay part today and record the remainder as accounts payable credit.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workflow 3: Financial AP Aging Buckets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800">
                Cash Flow Intelligence
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                30, 60, and 90+ day overdue debt maturity reports.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Surprise supplier debts destroy business relationships and disrupt deliveries. SellerPadi sorts your outstanding payables into standard financial aging buckets so you know exactly which bills require settlement first.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">5 Standard Maturity Buckets:</strong> Current (Not Due), 1–30 Days Overdue, 31–60 Days Overdue, 61–90 Days Overdue, and 90+ Days Critical.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Overdue Health Badges:</strong> Visual status flags identify critical debts before suppliers halt shipments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Per-Vendor Breakdown:</strong> Click any vendor to view their chronological bill history and partial payments.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  AP Aging Summary Matrix
                </span>
                <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 dark:bg-rose-950 px-2 py-0.5 rounded-full">
                  Total Owed: ₦3,450,000
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-[10px] font-sans text-slate-400 block">Current (Not Due)</span>
                  <span className="font-bold text-slate-900 dark:text-white">₦1,200,000</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-[10px] font-sans text-blue-600 dark:text-blue-400 font-medium block">1–30 Days Overdue</span>
                  <span className="font-bold text-slate-900 dark:text-white">₦850,000</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-[10px] font-sans text-rose-500 block">31–60 Days Overdue</span>
                  <span className="font-bold text-slate-900 dark:text-white">₦650,000</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-[10px] font-sans text-rose-600 block">61–90 Days Overdue</span>
                  <span className="font-bold text-slate-900 dark:text-white">₦450,000</span>
                </div>
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-sans text-rose-700 dark:text-rose-400 font-bold block">90+ Days Critical</span>
                  <span className="font-bold text-rose-700 dark:text-rose-300">₦300,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 4: SKU Price Comparison Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-900 dark:text-white font-display">
                  SKU Price Comparison: Solar Battery 220Ah
                </span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 self-start sm:self-auto">
                  Save ₦15,000 / unit
                </span>
              </div>
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white font-sans block">Apex Electronics</span>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-300">Lowest Price Recorded</span>
                  </div>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">₦135,000</span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white font-sans block">Global Energy Wholesalers</span>
                    <span className="text-[10px] text-slate-500 font-sans">Latest Purchased Unit Cost</span>
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">₦142,000</span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white font-sans block">Kano Renewable Hub</span>
                    <span className="text-[10px] text-rose-500 font-sans">Highest Cost Recorded</span>
                  </div>
                  <span className="font-bold text-rose-600 dark:text-rose-400 text-sm">₦150,000</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                Purchasing Optimization
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Compare prices across suppliers to protect your margins.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Different suppliers charge widely different prices for the exact same merchandise. SellerPadi aggregates your historical purchase bills into an interactive price comparison matrix, highlighting lowest unit costs and unit savings spreads.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Price Spread Spread Analysis:</strong> Instantly discover the difference between your cheapest and most expensive supplier.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Cost Trend Tracking:</strong> Monitor whether supplier unit costs are rising or falling over time.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tier Unlock Callout */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1920px] 2xl:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
            <div className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                Included in Business &amp; Scale Tiers
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
                Unlock the full Accounts Payable Suite.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Available on Business 2,500 ({businessPrice}/mo) and Scale 5,000 ({scalePrice}/mo) with dedicated Accountant role seats and unified operations quotas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href={pricingUrl}
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-xs cursor-pointer"
                >
                  View Business &amp; Scale Plans
                </Link>
                <a
                  href={vendorsUrl}
                  className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-2xl px-8 py-4 text-sm sm:text-base transition-all shadow-2xs cursor-pointer"
                >
                  Explore Vendors Workspace
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
