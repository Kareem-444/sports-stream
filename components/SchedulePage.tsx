"use client";
import React from 'react';
import { Calendar, Clock, MapPin, Bell, Filter, Search, ChevronLeft, Tv, Star, Users, TrendingUp, X, Sparkles, Trophy, Zap, Shield, Award } from 'lucide-react';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  time: string;
  sport: string;
  league: string;
  venue: string;
  date: string;
  isLive?: boolean;
  viewerCount?: string;
  isFeatured?: boolean;
  streamLink?: string;
}

export default function SchedulePage() {
  const schedule: Match[] = [
    { 
      id: 1, 
      homeTeam: 'ليستر سيتي',
      awayTeam: 'ميدلزبره',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg',
      time: '9:45 PM', 
      sport: 'كرة القدم',
      league: 'الدوري الإنجليزي',
      venue: 'ملعب كينغ باور',
      date: '2025-11-04',
      isLive: false,
      viewerCount: '850 ألف',
      isFeatured: false,
      streamLink: '/live'
    },
    { 
      id: 2, 
      homeTeam: 'أتلتيكو مدريد',
      awayTeam: 'يونيون سان جيلواز',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Royale_Union_Saint-Gilloise_logo.svg',
      time: '10:00 PM', 
      sport: 'كرة القدم',
      league: 'دوري أبطال أوروبا',
      venue: 'ملعب واندا ميتروبوليتانو',
      date: '2025-11-04',
      isLive: false,
      viewerCount: '1.2 مليون',
      isFeatured: true,
      streamLink: '/live'
    },
    { 
      id: 3, 
      homeTeam: 'بودو/غليمت',
      awayTeam: 'موناكو',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/4c/FK_Bod%C3%B8-Glimt_logo.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_FC_Monaco.svg',
      time: '10:00 PM', 
      sport: 'كرة القدم',
      league: 'دوري أبطال أوروبا',
      venue: 'ملعب أسبمورا',
      date: '2025-11-04',
      isLive: false,
      viewerCount: '650 ألف',
      streamLink: '/live'
    },
    { 
      id: 4, 
      homeTeam: 'يوفنتوس',
      awayTeam: 'سبورتينغ لشبونة',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Juventus_FC_logo_2017.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Sporting_Clube_de_Portugal_%28Logo%29.svg',
      time: '10:00 PM', 
      sport: 'كرة القدم',
      league: 'دوري أبطال أوروبا',
      venue: 'ملعب أليانز',
      date: '2025-11-04',
      isLive: false,
      viewerCount: '1.8 مليون',
      isFeatured: true,
      streamLink: '/live'
    },
    { 
      id: 5, 
      homeTeam: 'ليفربول',
      awayTeam: 'ريال مدريد',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      time: '10:00 PM', 
      sport: 'كرة القدم',
      league: 'دوري أبطال أوروبا',
      venue: 'ملعب أنفيلد',
      date: '2025-11-04',
      isLive: true,
      viewerCount: '3.2 مليون',
      isFeatured: true,
      streamLink: '/LiveStream'
    },
    { 
      id: 6, 
      homeTeam: 'باريس سان جيرمان',
      awayTeam: 'بايرن ميونخ',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
      time: '10:00 PM', 
      sport: 'كرة القدم',
      league: 'دوري أبطال أوروبا',
      venue: 'حديقة الأمراء',
      date: '2025-11-04',
      isLive: false,
      viewerCount: '2.5 مليون',
      isFeatured: true,
      streamLink: '/LiveStreamBayern'
    },
    { 
      id: 7, 
      homeTeam: 'توتنهام',
      awayTeam: 'كوبنهاغن',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Copenhagen_logo.svg/1200px-FC_Copenhagen_logo.svg.png',
      time: '10:00 PM', 
      sport: 'كرة القدم',
      league: 'دوري أبطال أوروبا',
      venue: 'ملعب توتنهام',
      date: '2025-11-04',
      isLive: false,
      viewerCount: '1.1 مليون',
      streamLink: '/LiveStreamTottenham'
    },
  ];

  const sports = ['الكل', ...Array.from(new Set(schedule.map(m => m.sport)))];
  const [filter, setFilter] = React.useState('الكل');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [notificationEnabled, setNotificationEnabled] = React.useState<number[]>([]);
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  const filteredSchedule = schedule.filter(m => {
    const matchesFilter = filter === 'الكل' || m.sport === filter;
    const matchesSearch = m.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.awayTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.league.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);

    if (date.toDateString() === today.toDateString()) return 'اليوم';
    if (date.toDateString() === tomorrow.toDateString()) return 'غداً';
    if (date.toDateString() === dayAfter.toDateString()) return 'بعد غد';
    
    return date.toLocaleDateString('ar-EG', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const groupedSchedule = filteredSchedule.reduce((acc, match) => {
    const dateKey = match.date;
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  const toggleNotification = (id: number) => {
    setNotificationEnabled(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const liveMatches = schedule.filter(m => m.isLive);
  const upcomingCount = filteredSchedule.length;
  const totalViewers = schedule.reduce((acc, m) => {
    if (!m.viewerCount) return acc;
    const count = parseFloat(m.viewerCount.replace(/[مليونألف\s]/g, ''));
    const multiplier = m.viewerCount.includes('مليون') ? 1000000 : 1000;
    return acc + (count * multiplier);
  }, 0);

  const formatViewers = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)} مليون`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)} ألف`;
    return count.toString();
  };

  React.useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    const metaTags = [
      { property: 'og:title', content: 'جدول المباريات المباشرة - شاهد أقوى المباريات والبطولات' },
      { property: 'og:description', content: 'تابع جدول مباريات كرة القدم، كرة السلة والفنون القتالية المختلطة. بث مباشر لجميع المباريات العالمية والعربية بجودة عالية' },
      { property: 'og:type', content: 'website' },
      { name: 'description', content: 'جدول المباريات المباشرة - شاهد مباريات الدوري الإنجليزي، الدوري الإسباني، دوري أبطال أوروبا، الدوري الأمريكي وجميع البطولات العالمية بث مباشر بجودة HD' },
      { name: 'keywords', content: 'بث مباشر، مباريات اليوم، جدول المباريات، كرة القدم، الدوري الإنجليزي، الدوري الإسباني، دوري أبطال أوروبا، يلا شوت، كورة لايف، مباريات مباشرة' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'جدول المباريات المباشرة' },
      { name: 'twitter:description', content: 'شاهد جميع المباريات بث مباشر بجودة عالية' }
    ];

    metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name ?? '');
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    const title = document.querySelector('title');
    if (title) {
      title.textContent = 'جدول المباريات - بث مباشر لجميع المباريات العالمية والعربية';
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      "name": "جدول المباريات المباشرة",
      "description": "مشاهدة جميع المباريات بث مباشر",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "organizer": {
        "@type": "Organization",
        "name": "منصة البث المباشر للمباريات",
        "url": typeof window !== 'undefined' ? window.location.origin : ''
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    return () => {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" dir="rtl">
      {/* Animated Background with Football Field Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        {/* Football Field Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.05) 25%, rgba(16, 185, 129, 0.05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.05) 75%, rgba(16, 185, 129, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.05) 25%, rgba(16, 185, 129, 0.05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.05) 75%, rgba(16, 185, 129, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Animated Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Football Icons */}
        <div className="absolute top-20 right-10 opacity-10 animate-bounce" style={{animationDuration: '3s'}}>
          <Trophy className="w-16 h-16 text-emerald-400" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
          <Award className="w-20 h-20 text-teal-400" />
        </div>
      </div>

      {/* Enhanced Header Section */}
      <div className="relative bg-slate-900/95 border-b-2 border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-teal-900/20"></div>
        
        {/* Animated Stadium Lights Effect */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Top */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-600/50 flex-shrink-0 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                <Calendar className="relative w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-600/20 backdrop-blur-sm border-2 border-emerald-500/40 rounded-full px-3 sm:px-4 py-1.5 mb-2 sm:mb-3">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-300 animate-pulse" />
                  <span className="text-emerald-300 text-xs sm:text-sm font-bold tracking-wider">جدول البث المباشر</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-1 sm:mb-2">
                  جدول المباريات
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  لا تفوت أي لحظة من الإثارة
                </p>
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="flex gap-3 sm:gap-4 flex-wrap lg:flex-nowrap">
              <div className="group relative bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-4 min-w-[140px] sm:min-w-[150px] hover:border-red-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/20 group-hover:to-red-500/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <div className="relative">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-300 font-semibold uppercase tracking-wider mb-0.5">مباشر الآن</div>
                    <div className="text-2xl font-bold text-white">{liveMatches.length}</div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-4 min-w-[140px] sm:min-w-[150px] hover:border-emerald-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-300 font-semibold uppercase tracking-wider mb-0.5">قادمة</div>
                    <div className="text-2xl font-bold text-white">{upcomingCount}</div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-4 min-w-[140px] sm:min-w-[150px] hover:border-purple-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-300 font-semibold uppercase tracking-wider mb-0.5">المشاهدون</div>
                    <div className="text-xl sm:text-2xl font-bold text-white">{formatViewers(totalViewers)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Search and Filter Section */}
          <div className="space-y-4">
            {/* Search Bar with Clear Button */}
            <div className="flex gap-3 flex-col sm:flex-row">
              <div className="relative flex-1 max-w-full sm:max-w-2xl">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                  <Search className="w-5 h-5 text-emerald-400" />
                  <div className="h-5 w-px bg-slate-600"></div>
                </div>
                <input
                  type="text"
                  placeholder="ابحث عن الفرق، الدوريات، أو المباريات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 text-white pr-16 pl-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-gray-400 shadow-lg text-right text-sm sm:text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-700 rounded-xl transition-colors"
                    aria-label="مسح البحث"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>

              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-1 bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-1.5 shadow-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-bold transition-all ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/70'
                  }`}
                >
                  شبكة
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-bold transition-all ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/70'
                  }`}
                >
                  قائمة
                </button>
              </div>
            </div>

            {/* Filter Chips with Active Count */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center gap-2 text-gray-300 mr-1 flex-shrink-0 bg-slate-800/70 rounded-xl px-3 sm:px-4 py-2 border-2 border-slate-700">
                <Filter className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-bold">تصفية:</span>
              </div>
              {sports.map(sport => (
                <button
                  key={sport}
                  onClick={() => setFilter(sport)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    filter === sport
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-600/40 scale-105 border-2 border-emerald-500'
                      : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 hover:text-white border-2 border-slate-700 hover:border-slate-600 hover:scale-105'
                  }`}
                >
                  {sport === 'الكل' && <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {sport === 'كرة القدم' && <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {sport === 'كرة السلة' && <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {sport === 'الفنون القتالية المختلطة' && <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  <span>{sport}</span>
                  {filter === sport && sport !== 'الكل' && (
                    <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs font-bold mr-1">
                      {filteredSchedule.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {Object.keys(groupedSchedule).length === 0 ? (
          <div className="text-center py-16 sm:py-20">
            <div className="inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-slate-800/80 border-2 border-slate-700 mb-6 shadow-xl">
              <Calendar className="w-14 h-14 sm:w-16 sm:h-16 text-gray-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">لم يتم العثور على مباريات</h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">جرب تعديل الفلاتر أو البحث</p>
            <button
              onClick={() => {
                setFilter('الكل');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all font-bold shadow-xl shadow-emerald-600/30 hover:scale-105"
            >
              <X className="w-5 h-5" />
              إعادة تعيين الفلاتر
            </button>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-12">
            {Object.entries(groupedSchedule).map(([date, matches]) => (
              <div key={date}>
                {/* Enhanced Date Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3 bg-emerald-900/30 border-2 border-emerald-600/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-xl shadow-emerald-900/30">
                    <div className="p-1.5 sm:p-2 bg-emerald-500/20 rounded-lg">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
                    </div>
                    <span className="text-emerald-200 font-bold text-sm sm:text-base uppercase tracking-wider">
                      {formatDate(date)}
                    </span>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-l from-slate-700 via-slate-700/40 to-transparent rounded-full"></div>
                  <div className="bg-slate-800/70 border-2 border-slate-700 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2">
                    <span className="text-xs sm:text-sm text-gray-300 font-bold">
                      {matches.length} {matches.length === 1 ? 'مباراة' : 'مباريات'}
                    </span>
                  </div>
                </div>

                {/* Matches Grid/List */}
                <div className={viewMode === 'grid' ? 'grid gap-4 sm:gap-6 md:grid-cols-2' : 'space-y-4 sm:space-y-6'}>
                  {matches.map(match => (
                    <div
                      key={match.id}
                      className={`group relative bg-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/40 hover:-translate-y-1 ${
                        match.isFeatured ? 'ring-2 ring-emerald-500/40' : ''
                      }`}
                    >
                      {/* Background Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-teal-600/0 group-hover:from-emerald-600/10 group-hover:to-teal-600/10 transition-all duration-500"></div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -bottom-8 -left-8 w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                      {match.isFeatured && (
                        <div className="absolute top-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
                      )}

                      <div className="relative p-5 sm:p-6 lg:p-7">
                        {/* Top Bar with Badge and Actions */}
                        <div className="flex items-center justify-between mb-4 sm:mb-5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-900/40 border-2 border-emerald-600/50 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                              <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-300" />
                              <span className="text-emerald-200 text-xs font-bold uppercase tracking-wider">
                                {match.sport}
                              </span>
                            </div>
                            {match.isLive && (
                              <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-600 to-red-500 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg shadow-red-500/40">
                                <div className="relative">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                                  <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping"></div>
                                </div>
                                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                                <span className="text-white text-xs font-bold uppercase tracking-wider">مباشر</span>
                              </div>
                            )}
                            {match.isFeatured && !match.isLive && (
                              <div className="flex items-center gap-1.5 bg-amber-900/40 border-2 border-amber-600/50 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-lg">
                                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" fill="currentColor" />
                                <span className="text-amber-300 text-xs font-bold">مميزة</span>
                              </div>
                            )}
                          </div>
                          
                          <button
                            onClick={() => toggleNotification(match.id)}
                            className={`p-2 sm:p-2.5 rounded-xl border-2 transition-all hover:scale-110 ${
                              notificationEnabled.includes(match.id)
                                ? 'bg-emerald-900/40 border-emerald-600/60 text-emerald-300 shadow-lg shadow-emerald-600/20'
                                : 'bg-slate-900/60 border-slate-700 text-gray-400 hover:bg-emerald-900/30 hover:border-emerald-600/40 hover:text-emerald-400'
                            }`}
                            aria-label={notificationEnabled.includes(match.id) ? 'التنبيه مفعل' : 'تفعيل التنبيه'}
                          >
                            <Bell className={`w-4 h-4 ${notificationEnabled.includes(match.id) ? 'fill-current' : ''}`} />
                          </button>
                        </div>

                        {/* League */}
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                            {match.league}
                          </div>
                        </div>

                        {/* Teams with Logos */}
                        <div className="mb-5 sm:mb-6">
                          <div className="flex items-center justify-between gap-3 sm:gap-6">
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-2 sm:p-2.5 shadow-xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 border-2 border-slate-200">
                                <img src={match.homeTeamLogo} alt={match.homeTeam} className="w-full h-full object-contain" />
                              </div>
                              <span className="text-white font-bold text-sm sm:text-base group-hover:text-emerald-300 transition-colors truncate">{match.homeTeam}</span>
                            </div>
                            
                            <div className="flex flex-col items-center gap-1 flex-shrink-0">
                              <div className="text-xl sm:text-2xl font-black text-emerald-400">ضد</div>
                              <div className="h-1 w-6 sm:w-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                            </div>
                            
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end min-w-0">
                              <span className="text-white font-bold text-sm sm:text-base group-hover:text-emerald-300 transition-colors text-left truncate">{match.awayTeam}</span>
                              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-2 sm:p-2.5 shadow-xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 border-2 border-slate-200">
                                <img src={match.awayTeamLogo} alt={match.awayTeam} className="w-full h-full object-contain" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Match Details */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                          <div className="flex items-center gap-2 bg-slate-900/60 border-2 border-slate-700 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                            <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <div>
                              <div className="text-xs text-gray-400 font-semibold">الوقت</div>
                              <div className="text-sm font-bold text-white">{match.time}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-900/60 border-2 border-slate-700 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                            <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <div className="overflow-hidden">
                              <div className="text-xs text-gray-400 font-semibold">الملعب</div>
                              <div className="text-sm font-bold text-white truncate">{match.venue}</div>
                            </div>
                          </div>
                        </div>

                        {/* Viewer Count */}
                        {match.viewerCount && (
                          <div className="flex items-center justify-between mb-5 sm:mb-6">
                            <div className="flex items-center gap-2 bg-purple-900/30 border-2 border-purple-600/40 rounded-xl px-3 sm:px-4 py-2">
                              <Users className="w-4 h-4 text-purple-300" />
                              <span className="text-sm text-purple-200 font-bold">{match.viewerCount} يشاهدون</span>
                            </div>
                            {match.isLive && (
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <TrendingUp className="w-3 h-3 text-emerald-400" />
                                <span className="font-semibold">شائع</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Action Button */}
                        <a
                          href={match.streamLink}
                          className="group/btn relative w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 sm:py-4 px-5 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 hover:scale-105"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-full group-hover/btn:-translate-x-full transition-transform duration-1000"></div>
                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover/btn:-translate-x-1 transition-transform" />
                          <span className="relative z-10 text-sm sm:text-base">
                            {match.isLive ? 'شاهد المباراة الآن' : 'تعيين تذكير'}
                          </span>
                          <Tv className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Professional Footer Banner */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 mt-8 sm:mt-12">
        <div className="relative bg-slate-800/90 rounded-2xl sm:rounded-3xl border-2 border-slate-700 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/5 to-emerald-600/10"></div>
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-amber-900/30 border-2 border-amber-500/50 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" />
              <span className="text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider">لا تفوت أي مباراة</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              فعّل التنبيهات للمباريات المفضلة
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              احصل على إشعارات فورية قبل بداية المباريات المهمة. لن تفوتك أي لحظة إثارة مع نظام التنبيهات الذكي
            </p>
            <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/50 hover:scale-105 text-sm sm:text-base md:text-lg">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>تفعيل التنبيهات</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}