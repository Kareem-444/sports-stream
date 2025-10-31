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
      homeTeam: 'ريال مدريد',
      awayTeam: 'برشلونة',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
      time: '18:00', 
      sport: 'كرة القدم',
      league: 'الدوري الإسباني - الكلاسيكو',
      venue: 'ملعب سانتياغو برنابيو',
      date: '2025-10-29',
      isLive: true,
      viewerCount: '2.4 مليون',
      isFeatured: true,
      streamLink: '/LiveStream'
    },
    { 
      id: 2, 
      homeTeam: 'مانشستر يونايتد',
      awayTeam: 'ليدز يونايتد',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg',
      time: '20:00', 
      sport: 'كرة القدم',
      league: 'الدوري الإنجليزي الممتاز',
      venue: 'ملعب أولد ترافورد',
      date: '2025-10-29',
      isLive: true,
      viewerCount: '1.8 مليون',
      streamLink: '/LiveStreamFloored'
    },
    { 
      id: 3, 
      homeTeam: 'كونور ماكغريغور',
      awayTeam: 'داستن بوارييه',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/UFC_Logo.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/UFC_Logo.svg',
      time: '22:00', 
      sport: 'الفنون القتالية المختلطة',
      league: 'يو إف سي 300 - النزال الرئيسي',
      venue: 'تي موبايل أرينا',
      date: '2025-10-30',
      viewerCount: '890 ألف',
      isFeatured: true,
      streamLink: '/LiveStreamCloored'
    },
    { 
      id: 4, 
      homeTeam: 'لوس أنجلوس ليكرز',
      awayTeam: 'شيكاغو بولز',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg',
      time: '19:30', 
      sport: 'كرة السلة',
      league: 'بطولة الدوري الأمريكي',
      venue: 'كريبتو.كوم أرينا',
      date: '2025-10-30',
      isLive: true,
      viewerCount: '1.2 مليون',
      streamLink: '/live'
    },
    { 
      id: 5, 
      homeTeam: 'ليفربول',
      awayTeam: 'آرسنال',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
      time: '16:30', 
      sport: 'كرة القدم',
      league: 'الدوري الإنجليزي الممتاز',
      venue: 'ملعب أنفيلد',
      date: '2025-10-31',
      viewerCount: '1.5 مليون',
      streamLink: '/live'
    },
    { 
      id: 6, 
      homeTeam: 'غولدن ستايت ووريورز',
      awayTeam: 'بوسطن سيلتكس',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
      time: '21:00', 
      sport: 'كرة السلة',
      league: 'الدوري الأمريكي للمحترفين',
      venue: 'تشيس سنتر',
      date: '2025-10-31',
      viewerCount: '950 ألف',
      streamLink: '/live'
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
        "url": window.location.origin
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900" dir="rtl">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Enhanced Header Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-b border-gray-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/30 via-transparent to-green-950/30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          {/* Header Top */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center shadow-xl shadow-emerald-600/40 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <Calendar className="relative w-8 h-8 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-1.5 mb-3">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-bold tracking-wider">جدول البث المباشر</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
                  جدول المباريات
                </h1>
                <p className="text-gray-400 text-base md:text-lg flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  لا تفوت أي لحظة من الإثارة
                </p>
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              <div className="group relative bg-gradient-to-br from-slate-900/80 to-gray-900/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-4 min-w-[150px] hover:border-red-500/30 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <div className="relative">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">مباشر الآن</div>
                    <div className="text-2xl font-bold text-white">{liveMatches.length}</div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-900/80 to-gray-900/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-4 min-w-[150px] hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">قادمة</div>
                    <div className="text-2xl font-bold text-white">{upcomingCount}</div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-900/80 to-gray-900/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-4 min-w-[150px] hover:border-purple-500/30 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">المشاهدون</div>
                    <div className="text-2xl font-bold text-white">{formatViewers(totalViewers)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Search and Filter Section */}
          <div className="space-y-4">
            {/* Search Bar with Clear Button */}
            <div className="flex gap-3">
              <div className="relative flex-1 max-w-2xl">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                  <Search className="w-5 h-5 text-emerald-400" />
                  <div className="h-5 w-px bg-gray-700"></div>
                </div>
                <input
                  type="text"
                  placeholder="ابحث عن الفرق، الدوريات، أو المباريات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/80 backdrop-blur-xl border border-gray-800/60 text-white pr-16 pl-12 py-4 rounded-2xl focus:outline-none focus:border-emerald-600/60 focus:ring-2 focus:ring-emerald-600/30 transition-all placeholder:text-gray-500 shadow-lg text-right"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-800 rounded-xl transition-colors"
                    aria-label="مسح البحث"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>

              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-1 bg-slate-900/80 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-1.5 shadow-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  شبكة
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  قائمة
                </button>
              </div>
            </div>

            {/* Filter Chips with Active Count */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <div className="flex items-center gap-2 text-gray-400 mr-1 flex-shrink-0 bg-slate-900/50 rounded-xl px-4 py-2 border border-gray-800/50">
                <Filter className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold">تصفية:</span>
              </div>
              {sports.map(sport => (
                <button
                  key={sport}
                  onClick={() => setFilter(sport)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    filter === sport
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-xl shadow-emerald-600/40 scale-105'
                      : 'bg-slate-900/80 text-gray-400 hover:bg-slate-800/80 hover:text-gray-200 border border-gray-800/50 hover:border-gray-700/60 hover:scale-105'
                  }`}
                >
                  {sport === 'الكل' && <Shield className="w-4 h-4" />}
                  {sport === 'كرة القدم' && <Trophy className="w-4 h-4" />}
                  {sport === 'كرة السلة' && <Award className="w-4 h-4" />}
                  {sport === 'الفنون القتالية المختلطة' && <Zap className="w-4 h-4" />}
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {Object.keys(groupedSchedule).length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-slate-900/80 to-gray-900/60 border border-gray-800/50 mb-6 shadow-xl">
              <Calendar className="w-16 h-16 text-gray-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-300 mb-3">لم يتم العثور على مباريات</h3>
            <p className="text-gray-500 mb-8 text-lg">جرب تعديل الفلاتر أو البحث</p>
            <button
              onClick={() => {
                setFilter('الكل');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-8 py-4 rounded-2xl transition-all font-bold shadow-xl shadow-emerald-600/30 hover:scale-105"
            >
              <X className="w-5 h-5" />
              إعادة تعيين الفلاتر
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedSchedule).map(([date, matches]) => (
              <div key={date}>
                {/* Enhanced Date Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gradient-to-l from-emerald-950/50 to-green-950/50 border border-emerald-700/40 rounded-2xl px-6 py-3 shadow-xl shadow-emerald-950/30">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-emerald-300 font-bold text-base uppercase tracking-wider">
                      {formatDate(date)}
                    </span>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-l from-gray-800/60 via-gray-800/40 to-transparent rounded-full"></div>
                  <div className="bg-slate-900/60 border border-gray-800/50 rounded-xl px-4 py-2">
                    <span className="text-sm text-gray-400 font-bold">
                      {matches.length} {matches.length === 1 ? 'مباراة' : 'مباريات'}
                    </span>
                  </div>
                </div>

                {/* Matches Grid/List */}
                <div className={viewMode === 'grid' ? 'grid gap-6 md:grid-cols-2' : 'space-y-6'}>
                  {matches.map(match => (
                    <div
                      key={match.id}
                      className={`group relative bg-gradient-to-bl from-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800/60 hover:border-emerald-700/60 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/40 hover:-translate-y-2 ${
                        match.isFeatured ? 'ring-2 ring-emerald-600/30' : ''
                      }`}
                    >
                      {/* Background Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/0 to-green-600/0 group-hover:from-emerald-600/10 group-hover:to-green-600/10 transition-all duration-500"></div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-bl from-emerald-600/10 to-green-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                      {match.isFeatured && (
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-bl from-amber-600/10 to-orange-600/10 rounded-full blur-2xl"></div>
                      )}

                      <div className="relative p-7">
                        {/* Top Bar with Badge and Actions */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-l from-emerald-950/70 to-green-950/70 border border-emerald-700/40 rounded-xl px-4 py-2 shadow-lg">
                              <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">
                                {match.sport}
                              </span>
                            </div>
                            {match.isLive && (
                              <div className="flex items-center gap-2 bg-gradient-to-l from-red-600 to-red-500 rounded-xl px-4 py-2 shadow-lg shadow-red-500/30">
                                <div className="relative">
                                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                  <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
                                </div>
                                <Zap className="w-3.5 h-3.5 text-white" />
                                <span className="text-white text-xs font-bold uppercase tracking-wider">مباشر</span>
                              </div>
                            )}
                            {match.isFeatured && !match.isLive && (
                              <div className="flex items-center gap-1.5 bg-gradient-to-l from-amber-950/70 to-orange-950/70 border border-amber-700/40 rounded-xl px-3 py-2 shadow-lg">
                                <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
                                <span className="text-amber-300 text-xs font-bold">مميزة</span>
                              </div>
                            )}
                          </div>
                          
                          <button
                            onClick={() => toggleNotification(match.id)}
                            className={`p-2.5 rounded-xl border-2 transition-all hover:scale-110 ${
                              notificationEnabled.includes(match.id)
                                ? 'bg-gradient-to-bl from-emerald-950/70 to-green-950/70 border-emerald-600/60 text-emerald-400 shadow-lg shadow-emerald-600/20'
                                : 'bg-slate-900/60 border-gray-800/60 text-gray-400 hover:bg-emerald-950/30 hover:border-emerald-700/40 hover:text-emerald-400'
                            }`}
                            aria-label={notificationEnabled.includes(match.id) ? 'التنبيه مفعل' : 'تفعيل التنبيه'}
                          >
                            <Bell className={`w-4 h-4 ${notificationEnabled.includes(match.id) ? 'fill-current' : ''}`} />
                          </button>
                        </div>

                        {/* League */}
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-4 h-4 text-amber-400" />
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                            {match.league}
                          </div>
                        </div>

                        {/* Teams with Logos */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between gap-6">
                            <div className="flex items-center gap-3 flex-1">
                              <div className="w-14 h-14 bg-white rounded-xl p-2.5 shadow-xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                                <img src={match.homeTeamLogo} alt={match.homeTeam} className="w-full h-full object-contain" />
                              </div>
                              <span className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors">{match.homeTeam}</span>
                            </div>
                            
                            <div className="flex flex-col items-center gap-1">
                              <div className="text-2xl font-black text-emerald-400">ضد</div>
                              <div className="h-1 w-8 bg-gradient-to-l from-emerald-500 to-green-500 rounded-full"></div>
                            </div>
                            
                            <div className="flex items-center gap-3 flex-1 justify-end">
                              <span className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors text-left">{match.awayTeam}</span>
                              <div className="w-14 h-14 bg-white rounded-xl p-2.5 shadow-xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                                <img src={match.awayTeamLogo} alt={match.awayTeam} className="w-full h-full object-contain" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Match Details */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2 bg-slate-900/50 border border-gray-800/50 rounded-xl px-4 py-3">
                            <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <div>
                              <div className="text-xs text-gray-500 font-semibold">الوقت</div>
                              <div className="text-sm text-white font-bold">{match.time}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-900/50 border border-gray-800/50 rounded-xl px-4 py-3">
                            <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <div className="overflow-hidden">
                              <div className="text-xs text-gray-500 font-semibold">الملعب</div>
                              <div className="text-sm text-white font-bold truncate">{match.venue}</div>
                            </div>
                          </div>
                        </div>

                        {/* Viewer Count */}
                        {match.viewerCount && (
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2 bg-gradient-to-l from-purple-950/50 to-indigo-950/50 border border-purple-700/30 rounded-xl px-4 py-2">
                              <Users className="w-4 h-4 text-purple-400" />
                              <span className="text-sm text-purple-300 font-bold">{match.viewerCount} يشاهدون</span>
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
                          className="group/btn relative w-full bg-gradient-to-l from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105"
                        >
                          <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/20 to-white/0 translate-x-full group-hover/btn:-translate-x-full transition-transform duration-1000"></div>
                          <ChevronLeft className="w-5 h-5 relative z-10 group-hover/btn:-translate-x-1 transition-transform" />
                          <span className="relative z-10">
                            {match.isLive ? 'شاهد المباراة الآن' : 'تعيين تذكير'}
                          </span>
                          <Tv className="w-5 h-5 relative z-10" />
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
    </div>
  );
}