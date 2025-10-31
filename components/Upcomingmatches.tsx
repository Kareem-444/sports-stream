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
      gradient: 'from-emerald-600 to-green-600',
      description: 'أقوى دوريات أوروبا والديربيات الكلاسيكية',
      matches: [
        { 
          id: 1, 
          homeTeam: 'برشلونة', 
          awayTeam: 'ريال مدريد',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
          date: 'السبت، 2 نوفمبر',
          time: '20:00 بتوقيت غرينتش',
          league: 'الدوري الإسباني',
          stadium: 'كامب نو، برشلونة',
          matchweek: 'الجولة 12',
          isLive: true, 
          viewers: '145.2 ألف', 
          isFeatured: true 
        },
        { 
          id: 2, 
          homeTeam: 'مانشستر يونايتد', 
          awayTeam: 'ليفربول',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
          date: 'الأحد، 3 نوفمبر',
          time: '16:30 بتوقيت غرينتش',
          league: 'الدوري الإنجليزي',
          stadium: 'أولد ترافورد، مانشستر',
          matchweek: 'الجولة 10',
          viewers: '98.5 ألف',
          isFeatured: true
        },
        { 
          id: 3, 
          homeTeam: 'بايرن ميونخ', 
          awayTeam: 'بوروسيا دورتموند',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
          date: 'السبت، 2 نوفمبر',
          time: '18:30 بتوقيت وسط أوروبا',
          league: 'الدوري الألماني',
          stadium: 'أليانز أرينا، ميونخ',
          matchweek: 'الجولة 9',
          viewers: '72.1 ألف'
        },
        { 
          id: 4, 
          homeTeam: 'باريس سان جيرمان', 
          awayTeam: 'أولمبيك مرسيليا',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg',
          date: 'الأحد، 3 نوفمبر',
          time: '20:45 بتوقيت وسط أوروبا',
          league: 'الدوري الفرنسي',
          stadium: 'حديقة الأمراء، باريس',
          matchweek: 'الجولة 11',
          viewers: '54.7 ألف'
        },
        { 
          id: 5, 
          homeTeam: 'إيه سي ميلان', 
          awayTeam: 'إنتر ميلان',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg',
          date: 'الاثنين، 4 نوفمبر',
          time: '21:00 بتوقيت وسط أوروبا',
          league: 'الدوري الإيطالي',
          stadium: 'سان سيرو، ميلان',
          matchweek: 'الجولة 11',
          viewers: '81.3 ألف',
          isFeatured: true
        },
        { 
          id: 6, 
          homeTeam: 'أرسنال', 
          awayTeam: 'تشيلسي',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
          date: 'السبت، 2 نوفمبر',
          time: '12:30 بتوقيت غرينتش',
          league: 'الدوري الإنجليزي',
          stadium: 'ملعب الإمارات، لندن',
          matchweek: 'الجولة 10',
          viewers: '67.8 ألف'
        },
      ],
    },
    {
      sport: 'كرة السلة',
      icon: Trophy,
      color: 'orange',
      gradient: 'from-orange-600 to-amber-600',
      description: 'أقوى مواجهات دوري NBA',
      matches: [
        { 
          id: 7, 
          homeTeam: 'لوس أنجلوس ليكرز', 
          awayTeam: 'بوسطن سيلتيكس',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
          date: 'السبت، 2 نوفمبر',
          time: '22:30 بالتوقيت الشرقي',
          league: 'NBA',
          stadium: 'كريبتو.كوم أرينا، لوس أنجلوس',
          viewers: '127.3 ألف',
          isFeatured: true,
          isLive: true
        },
        { 
          id: 8, 
          homeTeam: 'غولدن ستايت ووريرز', 
          awayTeam: 'ميامي هيت',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg',
          date: 'الأحد، 3 نوفمبر',
          time: '19:00 بالتوقيت الباسيفيكي',
          league: 'NBA',
          stadium: 'تشيس سنتر، سان فرانسيسكو',
          viewers: '89.9 ألف'
        },
        { 
          id: 9, 
          homeTeam: 'بروكلين نتس', 
          awayTeam: 'ميلووكي باكس',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg',
          date: 'السبت، 2 نوفمبر',
          time: '20:00 بالتوقيت الشرقي',
          league: 'NBA',
          stadium: 'باركليز سنتر، بروكلين',
          viewers: '76.4 ألف'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950" dir="rtl">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Enhanced Header Section */}
      <div className="relative border-b border-gray-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-transparent to-orange-950/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-600 to-green-600 mb-6 shadow-2xl shadow-emerald-600/50 animate-pulse">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-white">
              جدول المباريات
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              جداول مباشرة لأهم مباريات اليوم في جميع الرياضات • يتم التحديث لحظياً
            </p>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:border-emerald-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-emerald-600/0 group-hover:from-emerald-600/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">الرياضات</span>
                </div>
                <div className="text-4xl font-black text-white mb-1">{categories.length}</div>
                <div className="text-xs text-gray-500 font-medium">تصنيفات نشطة</div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:border-red-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="relative">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">مباشر الآن</span>
                </div>
                <div className="text-4xl font-black text-white mb-1">{liveMatches}</div>
                <div className="text-xs text-gray-500 font-medium">مباريات حية</div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:border-blue-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">المباريات</span>
                </div>
                <div className="text-4xl font-black text-white mb-1">{totalMatches}</div>
                <div className="text-xs text-gray-500 font-medium">مجموع اليوم</div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:border-purple-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">المشاهدون</span>
                </div>
                <div className="text-4xl font-black text-white mb-1">{totalViewers.toFixed(0)} ألف</div>
                <div className="text-xs text-gray-500 font-medium">يشاهدون الآن</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Category Filter */}
      <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-2xl border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                !selectedCategory
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-xl shadow-emerald-600/40 scale-105'
                  : 'bg-slate-900/80 text-gray-400 hover:bg-slate-800 hover:text-white border border-gray-800/50 hover:border-gray-700 hover:scale-105'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>جميع الرياضات</span>
              <span className={`mr-1 px-2.5 py-0.5 rounded-full text-xs font-black ${
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
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    selectedCategory === cat.sport
                      ? `bg-gradient-to-r ${cat.gradient} text-white shadow-xl scale-105`
                      : 'bg-slate-900/80 text-gray-400 hover:bg-slate-800 hover:text-white border border-gray-800/50 hover:border-gray-700 hover:scale-105'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.sport}</span>
                  <span className={`mr-1 px-2.5 py-0.5 rounded-full text-xs font-black ${
                    selectedCategory === cat.sport ? 'bg-white/25' : 'bg-slate-800'
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-16">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.sport}>
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                  <div className="flex items-center gap-5">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-2xl shadow-${category.color}-600/30 animate-pulse`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-white mb-1">{category.sport}</h2>
                      <p className="text-gray-400 text-sm font-medium">{category.description} • {category.matches.length} مباريات اليوم</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-all group self-start md:self-auto hover:gap-3">
                    <span>عرض جميع المباريات</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </button>
                </div>

                {/* Matches Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.matches.map(match => (
                    <div
                      key={match.id}
                      className={`group/card relative bg-gradient-to-br from-slate-900/90 to-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                        match.isFeatured 
                          ? 'border-emerald-600/60 ring-2 ring-emerald-600/30 shadow-xl shadow-emerald-600/20' 
                          : 'border-gray-800/50 hover:border-emerald-600/50'
                      }`}
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 via-green-600/0 to-emerald-600/0 group-hover/card:from-emerald-600/10 group-hover/card:via-green-600/5 group-hover/card:to-emerald-600/10 transition-all duration-500"></div>
                      
                      {/* Status Badges */}
                      <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {match.isLive && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg shadow-red-600/50">
                              <div className="relative">
                                <div className="w-2 h-2 bg-white rounded-full animate-ping absolute"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-white text-xs font-black uppercase tracking-wider">مباشر</span>
                            </div>
                          )}
                          {match.isFeatured && !match.isLive && (
                            <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-600 to-orange-600 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                              <Star className="w-4 h-4 text-white" fill="currentColor" />
                              <span className="text-white text-xs font-black uppercase">مميزة</span>
                            </div>
                          )}
                        </div>
                        
                        <button
                          onClick={() => toggleNotification(match.id)}
                          className={`p-2.5 rounded-xl backdrop-blur-sm border-2 transition-all hover:scale-110 ${
                            notificationEnabled.includes(match.id)
                              ? 'bg-emerald-950/90 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-600/30'
                              : 'bg-slate-900/90 border-gray-700 text-gray-400 hover:bg-emerald-950/70 hover:border-emerald-600 hover:text-emerald-400'
                          }`}
                        >
                          <Bell className={`w-4 h-4 ${notificationEnabled.includes(match.id) ? 'fill-current animate-pulse' : ''}`} />
                        </button>
                      </div>

                      <div className="relative p-7 pt-20">
                        {/* League & Matchweek */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-950/70 to-green-950/70 border border-emerald-700/40 rounded-xl px-4 py-2 shadow-lg">
                            <Shield className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 text-xs font-black uppercase tracking-wider">{match.league}</span>
                          </div>
                          {match.matchweek && (
                            <span className="text-xs text-gray-500 font-bold bg-slate-900/50 px-3 py-1.5 rounded-lg">{match.matchweek}</span>
                          )}
                        </div>

                        {/* Teams Display */}
                        <div className="mb-7 space-y-4">
                          {/* Home Team */}
                          <div className="flex items-center gap-4 group/team">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-2xl bg-white/98 backdrop-blur-sm flex items-center justify-center p-3 shadow-xl group-hover/team:scale-110 transition-transform">
                                <img 
                                  src={match.homeLogoUrl} 
                                  alt={match.homeTeam}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                              <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg">
                                م
                              </div>
                            </div>
                            <span className="text-xl font-black text-white group-hover/team:text-emerald-400 transition-colors flex-1">{match.homeTeam}</span>
                          </div>

                          {/* VS Divider */}
                          <div className="flex items-center gap-4 my-3">
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-700 to-transparent"></div>
                            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-slate-800 to-gray-800 border border-gray-700">
                              <span className="text-sm font-black text-gray-400 uppercase tracking-widest">ضد</span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                          </div>

                          {/* Away Team */}
                          <div className="flex items-center gap-4 group/team">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-2xl bg-white/98 backdrop-blur-sm flex items-center justify-center p-3 shadow-xl group-hover/team:scale-110 transition-transform">
                                <img 
                                  src={match.awayLogoUrl} 
                                  alt={match.awayTeam}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                              <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg">
                                ض
                              </div>
                            </div>
                            <span className="text-xl font-black text-white group-hover/team:text-emerald-400 transition-colors flex-1">{match.awayTeam}</span>
                          </div>
                        </div>

                        {/* Match Info Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-slate-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-3 hover:border-emerald-600/50 transition-all group/info">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center group-hover/info:scale-110 transition-transform">
                                <Clock className="w-4 h-4 text-emerald-400" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 font-medium mb-1">التوقيت</div>
                            <div className="text-sm font-bold text-white">{match.time}</div>
                          </div>
                          
                          <div className="bg-slate-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-3 hover:border-emerald-600/50 transition-all group/info">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover/info:scale-110 transition-transform">
                                <Eye className="w-4 h-4 text-purple-400" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 font-medium mb-1">المشاهدون</div>
                            <div className="text-sm font-bold text-white">{match.viewers}</div>
                          </div>
                          
                          <div className="col-span-2 bg-slate-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-3 hover:border-emerald-600/50 transition-all group/info">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover/info:scale-110 transition-transform">
                                <MapPin className="w-4 h-4 text-blue-400" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 font-medium mb-1">الملعب</div>
                            <div className="text-sm font-bold text-white">{match.stadium}</div>
                          </div>
                          
                          <div className="col-span-2 bg-slate-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-3 hover:border-emerald-600/50 transition-all group/info">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center group-hover/info:scale-110 transition-transform">
                                <Calendar className="w-4 h-4 text-orange-400" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 font-medium mb-1">التاريخ</div>
                            <div className="text-sm font-bold text-white">{match.date}</div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <a
                          href="/live"
                          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-600/40 group/btn active:scale-95"
                        >
                          <ChevronRight className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
                          <span className="text-base">شاهد البث المباشر</span>
                          <Play className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="currentColor" />
                        </a>
                      </div>

                      {/* Decorative Glow Effects */}
                      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-full blur-3xl group-hover/card:scale-150 transition-transform duration-700"></div>
                      {match.isFeatured && (
                        <>
                          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-full blur-2xl"></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-amber-600/5"></div>
                        </>
                      )}
                      {match.isLive && (
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-600/15 to-rose-600/15 rounded-full blur-2xl animate-pulse"></div>
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="relative bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-green-600/5 to-emerald-600/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600/30 to-green-600/30 rounded-3xl mb-8 animate-pulse shadow-2xl shadow-emerald-600/30">
              <Trophy className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-white">
              لا تفوت أي مباراة
            </h3>
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              احصل على إشعارات فورية لفرقك المفضلة وشاهد البث المباشر لأكبر الأحداث الرياضية حول العالم
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-8 py-4 rounded-2xl font-black shadow-2xl hover:shadow-emerald-600/50 transition-all duration-300 hover:scale-105 active:scale-95">
                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">تصفح جميع المباريات</span>
              </button>
              <button className="group inline-flex items-center gap-3 bg-slate-900/80 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-black border-2 border-gray-700 hover:border-emerald-600 transition-all duration-300 hover:scale-105 active:scale-95">
                <Bell className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">ضبط التذكيرات</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button className="group w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-2xl shadow-2xl shadow-emerald-600/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce hover:animate-none">
          <TrendingUp className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
}