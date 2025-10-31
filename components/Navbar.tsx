"use client";
import React, { useState, useEffect } from "react";
import { Play, Menu, X, Bell, User, Search, ChevronDown, Trophy, Target, Calendar, Shield, Sparkles, Zap, TrendingUp, Star, Clock } from "lucide-react";
import Link from "next/link";

export default function ProfessionalNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowNotifications(false);
      setShowUserMenu(false);
    };
    if (showNotifications || showUserMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showNotifications, showUserMenu]);

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

  const notifications = [
    { id: 1, title: "برشلونة ضد ريال مدريد", subtitle: "تبدأ خلال 15 دقيقة", time: "الآن", type: "live", icon: Trophy },
    { id: 2, title: "فوز ليكرز على سيلتيكس", subtitle: "النتيجة النهائية: 112-108", time: "منذ ساعتين", type: "result", icon: Star },
    { id: 3, title: "مباراة جديدة مجدولة", subtitle: "مان يونايتد ضد ليفربول", time: "منذ 5 ساعات", type: "schedule", icon: Calendar },
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/");
                window.location.href = "/";
              }}
              className="flex items-center gap-3 group flex-shrink-0 cursor-pointer"
              aria-label="سبورت ستريم الرئيسية"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 flex items-center justify-center shadow-xl shadow-emerald-600/40 group-hover:shadow-emerald-600/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Play className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" />
                  <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl lg:text-2xl font-black text-white tracking-tight">
                    سبورت
                  </span>
                  <span className="text-xl lg:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400">
                    ستريم
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></div>
                </div>
                <div className="text-[10px] lg:text-xs text-gray-500 font-bold tracking-wider -mt-0.5 uppercase">
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
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Enhanced Search */}
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

              {/* Enhanced Notifications */}
              <div className="hidden lg:block relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotifications(!showNotifications);
                    setShowUserMenu(false);
                  }}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-gray-800/50 hover:border-emerald-600/50 text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-emerald-600/20 relative"
                  aria-label="الإشعارات"
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-r from-red-600 to-rose-600 rounded-full flex items-center justify-center text-white text-[10px] font-black ring-2 ring-slate-950 shadow-lg">
                    3
                  </span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute left-0 top-14 w-96 bg-slate-900/98 backdrop-blur-2xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-4 border-b border-gray-800/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-emerald-400" />
                        <h3 className="font-black text-white text-base">الإشعارات</h3>
                        <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-black rounded-full">3</span>
                      </div>
                      <button className="text-xs text-emerald-400 hover:text-emerald-300 font-bold">
                        تعليم الكل كمقروء
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => {
                        const NotifIcon = notif.icon;
                        return (
                          <div
                            key={notif.id}
                            className="p-4 hover:bg-slate-800/50 transition-colors border-b border-gray-800/30 last:border-0 cursor-pointer group"
                          >
                            <div className="flex gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                notif.type === 'live' ? 'bg-red-600/20 text-red-400' :
                                notif.type === 'result' ? 'bg-emerald-600/20 text-emerald-400' :
                                'bg-blue-600/20 text-blue-400'
                              }`}>
                                <NotifIcon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                                  {notif.title}
                                </p>
                                <p className="text-xs text-gray-400 mb-1">{notif.subtitle}</p>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <Clock className="w-3 h-3" />
                                  <span>{notif.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="p-3 border-t border-gray-800/50">
                      <button className="w-full py-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                        عرض جميع الإشعارات
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced User Menu */}
              <div className="hidden lg:block relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowUserMenu(!showUserMenu);
                    setShowNotifications(false);
                  }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-gray-800/50 hover:border-emerald-600/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-600/20"
                  aria-label="قائمة المستخدم"
                >
                  <div className="relative">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 bg-green-500 rounded-full ring-2 ring-slate-950"></div>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* User Dropdown */}
                {showUserMenu && (
                  <div className="absolute left-0 top-14 w-64 bg-slate-900/98 backdrop-blur-2xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-4 border-b border-gray-800/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-white">أحمد محمد</p>
                          <p className="text-xs text-gray-400">عضو مميز</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <div className="flex-1 bg-slate-800/50 rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-400">شاهدت</p>
                          <p className="text-sm font-black text-white">47</p>
                        </div>
                        <div className="flex-1 bg-slate-800/50 rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-400">المفضلة</p>
                          <p className="text-sm font-black text-white">12</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {[
                        { label: "ملفي الشخصي", icon: User },
                        { label: "قائمة المشاهدة", icon: Star },
                        { label: "الإعدادات", icon: Shield },
                        { label: "الإحصائيات", icon: TrendingUp },
                      ].map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <button
                            key={item.label}
                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                          >
                            <ItemIcon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="p-2 border-t border-gray-800/50">
                      <button className="w-full px-3 py-2.5 text-sm font-bold text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-lg transition-all">
                        تسجيل الخروج
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Subscribe Button */}
              <a
                href="/subscribe"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/subscribe");
                  window.location.href = "/subscribe";
                }}
                className="hidden lg:flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-300 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Sparkles className="w-4 h-4 relative z-10" />
                <span className="relative z-10">اشترك الآن</span>
                <div className="w-2 h-2 rounded-full bg-white/90 animate-pulse relative z-10"></div>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-gray-800/50 hover:border-emerald-600/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
          className={`absolute top-16 left-0 right-0 bottom-0 bg-slate-950/98 backdrop-blur-2xl border-t border-gray-800/50 overflow-y-auto transition-transform duration-500 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 py-6 space-y-6 max-w-7xl mx-auto">
            {/* Enhanced Search - Mobile */}
            <div className="pb-6 border-b border-gray-800/50">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                <input
                  type="text"
                  placeholder="ابحث عن مباريات، فرق، دوريات..."
                  className="w-full pr-12 pl-4 py-4 bg-slate-900/90 border-2 border-gray-800/50 focus:border-emerald-600/60 rounded-2xl text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-lg"
                />
              </div>
            </div>

            {/* Navigation Links - Mobile */}
            <div className="space-y-2">
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
                    className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-600/20 to-green-600/20 border-2 border-emerald-600/40 text-white"
                        : "bg-slate-900/60 border-2 border-gray-800/50 text-gray-300 hover:text-white hover:border-emerald-600/30"
                    }`}
                    style={{ animationDelay: `${idx * 75}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isActive ? "bg-emerald-600/30" : "bg-slate-800/50"
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-emerald-400" : "text-gray-400"}`} />
                      </div>
                      <span className="text-base font-bold">{link.label}</span>
                    </div>
                    {link.badge ? (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                        {link.badge}
                      </span>
                    ) : (
                      <ChevronDown className={`w-5 h-5 -rotate-90 transition-colors ${
                        isActive ? "text-emerald-400" : "text-gray-600"
                      }`} />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Quick Actions - Mobile */}
            <div className="pt-6 border-t border-gray-800/50 space-y-3">
              <button className="w-full flex items-center gap-4 px-4 py-4 bg-slate-900/60 border-2 border-gray-800/50 hover:border-emerald-600/30 rounded-2xl transition-all text-gray-300 hover:text-white">
                <div className="relative w-11 h-11 rounded-xl bg-slate-800/50 flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-[10px] font-black ring-2 ring-slate-950">
                    3
                  </span>
                </div>
                <span className="text-base font-bold">الإشعارات</span>
              </button>

              <button className="w-full flex items-center gap-4 px-4 py-4 bg-slate-900/60 border-2 border-gray-800/50 hover:border-emerald-600/30 rounded-2xl transition-all text-gray-300 hover:text-white">
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                  <User className="w-5 h-5 text-white" />
                  <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 bg-green-500 rounded-full ring-2 ring-slate-950"></div>
                </div>
                <div className="text-left">
                  <p className="text-base font-bold">أحمد محمد</p>
                  <p className="text-xs text-gray-500">عرض الملف الشخصي</p>
                </div>
              </button>

              <a
                href="/subscribe"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/subscribe");
                  window.location.href = "/subscribe";
                }}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-6 py-5 rounded-2xl text-base font-black transition-all duration-300 shadow-2xl shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Sparkles className="w-5 h-5 relative z-10" />
                <span className="relative z-10">اشترك الآن</span>
                <div className="w-2 h-2 rounded-full bg-white/90 animate-pulse relative z-10"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}