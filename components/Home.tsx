'use client'
import React, { useState, useEffect } from 'react';
import { Play, Clock, Users, Calendar, ChevronRight, Tv, TrendingUp, Star, Sparkles, Trophy, Zap, Eye, Flame, Radio, Award } from 'lucide-react';

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

// Generate consistent random values for floating dots
const floatingDots = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: (i * 7 + 13) % 97,
  top: (i * 11 + 19) % 93,
  delay: (i * 0.7) % 5,
  duration: 10 + (i * 1.3) % 10
}));

const matches: Match[] = [
  {
    id: 1,
    homeTeam: "ريال مدريد",
    awayTeam: "ليفربول",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    time: "10:00",
    sport: "كرة القدم",
    league: "دوري أبطال أوروبا",
    isLive: true,
    viewers: "+35,000",
    featured: true,
    streamLink: "/LiveStream"
  },
  {
    id: 2,
    homeTeam: "بايرن ميونيخ",
    awayTeam: "باريس سان جيرمان",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    time: "10:00",
    sport: "كرة القدم",
    league: "دوري أبطال أوروبا",
    isLive: false,
    viewers: "+15,000",
    streamLink: "/LiveStreamCloored"
  },
  {
    id: 3,
    homeTeam: "توتنهام",
    awayTeam: "كوبنهاغن",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Copenhagen_logo.svg/1200px-FC_Copenhagen_logo.svg.png",
    time: "10:00",
    sport: "كرة القدم",
    league: "دوري أبطال أوروبا",
    isLive: false,
    viewers: "+15,000",
    streamLink: "/LiveStreamDool"
  },
  {
    id: 4,
    homeTeam: "آرسنال",
    awayTeam: "سلافيا براغ",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/SK_Slavia_Prague_logo.svg",
    time: "7:45",
    sport: "كرة القدم",
    league: "دوري أبطال أوروبا",
    isLive: false,
    viewers: "+15,000",
    streamLink: "/LiveStreamFloored"
  },
];

const stats = [
  { label: "مباريات مباشرة", value: "24", icon: Tv, gradient: "from-red-600 to-pink-600" },
  { label: "المشاهدون النشطون", value: "+100,000", icon: Users, gradient: "from-emerald-600 to-teal-600" },
  { label: "الرياضات المتاحة", value: "12+", icon: TrendingUp, gradient: "from-purple-600 to-indigo-600" },
];

const features = [
  { icon: Eye, title: "بث بجودة 4K", desc: "دقة فائقة الوضوح" },
  { icon: Flame, title: "محتوى حصري", desc: "تغطية مباشرة فريدة" },
  { icon: Radio, title: "بث متعدد الزوايا", desc: "شاهد من أي زاوية" },
  { icon: Award, title: "تحليلات احترافية", desc: "تعليق من الخبراء" },
];

export default function Home() {
  const [viewersCount, setViewersCount] = useState(100000);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 50));
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden" dir="rtl">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        
        {floatingDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-float"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animationDelay: `${dot.delay}s`,
              animationDuration: `${dot.duration}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/40 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg shadow-emerald-500/20">
              <div className="relative">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 animate-pulse" />
              <span className="text-emerald-300 text-xs sm:text-sm font-bold tracking-wider">بث مباشر بجودة 4K</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight px-4 animate-fade-in">
              منصة البث الرياضي
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 animate-gradient">
                المتميزة والاحترافية
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in">
              استمتع بإثارة المباريات المباشرة مع بث فائق الوضوح بجودة 4K،
              إحصائيات لحظية، وتغطية شاملة للأحداث الرياضية العالمية
            </p>

            <div className="mt-8 inline-flex items-center gap-3 bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl px-6 py-3 shadow-2xl">
              <Eye className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-white font-bold text-lg">{viewersCount.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">مشاهد نشط الآن</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="group relative bg-slate-800/90 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-5 sm:p-6 text-center hover:border-emerald-500 transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-2xl transition-all duration-500"></div>
                <div className={`relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${stat.gradient} p-0.5 mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
                <div className="relative text-2xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="relative text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4 text-center hover:border-emerald-500 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-emerald-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg shadow-lg animate-pulse">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">المباراة المميزة</h2>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-pulse" />
          </div>

          {matches.filter(m => m.featured).map((match) => (
            <div key={match.id} className="relative group bg-slate-800/95 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-emerald-600/50 hover:border-emerald-400 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/30 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-teal-600/0 group-hover:from-emerald-600/10 group-hover:to-teal-600/10 transition-all duration-500"></div>
              
              <div className="relative p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 flex-wrap justify-center">
                  {match.isLive && (
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-600 to-red-500 rounded-xl px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg shadow-red-500/50 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="relative">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      </div>
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                      <span className="text-white text-sm sm:text-base font-bold uppercase tracking-wider">مباشر الآن</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-900/50 border-2 border-emerald-600/60 rounded-xl px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                    <span className="text-emerald-200 text-sm sm:text-base font-bold">{match.league}</span>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center justify-between gap-6 sm:gap-8 md:gap-12">
                    <div className="flex flex-col items-center gap-3 flex-1">
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative w-full h-full bg-white rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-slate-200">
                          <img src={match.homeTeamLogo} alt={match.homeTeam} className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <span className="text-white font-bold text-base sm:text-lg md:text-xl text-center">{match.homeTeam}</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-400">ضد</div>
                      <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-3 flex-1">
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative w-full h-full bg-white rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 border-2 border-slate-200">
                          <img src={match.awayTeamLogo} alt={match.awayTeam} className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <span className="text-white font-bold text-base sm:text-lg md:text-xl text-center">{match.awayTeam}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 text-gray-200 mb-6 justify-center flex-wrap">
                  <div className="flex items-center gap-2 bg-slate-700/70 rounded-lg px-4 sm:px-5 py-2.5 backdrop-blur-sm">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold text-base sm:text-lg">{match.time}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-700/70 rounded-lg px-4 sm:px-5 py-2.5 backdrop-blur-sm">
                    <Users className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold text-base sm:text-lg">{match.viewers} يشاهدون</span>
                  </div>
                </div>

                <a
                  href={match.streamLink}
                  className="relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 sm:py-5 px-6 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-[1.02] group/btn overflow-hidden"
                >
                  <ChevronRight className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform rotate-180" />
                  <span className="text-base sm:text-lg">شاهد البث المباشر</span>
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-lg">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">جدول مباريات اليوم</h2>
          </div>

          <div className="grid gap-5 sm:gap-6">
            {matches.filter(m => !m.featured).map((match) => (
              <div
                key={match.id}
                className="group relative bg-slate-800/90 backdrop-blur-xl rounded-xl overflow-hidden border-2 border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-teal-600/0 group-hover:from-emerald-600/10 group-hover:to-teal-600/10 transition-all duration-300"></div>
                
                <div className="relative p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-1.5 bg-emerald-900/50 border-2 border-emerald-600/60 rounded-lg px-3 py-2">
                      <Zap className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-200 text-xs font-bold uppercase tracking-wider">{match.sport}</span>
                    </div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">{match.league}</div>
                  </div>

                  <div className="mb-5">
                    <div className="flex items-center justify-between gap-4 sm:gap-6">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg p-2 sm:p-2.5 shadow-md flex-shrink-0 border border-slate-200 group-hover:scale-110 transition-transform duration-300">
                          <img src={match.homeTeamLogo} alt={match.homeTeam} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-white font-bold text-sm sm:text-base truncate">{match.homeTeam}</span>
                      </div>
                      
                      <div className="text-emerald-400 font-black text-lg sm:text-xl px-2 flex-shrink-0">ضد</div>
                      
                      <div className="flex items-center gap-3 flex-1 justify-end min-w-0">
                        <span className="text-white font-bold text-sm sm:text-base text-right truncate">{match.awayTeam}</span>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg p-2 sm:p-2.5 shadow-md flex-shrink-0 border border-slate-200 group-hover:scale-110 transition-transform duration-300">
                          <img src={match.awayTeamLogo} alt={match.awayTeam} className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-5 text-gray-200 text-sm flex-wrap justify-center">
                    <div className="flex items-center gap-1.5 bg-slate-700/70 rounded-lg px-3 py-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span className="font-medium">{match.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-700/70 rounded-lg px-3 py-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span className="font-medium">{match.viewers}</span>
                    </div>
                  </div>

                  <a
                    href={match.streamLink}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group/btn text-sm sm:text-base"
                  >
                    <ChevronRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform rotate-180" />
                    <span>شاهد البث</span>
                    <Play className="w-4 h-4" fill="currentColor" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-slate-800/90 rounded-2xl sm:rounded-3xl border-2 border-slate-700 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/5 to-emerald-600/10"></div>
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-amber-900/30 border-2 border-amber-500/50 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" />
              <span className="text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider">محتوى مميز</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              افتح التغطية الرياضية الحصرية
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              احصل على وصول غير محدود للمباريات المميزة والفعاليات الحصرية. انضم إلى
              عضويتنا المميزة لتجربة بث محسّنة بجودة 4K الفائقة
            </p>
            <a
              href="/premium"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 hover:from-amber-500 hover:via-orange-500 hover:to-amber-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base md:text-lg"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              <span>كن عضواً مميزاً</span>
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t-2 border-slate-800 bg-slate-900/90 backdrop-blur-xl mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="text-white font-bold text-lg sm:text-xl">سبورت ستريم</span>
              <Tv className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">© 2024 سبورت ستريم. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}