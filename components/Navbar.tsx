"use client";
import React, { useState, useEffect } from "react";
import { Play, Menu, X, Search, Sparkles, Calendar, Target, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProfessionalNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Get current path and set active link on mount
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
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Enhanced Logo - Mobile Optimized */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/");
                window.location.href = "/";
              }}
              className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group flex-shrink-0 cursor-pointer"
              aria-label="سبورت ستريم الرئيسية"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 blur-md sm:blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 flex items-center justify-center shadow-xl shadow-emerald-600/40 group-hover:shadow-emerald-600/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Play className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="block">
                <div className="flex items-baseline gap-0.5 sm:gap-1">
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white tracking-tight leading-none">
                    سبورت
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400 leading-none">
                    ستريم
                  </span>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse mr-0.5 sm:mr-1 mt-1"></div>
                </div>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-500 font-bold tracking-wider -mt-0.5 uppercase leading-none">
                  شبكة البث الرياضي
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
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
                    className={`relative px-4 xl:px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 group flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "text-white bg-gradient-to-br from-emerald-600/20 to-green-600/20 border border-emerald-600/30"
                        : "text-gray-400 hover:text-white hover:bg-slate-900/60"
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? "text-emerald-400" : ""}`} />
                    <span className="relative z-10">{link.label}</span>
                    {link.badge && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wide">
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

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3">
              {/* Enhanced Search - Desktop */}
              <div className="hidden lg:block relative">
                {showSearch ? (
                  <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                      <input
                        type="text"
                        placeholder="ابحث عن مباريات، فرق، دوريات..."
                        autoFocus
                        className="w-72 pr-10 pl-4 py-2.5 bg-slate-900/90 border-2 border-emerald-600/40 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 shadow-lg shadow-emerald-600/10"
                        onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                      />
                    </div>
                    <button
                      onClick={() => setShowSearch(false)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                      aria-label="إغلاق البحث"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowSearch(true)}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-gray-800/50 hover:border-emerald-600/50 text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-emerald-600/20"
                    aria-label="فتح البحث"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Enhanced Subscribe Button - Responsive */}
              <a
                href="/subscribe"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/subscribe");
                  window.location.href = "/subscribe";
                }}
                className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black transition-all duration-300 shadow-lg sm:shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 relative overflow-hidden group cursor-pointer whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 flex-shrink-0" />
                <span className="relative z-10 hidden xs:inline">اشترك الآن</span>
                <span className="relative z-10 xs:hidden">اشترك</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/90 animate-pulse relative z-10 flex-shrink-0"></div>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-gray-800/50 hover:border-emerald-600/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Progress indicator for live matches */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900">
          <div className="h-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 animate-pulse" style={{ width: '65%' }}></div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
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
          className={`absolute top-14 sm:top-16 left-0 right-0 bottom-0 bg-slate-950/98 backdrop-blur-2xl border-t-2 border-gray-700/50 overflow-y-auto transition-transform duration-500 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-5 sm:space-y-6 max-w-7xl mx-auto">
            {/* Enhanced Search - Mobile */}
            <div className="pb-5 sm:pb-6 border-b-2 border-gray-700/50">
              <div className="relative">
                <Search className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                <input
                  type="text"
                  placeholder="ابحث عن مباريات، فرق، دوريات..."
                  className="w-full pr-10 sm:pr-12 pl-3 sm:pl-4 py-3 sm:py-4 bg-slate-900/90 border-2 border-gray-700/50 focus:border-emerald-600/60 rounded-xl sm:rounded-2xl text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-lg"
                />
              </div>
            </div>

            {/* Navigation Links - Mobile */}
            <div className="space-y-2 sm:space-y-3">
              {navLinks.map((link, idx) => {
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
                    className={`flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-600/20 to-green-600/20 border-2 border-emerald-600/40 text-white shadow-lg shadow-emerald-600/20"
                        : "bg-slate-900/60 border-2 border-gray-700/50 text-gray-300 hover:text-white hover:border-emerald-600/30"
                    }`}
                    style={{ animationDelay: `${idx * 75}ms` }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center ${
                        isActive ? "bg-emerald-600/30" : "bg-slate-800/50"
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-emerald-400" : "text-gray-400"}`} />
                      </div>
                      <span className="text-sm sm:text-base font-bold">{link.label}</span>
                    </div>
                    {link.badge ? (
                      <span className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-red-600 text-white text-[10px] sm:text-xs font-black">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white animate-pulse"></div>
                        {link.badge}
                      </span>
                    ) : (
                      <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                        isActive ? "text-emerald-400" : "text-gray-600"
                      }`} />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Section - Mobile */}
            <div className="pt-5 sm:pt-6 border-t-2 border-gray-700/50">
              <div className="bg-gradient-to-br from-slate-900/80 to-gray-900/80 backdrop-blur-sm border-2 border-emerald-600/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 mb-3 sm:mb-4 shadow-lg">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">استمتع بتجربة مميزة</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5">احصل على وصول غير محدود لجميع المباريات</p>
                <a
                  href="/subscribe"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/subscribe");
                    window.location.href = "/subscribe";
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-black transition-all duration-300 shadow-xl shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  <span className="relative z-10">اشترك الآن</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/90 animate-pulse relative z-10"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}