"use client";
import React, { useState, useEffect } from "react";
import { Play, Menu, X, Search, Sparkles, Calendar, Target, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProfessionalNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type NavLink = {
    href: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    badge?: string;
  };

  const navLinks: NavLink[] = [
    { href: "/", label: "الرئيسية", icon: Sparkles },
    { href: "/schedule", label: "الجدول", icon: Calendar },
    { href: "/Upcomingmatches", label: "المباريات القادمة", icon: Target },
    { href: "/about", label: "عن المنصة", icon: Shield },
  ];

  const handleNavigation = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/98 backdrop-blur-2xl shadow-2xl shadow-black/20 border-b border-emerald-900/30"
            : "bg-slate-950/95 backdrop-blur-xl border-b border-emerald-900/20"
        }`}
        dir="rtl"
      >
        {/* Animated gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600 to-transparent opacity-50"></div>
        
        {/* Container aligned with page width */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Compact Logo */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/");
                window.location.href = "/";
              }}
              className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0 cursor-pointer"
              aria-label="سبورت ستريم الرئيسية"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 flex items-center justify-center shadow-xl shadow-emerald-600/40 group-hover:shadow-emerald-600/60 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" />
                </div>
              </div>
              <div className="block">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-sm sm:text-base md:text-lg font-black text-white tracking-tight leading-none">
                    سبورت
                  </span>
                  <span className="text-sm sm:text-base md:text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400 leading-none">
                    ستريم
                  </span>
                  <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse mr-0.5 mt-0.5"></div>
                </div>
                <div className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500 font-bold tracking-wider -mt-0.5 uppercase leading-none hidden sm:block">
                  شبكة البث الرياضي
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - More Compact */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeLink === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.href);
                      window.location.href = link.href;
                    }}
                    className={`relative px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 group flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "text-white bg-gradient-to-br from-emerald-600/20 to-green-600/20 border border-emerald-600/30"
                        : "text-gray-400 hover:text-white hover:bg-slate-900/60"
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? "text-emerald-400" : ""}`} />
                    <span className="relative z-10">{link.label}</span>
                    {link.badge && (
                      <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black uppercase tracking-wide">
                        <div className="w-1 h-1 rounded-full bg-white animate-pulse"></div>
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Side Actions - Compact */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Search - Desktop Only */}
              <div className="hidden lg:block relative">
                {showSearch ? (
                  <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                      <input
                        type="text"
                        placeholder="بحث..."
                        autoFocus
                        className="w-48 pr-9 pl-3 py-2 bg-slate-900/90 border border-emerald-600/40 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/60 shadow-lg"
                        onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                      />
                    </div>
                    <button
                      onClick={() => setShowSearch(false)}
                      className="p-1.5 text-gray-400 hover:text-white transition-colors"
                      aria-label="إغلاق البحث"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowSearch(true)}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-gray-800/50 hover:border-emerald-600/50 text-gray-400 hover:text-emerald-400 transition-all duration-300"
                    aria-label="فتح البحث"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Compact Subscribe Button */}
              <a
                href="/subscribe"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/subscribe");
                  window.location.href = "/subscribe";
                }}
                className="flex items-center justify-center gap-1 sm:gap-1.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-black transition-all duration-300 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 relative overflow-hidden group cursor-pointer whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative z-10 flex-shrink-0" />
                <span className="relative z-10 hidden sm:inline">اشترك الآن</span>
                <span className="relative z-10 sm:hidden">اشترك</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-gray-800/50 hover:border-emerald-600/50 text-gray-300 hover:text-white transition-all duration-300"
                aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900">
          <div className="h-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 animate-pulse" style={{ width: '65%' }}></div>
        </div>
      </nav>

      {/* Mobile Menu - Optimized */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-14 sm:top-16 left-0 right-0 bottom-0 bg-slate-950/98 backdrop-blur-2xl border-t border-gray-700/50 overflow-y-auto transition-transform duration-500 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-3 sm:px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="pb-4 border-b border-gray-700/50">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                <input
                  type="text"
                  placeholder="ابحث عن مباريات..."
                  className="w-full pr-10 pl-3 py-2.5 bg-slate-900/90 border border-gray-700/50 focus:border-emerald-600/60 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            {/* Navigation Links - Compact */}
            <div className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeLink === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.href);
                      window.location.href = link.href;
                    }}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-600/40 text-white"
                        : "bg-slate-900/60 border border-gray-700/50 text-gray-300 hover:text-white hover:border-emerald-600/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive ? "bg-emerald-600/30" : "bg-slate-800/50"
                      }`}>
                        <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-gray-400"}`} />
                      </div>
                      <span className="text-sm font-bold">{link.label}</span>
                    </div>
                    {link.badge ? (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-600 text-white text-[10px] font-black">
                        <div className="w-1 h-1 rounded-full bg-white animate-pulse"></div>
                        {link.badge}
                      </span>
                    ) : (
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-gray-600"}`} />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Section - Compact */}
            <div className="pt-4 border-t border-gray-700/50">
              <div className="bg-gradient-to-br from-slate-900/80 to-gray-900/80 border border-emerald-600/30 rounded-lg p-4 text-center">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 mb-3 shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">استمتع بتجربة مميزة</h3>
                <p className="text-xs text-gray-400 mb-4">وصول غير محدود لجميع المباريات</p>
                <a
                  href="/subscribe"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/subscribe");
                    window.location.href = "/subscribe";
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-4 py-3 rounded-lg text-sm font-black transition-all duration-300 shadow-lg shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Sparkles className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">اشترك الآن</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}