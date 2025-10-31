import React from 'react';
import { Play, Clock, Users, Calendar, ChevronRight, Tv, TrendingUp, Star, Sparkles, Trophy, Zap } from 'lucide-react';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  time: string;
  sport: string;
  league: string;
  isLive?: boolean;
  viewers?: string;
  featured?: boolean;
  streamLink?: string;
}

const matches: Match[] = [
  {
    id: 1,
    homeTeam: "ريال مدريد",
    awayTeam: "برشلونة",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    time: "18:00",
    sport: "كرة القدم",
    league: "الدوري الإسباني - الكلاسيكو",
    isLive: true,
    viewers: "2.4 مليون",
    featured: true,
    streamLink: "/LiveKareem"
  },
  {
    id: 2,
    homeTeam: "مانشستر يونايتد",
    awayTeam: "ليدز يونايتد",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg",
    time: "20:00",
    sport: "كرة القدم",
    league: "الدوري الإنجليزي الممتاز",
    isLive: true,
    viewers: "1.8 مليون",
    streamLink: "/LiveStreamFloored"
  },
  {
    id: 3,
    homeTeam: "كونور ماكجريجور",
    awayTeam: "داستن بورييه",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
    time: "22:00",
    sport: "الفنون القتالية المختلطة",
    league: "يو إف سي 300 - النزال الرئيسي",
    viewers: "890 ألف",
    streamLink: "/LiveStreamCloored"
  },
  {
    id: 4,
    homeTeam: "لوس أنجلوس ليكرز",
    awayTeam: "شيكاغو بولز",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg",
    time: "19:30",
    sport: "كرة السلة",
    league: "دوري كرة السلة الأمريكي",
    isLive: true,
    viewers: "1.2 مليون",
    streamLink: "/LiveStreamDool"
  },
];

const stats = [
  { label: "مباريات مباشرة", value: "24", icon: Tv, gradient: "from-red-500 to-pink-500" },
  { label: "المشاهدون النشطون", value: "6.3 مليون", icon: Users, gradient: "from-emerald-500 to-teal-500" },
  { label: "الرياضات المتاحة", value: "12+", icon: TrendingUp, gradient: "from-purple-500 to-indigo-500" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f0a] via-[#0d120d] to-[#0a0f0a]" dir="rtl">
      {/* عناصر الخلفية المتحركة */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* قسم البطل مع إحصائيات محسّنة */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6 shadow-lg shadow-emerald-500/10">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
              </div>
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-bold tracking-wider">بث مباشر بجودة 4K</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              منصة البث الرياضي
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 animate-gradient">
                المتميزة والاحترافية
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              استمتع بإثارة المباريات المباشرة مع بث فائق الوضوح بجودة 4K،
              إحصائيات لحظية، وتغطية شاملة للأحداث الرياضية العالمية
            </p>
          </div>

          {/* شريط الإحصائيات المحسّن */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-slate-900/80 to-gray-900/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 text-center hover:border-gray-700/70 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/10 rounded-2xl transition-all duration-300"></div>
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} p-0.5 mb-4 shadow-lg`}>
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="relative text-4xl font-bold text-white mb-1 bg-clip-text">{stat.value}</div>
                <div className="relative text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* المباراة المميزة - الكلاسيكو */}
        {matches.find(m => m.featured) && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg shadow-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">المباراة المميزة</h2>
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            {matches.filter(m => m.featured).map((match) => (
              <div key={match.id} className="relative group bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-900/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-800/40 hover:border-emerald-600/60 transition-all duration-500 shadow-2xl hover:shadow-emerald-900/30">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 to-green-600/0 group-hover:from-emerald-600/10 group-hover:to-green-600/10 transition-all duration-500"></div>
                
                {/* عناصر زخرفية */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6 flex-wrap">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 backdrop-blur-sm rounded-xl px-5 py-2.5 shadow-lg shadow-red-500/30">
                          <div className="relative">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
                          </div>
                          <Zap className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-bold uppercase tracking-wider">مباشر الآن</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-950/70 to-green-950/70 border border-emerald-700/40 rounded-xl px-5 py-2.5 backdrop-blur-sm">
                          <Trophy className="w-4 h-4 text-amber-400" />
                          <span className="text-emerald-300 text-sm font-bold">{match.league}</span>
                        </div>
                      </div>

                      {/* شعارات وأسماء الفرق */}
                      <div className="mb-8">
                        <div className="flex items-center justify-center gap-8 mb-6">
                          <div className="flex flex-col items-center gap-3 flex-1">
                            <div className="w-24 h-24 bg-white rounded-2xl p-4 shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                              <img src={match.homeTeamLogo} alt={match.homeTeam} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-white font-bold text-lg text-center">{match.homeTeam}</span>
                          </div>
                          
                          <div className="flex flex-col items-center gap-2">
                            <div className="text-5xl font-black text-emerald-400">ضد</div>
                            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                          </div>
                          
                          <div className="flex flex-col items-center gap-3 flex-1">
                            <div className="w-24 h-24 bg-white rounded-2xl p-4 shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                              <img src={match.awayTeamLogo} alt={match.awayTeam} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-white font-bold text-lg text-center">{match.awayTeam}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-gray-300 mb-8 justify-center">
                        <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                          <Clock className="w-5 h-5 text-emerald-400" />
                          <span className="font-semibold">{match.time}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                          <Users className="w-5 h-5 text-emerald-400" />
                          <span className="font-semibold">{match.viewers} يشاهدون</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={match.streamLink}
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-[1.02] group/btn"
                    >
                      <ChevronRight className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform rotate-180" />
                      <span className="text-lg">شاهد البث المباشر</span>
                      <Play className="w-6 h-6" fill="currentColor" />
                    </a>
                  </div>

                  <div className="relative">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-800 to-gray-900 border border-gray-700/50 flex items-center justify-center overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-600/30 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-emerald-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-500/20">
                          <Play className="w-16 h-16 text-emerald-400 opacity-70" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* قسم جدول اليوم */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">جدول مباريات اليوم</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group">
              <ChevronRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
              عرض الكل
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {matches.filter(m => !m.featured).map((match) => (
              <div
                key={match.id}
                className="group relative bg-gradient-to-br from-slate-900/80 to-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800/60 hover:border-emerald-700/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/40 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-green-600/0 group-hover:from-emerald-600/5 group-hover:to-green-600/5 transition-all duration-300"></div>
                
                {match.isLive && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg shadow-red-500/30">
                      <div className="relative">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                      </div>
                      <span className="text-white text-xs font-bold uppercase">مباشر</span>
                    </div>
                  </div>
                )}

                <div className="relative p-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-950/70 to-green-950/70 border border-emerald-700/40 rounded-lg px-3 py-2 mb-4">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      {match.sport}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
                    {match.league}
                  </div>

                  {/* عرض الفرق مع الشعارات */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-12 h-12 bg-white rounded-lg p-2 shadow-md flex-shrink-0">
                          <img src={match.homeTeamLogo} alt={match.homeTeam} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-white font-bold text-sm">{match.homeTeam}</span>
                      </div>
                      
                      <div className="text-emerald-400 font-black text-lg px-2">ضد</div>
                      
                      <div className="flex items-center gap-3 flex-1 justify-end">
                        <span className="text-white font-bold text-sm text-right">{match.awayTeam}</span>
                        <div className="w-12 h-12 bg-white rounded-lg p-2 shadow-md flex-shrink-0">
                          <img src={match.awayTeamLogo} alt={match.awayTeam} className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-5 text-gray-400 text-sm">
                    <div className="flex items-center gap-1.5 bg-slate-800/50 rounded-lg px-3 py-1.5">
                      <Clock className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium">{match.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-800/50 rounded-lg px-3 py-1.5">
                      <Users className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium">{match.viewers}</span>
                    </div>
                  </div>

                  <a
                    href={match.streamLink || "/live"}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/40 group/btn"
                  >
                    <ChevronRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform rotate-180" />
                    <span>شاهد البث</span>
                    <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* لافتة الشراكة المميزة */}
        <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-green-600/5 to-emerald-600/10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
          
          <div className="relative px-8 py-12 md:px-12 md:py-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-full px-6 py-2.5 mb-6 backdrop-blur-sm shadow-lg">
              <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
              <span className="text-amber-300 text-sm font-bold uppercase tracking-wider">محتوى مميز</span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              افتح التغطية الرياضية الحصرية
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              احصل على وصول غير محدود للمباريات المميزة والفعاليات الحصرية. انضم إلى
              عضويتنا المميزة لتجربة بث محسّنة بجودة 4K الفائقة
            </p>
            <a
              href="/premium"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 hover:from-amber-500 hover:via-orange-500 hover:to-amber-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              <span className="text-lg">كن عضواً مميزاً</span>
              <Trophy className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* التذييل */}
      <footer className="relative border-t border-gray-800/50 bg-[#0a0f0a]/80 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-white font-bold text-xl">سبورت ستريم</span>
              <Tv className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-gray-500 text-sm">© 2024 سبورت ستريم. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}