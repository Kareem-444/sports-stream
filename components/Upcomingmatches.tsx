"use client";
import React from 'react';
import { Trophy, Clock, Users, Target, MapPin, Star, Bell, Eye, ArrowUpRight, Calendar, TrendingUp, Flame, Sparkles, Shield, Play, ChevronRight } from 'lucide-react';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeLogoUrl: string;
  awayLogoUrl: string;
  date: string;
  time: string;
  league: string;
  stadium: string;
  isLive?: boolean;
  viewers?: string;
  isFeatured?: boolean;
  matchweek?: string;
}

interface Category {
  sport: string;
  icon: React.ElementType;
  matches: Match[];
  color: string;
  gradient: string;
  description: string;
}

export default function MatchSchedules() {
  const categories: Category[] = [
    {
      sport: 'كرة القدم',
      icon: Target,
      color: 'emerald',
      gradient: 'from-emerald-600 to-teal-600',
      description: 'أقوى دوريات أوروبا والديربيات الكلاسيكية',
      matches: [
        { 
          id: 1, 
          homeTeam: 'ليستر سيتي', 
          awayTeam: 'ميدلزبره',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '11:45 مساءً', // Removed "بتوقيت القاهرة"
          league: 'كأس الاتحاد الإنجليزي',
          stadium: 'كينغ باور ستاديوم، ليستر',
          matchweek: 'دور الـ16',
          viewers: '45.2 ألف'
        },
        { 
          id: 2, 
          homeTeam: 'أتلتيكو مدريد', 
          awayTeam: 'يونيون سان جيلواز',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_Union_Saint-Gilloise.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '12:00 صباحاً', // Removed "بتوقيت القاهرة"
          league: 'دوري أبطال أوروبا',
          stadium: 'واندا ميتروبوليتانو، مدريد',
          matchweek: 'الجولة 4',
          viewers: '98.5 ألف',
          isFeatured: true
        },
        { 
          id: 3, 
          homeTeam: 'بودو/غليمت', 
          awayTeam: 'موناكو',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6b/FK_Bod%C3%B8-Glimt_logo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Logo_AS_Monaco_FC_%282013%29.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '00:00', // Removed "بتوقيت القاهرة"
          league: 'دوري أبطال أوروبا',
          stadium: 'أسبميرا ستاديون، بودو',
          matchweek: 'الجولة 4',
          viewers: '52.1 ألف'
        },
        { 
          id: 4, 
          homeTeam: 'يوفنتوس', 
          awayTeam: 'سبورتينغ لشبونة',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Juventus_FC_2017_logo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Sporting_Clube_de_Portugal_%28Logo%29.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '00:00', // Removed "بتوقيت القاهرة"
          league: 'دوري أبطال أوروبا',
          stadium: 'أليانز ستاديوم، تورينو',
          matchweek: 'الجولة 4',
          viewers: '112.7 ألف',
          isFeatured: true
        },
        { 
          id: 5, 
          homeTeam: 'ليفربول', 
          awayTeam: 'ريال مدريد',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '10:00', // Removed "بتوقيت القاهرة"
          league: 'دوري أبطال أوروبا',
          stadium: 'أنفيلد، ليفربول',
          matchweek: 'الجولة 4',
          viewers: '187.3 ألف',
          isFeatured: true,
          isLive: true
        },
        { 
          id: 6, 
          homeTeam: 'باريس سان جيرمان', 
          awayTeam: 'بايرن ميونخ',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '10:00', // Removed "بتوقيت القاهرة"
          league: 'دوري أبطال أوروبا',
          stadium: 'حديقة الأمراء، باريس',
          matchweek: 'الجولة 4',
          viewers: '165.8 ألف',
          isFeatured: true,
          isLive: true
        },
        { 
          id: 7, 
          homeTeam: 'توتنهام', 
          awayTeam: 'كوبنهاغن',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/46/FC_K%C3%B8benhavn_logo.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '10:00', // Removed "بتوقيت القاهرة"
          league: 'دوري أبطال أوروبا',
          stadium: 'توتنهام هوتسبر ستاديوم، لندن',
          matchweek: 'الجولة 4',
          viewers: '78.9 ألف'
        },
      ],
      
    },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [notificationEnabled, setNotificationEnabled] = React.useState<number[]>([]);

  const filteredCategories = selectedCategory 
    ? categories.filter(cat => cat.sport === selectedCategory)
    : categories;

  const totalMatches = categories.reduce((acc, cat) => acc + cat.matches.length, 0);
  const liveMatches = categories.reduce((acc, cat) => 
    acc + cat.matches.filter(m => m.isLive).length, 0
  );
  const totalViewers = categories.reduce((acc, cat) => 
    acc + cat.matches.reduce((sum, m) => sum + parseFloat(m.viewers?.replace(' ألف', '').replace('K', '') || '0'), 0), 0
  );
  
  const toggleNotification = (id: number) => {
    setNotificationEnabled((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" dir="rtl">
      {/* Professional Animated Background with Football Field */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        {/* Football Field Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.08) 25%, rgba(16, 185, 129, 0.08) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.08) 75%, rgba(16, 185, 129, 0.08) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.08) 25%, rgba(16, 185, 129, 0.08) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.08) 75%, rgba(16, 185, 129, 0.08) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Animated Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Sports Icons */}
        <div className="absolute top-20 right-20 opacity-10 animate-bounce" style={{animationDuration: '3s'}}>
          <Trophy className="w-20 h-20 text-emerald-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
          <Target className="w-24 h-24 text-teal-400" />
        </div>
      </div>

      {/* Enhanced Header Section */}
      <div className="relative bg-slate-900/95 border-b-2 border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-teal-900/20"></div>
        
        {/* Stadium Lights Effect */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20">
          {/* Title Section */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-4 sm:mb-6 shadow-2xl shadow-emerald-600/50 animate-pulse">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-3 sm:mb-4">
              جدول المباريات
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              جداول مباشرة لأهم مباريات اليوم في جميع الرياضات • يتم التحديث لحظياً
            </p>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <div className="group relative bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-4 sm:p-6 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-emerald-600/0 group-hover:from-emerald-600/20 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <span className="text-xs text-gray-300 font-bold uppercase tracking-widest">الرياضات</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{categories.length}</div>
                <div className="text-xs text-gray-400 font-medium">تصنيفات نشطة</div>
              </div>
            </div>
            
            <div className="group relative bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-4 sm:p-6 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-300 font-bold uppercase tracking-widest">مباشر الآن</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{liveMatches}</div>
                <div className="text-xs text-gray-400 font-medium">مباريات حية</div>
              </div>
            </div>
            
            <div className="group relative bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-4 sm:p-6 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/20 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-300 font-bold uppercase tracking-widest">المباريات</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{totalMatches}</div>
                <div className="text-xs text-gray-400 font-medium">مجموع اليوم</div>
              </div>
            </div>
            
            <div className="group relative bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <span className="text-xs text-gray-300 font-bold uppercase tracking-widest">المشاهدون</span>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">{totalViewers.toFixed(0)} ألف</div>
                <div className="text-xs text-gray-400 font-medium">يشاهدون الآن</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Category Filter */}
      <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-2xl border-b-2 border-slate-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                !selectedCategory
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-600/40 scale-105 border-2 border-emerald-500'
                  : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700 hover:text-white border-2 border-slate-700 hover:border-slate-600 hover:scale-105'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>جميع الرياضات</span>
              <span className={`mr-1 px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-black ${
                !selectedCategory ? 'bg-white/25' : 'bg-emerald-600/20 text-emerald-400'
              }`}>
                {categories.length}
              </span>
            </button>
            {categories.map(cat => {
              const Icon = cat.icon;
              const matchCount = cat.matches.length;
              return (
                <button
                  key={cat.sport}
                  onClick={() => setSelectedCategory(cat.sport)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    selectedCategory === cat.sport
                      ? `bg-gradient-to-r ${cat.gradient} text-white shadow-xl scale-105 border-2 border-${cat.color}-500`
                      : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700 hover:text-white border-2 border-slate-700 hover:border-slate-600 hover:scale-105'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{cat.sport}</span>
                  <span className={`mr-1 px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-black ${
                    selectedCategory === cat.sport ? 'bg-white/25' : 'bg-slate-700'
                  }`}>
                    {matchCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Matches Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="space-y-12 sm:space-y-16">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.sport}>
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 sm:gap-5">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-2xl animate-pulse`}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">{category.sport}</h2>
                      <p className="text-gray-300 text-xs sm:text-sm font-medium">{category.description} • {category.matches.length} مباريات اليوم</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-all group self-start md:self-auto hover:gap-3 text-sm sm:text-base">
                    <span>عرض جميع المباريات</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" />
                  </button>
                </div>

                {/* Matches Grid */}
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.matches.map(match => (
                    <div
                      key={match.id}
                      className={`group/card relative bg-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                        match.isFeatured 
                          ? 'border-emerald-600 ring-2 ring-emerald-500/40 shadow-xl shadow-emerald-600/20' 
                          : 'border-slate-700 hover:border-emerald-600'
                      }`}
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 via-teal-600/0 to-emerald-600/0 group-hover/card:from-emerald-600/10 group-hover/card:via-teal-600/5 group-hover/card:to-emerald-600/10 transition-all duration-500"></div>
                      
                      {/* Status Badges */}
                      <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 z-10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          {match.isLive && (
                            <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-600 to-red-500 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg shadow-red-600/50">
                              <div className="relative">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping absolute"></div>
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-white text-xs font-black uppercase tracking-wider">مباشر</span>
                            </div>
                          )}
                          {match.isFeatured && !match.isLive && (
                            <div className="flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-lg">
                              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" />
                              <span className="text-white text-xs font-black uppercase">مميزة</span>
                            </div>
                          )}
                        </div>
                        
                        <button
                          onClick={() => toggleNotification(match.id)}
                          className={`p-2 sm:p-2.5 rounded-xl border-2 transition-all hover:scale-110 ${
                            notificationEnabled.includes(match.id)
                              ? 'bg-emerald-900/40 border-emerald-600/60 text-emerald-300 shadow-lg shadow-emerald-600/30'
                              : 'bg-slate-900/60 border-slate-700 text-gray-400 hover:bg-emerald-900/30 hover:border-emerald-600/40 hover:text-emerald-400'
                          }`}
                        >
                          <Bell className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${notificationEnabled.includes(match.id) ? 'fill-current animate-pulse' : ''}`} />
                        </button>
                      </div>

                      <div className="relative p-5 sm:p-6 lg:p-7 pt-16 sm:pt-20">
                        {/* League & Matchweek */}
                        <div className="flex items-center justify-between mb-5 sm:mb-6 gap-2">
                          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-900/30 border-2 border-emerald-600/50 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
                            <span className="text-emerald-200 text-xs font-black uppercase tracking-wider">{match.league}</span>
                          </div>
                          {match.matchweek && (
                            <span className="text-xs text-gray-400 font-bold bg-slate-900/50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-700">{match.matchweek}</span>
                          )}
                        </div>

                        {/* Teams Display - Professional Style */}
                        <div className="mb-6 sm:mb-7">
                          <div className="flex items-center justify-between gap-3 sm:gap-6">
                            {/* Home Team */}
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-2xl flex-shrink-0 transform group-hover/card:scale-110 transition-transform duration-300 border-2 border-slate-200">
                                <img 
                                  src={match.homeLogoUrl} 
                                  alt={match.homeTeam}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-white font-bold text-sm sm:text-base md:text-lg group-hover/card:text-emerald-300 transition-colors truncate">{match.homeTeam}</span>
                            </div>
                            
                            {/* VS Divider */}
                            <div className="flex flex-col items-center gap-1 flex-shrink-0">
                              <div className="text-xl sm:text-2xl font-black text-emerald-400">ضد</div>
                              <div className="h-1 w-6 sm:w-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                            </div>
                            
                            {/* Away Team */}
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end min-w-0">
                              <span className="text-white font-bold text-sm sm:text-base md:text-lg group-hover/card:text-emerald-300 transition-colors text-left truncate">{match.awayTeam}</span>
                              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-2xl flex-shrink-0 transform group-hover/card:scale-110 transition-transform duration-300 border-2 border-slate-200">
                                <img 
                                  src={match.awayLogoUrl} 
                                  alt={match.awayTeam}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Match Info Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-5 sm:mb-6">
                          <div className="bg-slate-900/70 backdrop-blur-sm border-2 border-slate-700 rounded-xl p-3 hover:border-emerald-600/50 transition-all group/info">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center group-hover/info:scale-110 transition-transform">
                                <Clock className="w-4 h-4 text-emerald-400" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-400 font-medium mb-1">التوقيت</div>
                            <div className="text-sm font-bold text-white">{match.time}</div>
                          </div>
                          
                          <div className="bg-slate-900/70 backdrop-blur-sm border-2 border-slate-700 rounded-xl p-3 hover:border-emerald-600/50 transition-all group/info">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover/info:scale-110 transition-transform">
                                <Eye className="w-4 h-4 text-purple-400" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-400 font-medium mb-1">المشاهدون</div>
                            <div className="text-sm font-bold text-white">{match.viewers}</div>
                          </div>
                          
                          <div className="col-span-2 bg-slate-900/70 backdrop-blur-sm border-2 border-slate-700 rounded-xl p-3 hover:border-emerald-600/50 transition-all group/info">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover/info:scale-110 transition-transform">
                                <MapPin className="w-4 h-4 text-blue-400" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-400 font-medium mb-1">الملعب</div>
                            <div className="text-sm font-bold text-white truncate">{match.stadium}</div>
                          </div>
                          
                          <div className="col-span-2 bg-slate-900/70 backdrop-blur-sm border-2 border-slate-700 rounded-xl p-3 hover:border-emerald-600/50 transition-all group/info">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover/info:scale-110 transition-transform">
                                <Calendar className="w-4 h-4 text-orange-400" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-400 font-medium mb-1">التاريخ</div>
                            <div className="text-sm font-bold text-white">{match.date}</div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <a
                          href="/live"
                          className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black py-3 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-600/40 group/btn active:scale-95"
                        >
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:-translate-x-1 transition-transform" />
                          <span className="text-sm sm:text-base">شاهد البث المباشر</span>
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:scale-110 transition-transform" fill="currentColor" />
                        </a>
                      </div>

                      {/* Decorative Glow Effects */}
                      <div className="absolute -bottom-10 -left-10 w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl group-hover/card:scale-150 transition-transform duration-700"></div>
                      {match.isFeatured && (
                        <>
                          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-amber-600/15 to-orange-600/15 rounded-full blur-2xl"></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-amber-600/5"></div>
                        </>
                      )}
                      {match.isLive && (
                        <div className="absolute top-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-red-600/20 to-rose-600/20 rounded-full blur-2xl animate-pulse"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border-2 border-slate-700 overflow-hidden shadow-2xl">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/5 to-emerald-600/10"></div>
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-teal-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="relative px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-emerald-600/30 rounded-3xl mb-6 sm:mb-8 animate-pulse shadow-2xl shadow-emerald-600/30">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 px-4">
              لا تفوت أي مباراة
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              احصل على إشعارات فورية لفرقك المفضلة وشاهد البث المباشر لأكبر الأحداث الرياضية حول العالم
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <button className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black shadow-2xl hover:shadow-emerald-600/50 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-sm sm:text-base md:text-lg">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span>تصفح جميع المباريات</span>
              </button>
              <button className="group inline-flex items-center gap-2 sm:gap-3 bg-slate-800/90 hover:bg-slate-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black border-2 border-slate-700 hover:border-emerald-600 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-sm sm:text-base md:text-lg">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span>ضبط التذكيرات</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 sm:bottom-8 left-6 sm:left-8 z-50">
        <button className="group w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-2xl shadow-2xl shadow-emerald-600/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce hover:animate-none">
          <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
}