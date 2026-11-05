"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Receipt,
  Boxes,
  Truck,
  Building2,
  ShieldCheck,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

import { APP_BASE_URL } from "@/lib/config";

export const FEATURE_LINKS = [
  {
    name: "Smart QR Receipts",
    href: "/features/sales-receipts",
    badge: "Sales Book",
    description: "Counter checkout, instant QR slips, debtor tracking & audit-safe voiding.",
    icon: Receipt,
    colorClass: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60",
  },
  {
    name: "Multi-Branch Inventory",
    href: "/features/inventory",
    badge: "Stock Control",
    description: "Stock valuation, auto-depletion, inter-branch transfers & chronological movement logs.",
    icon: Boxes,
    colorClass: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60",
  },
  {
    name: "Tracked Shipments",
    href: "/features/shipments",
    badge: "Logistics",
    description: "Dual-layer scratch PIN labels, branded stickers & reverse custody dispute resolution.",
    icon: Truck,
    colorClass: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60",
  },
  {
    name: "Vendors & AP Suite",
    href: "/features/vendors",
    badge: "Accounts Payable",
    description: "Supplier bills, 30/60/90+ day aging, auto-stock receiving & price comparison.",
    icon: Building2,
    colorClass: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60",
  },
  {
    name: "Staff Roles & Security",
    href: "/features/team-security",
    badge: "Governance",
    description: "Owner, Manager, Rep & Accountant roles, 6-digit PIN logins & single-device lock.",
    icon: ShieldCheck,
    colorClass: "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const workspaceUrl = `${APP_BASE_URL}/workspace`;

  const isFeaturesActive = pathname.startsWith("/features");

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 left-0 right-0 z-50 shadow-2xs w-full transition-colors">
        <nav className="mx-auto max-w-[1920px] 2xl:max-w-[2400px] w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex h-20 lg:h-22 xl:h-24 items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="flex items-center space-x-2.5 group">
                <Image
                  src="/logo-icon.svg"
                  alt="SellerPadi Logo"
                  width={40}
                  height={40}
                  style={{ width: "auto" }}
                  className="h-8 w-auto shrink-0 sm:hidden"
                  priority
                />
                <Image
                  src="/logo-full.svg"
                  alt="SellerPadi Logo"
                  width={152}
                  height={25}
                  style={{ width: "auto" }}
                  className="h-7 sm:h-8 lg:h-9 w-auto shrink-0 hidden sm:block object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
              <Link
                href="/"
                className={`px-3.5 py-2 xl:px-4.5 xl:py-2.5 rounded-xl text-xs xl:text-sm 2xl:text-base font-semibold transition-all ${
                  pathname === "/"
                    ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                Home
              </Link>

              {/* Features Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setFeaturesDropdownOpen((prev) => !prev)}
                  className={`px-3.5 py-2 xl:px-4.5 xl:py-2.5 rounded-xl text-xs xl:text-sm 2xl:text-base font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                    isFeaturesActive || featuresDropdownOpen
                      ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                  aria-expanded={featuresDropdownOpen}
                >
                  <span>Features</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      featuresDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {featuresDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-84 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-2.5 space-y-1 z-50 animate-fadeIn">
                    <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800/80 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Capabilities &amp; Architecture
                      </span>
                    </div>
                    {FEATURE_LINKS.map((f) => {
                      const Icon = f.icon;
                      const active = pathname === f.href;
                      return (
                        <Link
                          key={f.href}
                          href={f.href}
                          onClick={() => setFeaturesDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                            active
                              ? "bg-slate-100 dark:bg-slate-800/90 text-blue-600 dark:text-blue-400"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-900 dark:text-white"
                          }`}
                        >
                          <div className={`p-2 rounded-xl shrink-0 ${f.colorClass}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold font-display">{f.name}</span>
                              <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                {f.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 font-normal">
                              {f.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className={`px-3.5 py-2 xl:px-4.5 xl:py-2.5 rounded-xl text-xs xl:text-sm 2xl:text-base font-semibold transition-all ${
                  pathname === "/pricing"
                    ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                Pricing
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 xl:px-4.5 xl:py-2.5 rounded-xl text-xs xl:text-sm 2xl:text-base font-semibold transition-all ${
                  pathname === "/about"
                    ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                About
              </Link>
            </div>

            {/* Action Buttons & Theme Switcher */}
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-4">
              <ThemeToggle />

              <a
                href={workspaceUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 xl:px-5 xl:py-2.5 rounded-xl text-xs xl:text-sm 2xl:text-base font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-xs"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  pathname === "/"
                    ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                Home
              </Link>

              {/* Mobile Features Collapsible Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileFeaturesOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all cursor-pointer"
                >
                  <span>Features &amp; Modules</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileFeaturesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileFeaturesOpen && (
                  <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-slate-200 dark:border-slate-800 ml-4 mt-1">
                    {FEATURE_LINKS.map((f) => {
                      const Icon = f.icon;
                      const active = pathname === f.href;
                      return (
                        <Link
                          key={f.href}
                          href={f.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            active
                              ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                          <span>{f.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  pathname === "/pricing"
                    ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                Pricing &amp; Calculator
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  pathname === "/about"
                    ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                About SellerPadi
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <a
                href={workspaceUrl}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
