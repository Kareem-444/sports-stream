"use client";
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Tv, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  Trophy, 
  Star,
  CheckCircle,
  Target,
  Heart,
  TrendingUp
} from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Tv,
      title: 'بث عالي الجودة',
      description: 'جودة فيديو 4K فائقة الوضوح لتجربة مشاهدة لا مثيل لها'
    },
    {
      icon: Zap,
      title: 'تحديثات لحظية',
      description: 'النتائج المباشرة والإحصائيات وإشعارات فورية لفرقك المفضلة'
    },
    {
      icon: Globe,
      title: 'تغطية عالمية',
      description: 'شاهد الأحداث الرياضية من جميع أنحاء العالم على مدار الساعة'
    },
    {
      icon: Shield,
      title: 'منصة آمنة',
      description: 'بياناتك محمية بأحدث تقنيات الأمان على مستوى المؤسسات'
    },
  ];

  const stats = [
    { icon: Users, value: '+2 مليون', label: 'مستخدم نشط' },
    { icon: Trophy, value: '+50', label: 'رياضة مغطاة' },
    { icon: Tv, value: '+10 آلاف', label: 'بث مباشر' },
    { icon: Star, value: '4.8', label: 'التقييم' },
  ];

  const values = [
    { icon: Target, title: 'الابتكار', description: 'دفع حدود التقنية بأحدث تكنولوجيا البث المباشر' },
    { icon: Heart, title: 'الشغف', description: 'مدفوعون بحبنا للرياضة وتفانينا لخدمة الجماهير' },
    { icon: TrendingUp, title: 'التميز', description: 'ملتزمون بتقديم أفضل تجربة بث على الإطلاق' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950" dir="rtl">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        .text-shadow { text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); }
        
        /* Mobile font optimization */
        @media (max-width: 640px) {
          html { font-size: 16px; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-b border-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/15 via-transparent to-green-900/15"></div>
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
        
        {/* Floating Football */}
        <div className="absolute top-10 right-4 sm:top-16 sm:right-8 md:top-20 md:right-20 animate-float">
          <svg width="50" height="50" viewBox="0 0 100 100" className="sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-2xl opacity-80">
            <defs>
              <radialGradient id="ballGradient" cx="40%" cy="40%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#d1d5db" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#ballGradient)" stroke="#1f2937" strokeWidth="2"/>
            <path d="M50 15 L60 35 L50 30 L40 35 Z" fill="#1f2937"/>
            <path d="M20 40 L30 30 L35 40 L30 50 Z" fill="#1f2937"/>
            <path d="M70 30 L80 40 L75 50 L65 40 Z" fill="#1f2937"/>
            <path d="M30 70 L40 65 L50 70 L45 80 Z" fill="#1f2937"/>
            <path d="M60 65 L70 70 L65 80 L55 75 Z" fill="#1f2937"/>
            <path d="M35 40 L50 30 L65 40 L60 65 L40 65 Z" fill="none" stroke="#1f2937" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-900/40 border-2 border-emerald-600/50 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm">
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-400" fill="currentColor" />
              <span className="text-emerald-300 text-xs sm:text-sm md:text-base font-bold tracking-wide">عن المنصة</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 tracking-tight leading-tight text-shadow px-2">
              مرحباً بك في
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500">
                سبورت ستريم
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-7 md:mb-8 lg:mb-10 px-3 sm:px-4 font-medium max-w-3xl mx-auto">
              وجهتك المثالية للبث الرياضي المباشر. نجلب لك إثارة المباريات مباشرة، أينما كنت، ومتى أردت.
            </p>

            <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 px-4 max-w-md xs:max-w-none mx-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 active:scale-95 text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-emerald-500/50 text-sm sm:text-base md:text-lg whitespace-nowrap">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" fill="currentColor" />
                <span>ابدأ المشاهدة</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-slate-800/80 border-2 border-gray-600/50 hover:border-emerald-500/50 hover:bg-slate-800 active:scale-95 text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base md:text-lg backdrop-blur-sm whitespace-nowrap">
                اعرف المزيد
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 -mt-6 sm:-mt-10 md:-mt-16 relative z-10">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                id={`stat-${idx}`}
                data-animate
                className="bg-gradient-to-br from-slate-800/95 to-gray-800/95 backdrop-blur-md border-2 border-gray-600/50 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 text-center hover:border-emerald-500/70 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-emerald-500/30 animate-slide-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 border-2 border-emerald-400/30 mb-2 sm:mb-3 md:mb-4 shadow-lg">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2 leading-tight">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300 font-semibold leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1" id="mission-text" data-animate>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-shadow leading-tight">
              رسالتنا
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-medium">
              في سبورت ستريم، نؤمن بأن كل مشجع يستحق الوصول إلى محتوى رياضي عالمي المستوى. رسالتنا هي كسر الحواجز وإيصال إثارة الرياضة المباشرة إلى ملايين المشاهدين حول العالم.
            </p>
            <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4 bg-emerald-900/30 border-2 border-emerald-600/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3.5 sm:p-4 md:p-6 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5 md:mb-2 leading-tight">منصة تجريبية</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                  جميع بيانات المباريات والبث وهمية لأغراض العرض التوضيحي فقط. هذا مشروع عرض يسلط الضوء على التصميم والوظائف.
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2" id="mission-visual" data-animate>
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-600/20 to-green-600/20 border-2 border-emerald-600/40 p-6 sm:p-8 md:p-10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
              <svg className="absolute inset-0 w-full h-full opacity-15 sm:opacity-20" viewBox="0 0 400 400">
                <rect x="50" y="50" width="300" height="300" fill="none" stroke="#10b981" strokeWidth="3" rx="20"/>
                <line x1="200" y1="50" x2="200" y2="350" stroke="#10b981" strokeWidth="3"/>
                <circle cx="200" cy="200" r="60" fill="none" stroke="#10b981" strokeWidth="3"/>
                <circle cx="200" cy="200" r="6" fill="#10b981"/>
                <rect x="50" y="150" width="35" height="100" fill="none" stroke="#10b981" strokeWidth="3" rx="5"/>
                <rect x="315" y="150" width="35" height="100" fill="none" stroke="#10b981" strokeWidth="3" rx="5"/>
              </svg>
              
              <div className="relative z-10 text-center">
                <div className="animate-float">
                  <svg width="80" height="80" viewBox="0 0 100 100" className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 drop-shadow-2xl mx-auto mb-3 sm:mb-4 md:mb-6">
                    <defs>
                      <radialGradient id="ballGrad" cx="35%" cy="35%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#d1d5db" />
                      </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="url(#ballGrad)" stroke="#1f2937" strokeWidth="2"/>
                    <path d="M50 10 L65 35 L50 28 L35 35 Z" fill="#1f2937"/>
                    <path d="M15 40 L28 28 L35 40 L28 52 Z" fill="#1f2937"/>
                    <path d="M72 28 L85 40 L78 52 L65 40 Z" fill="#1f2937"/>
                    <path d="M28 72 L40 65 L50 72 L43 85 Z" fill="#1f2937"/>
                    <path d="M60 65 L72 72 L65 85 L53 78 Z" fill="#1f2937"/>
                    <path d="M35 40 L50 28 L65 40 L60 65 L40 65 Z" fill="none" stroke="#1f2937" strokeWidth="2.5"/>
                  </svg>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 md:mb-3 text-shadow leading-tight">بث مميز</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-medium leading-tight">استمتع بالرياضة كما لم تراها من قبل</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 lg:py-24 border-t-2 border-gray-700">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16" id="features-header" data-animate>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-shadow leading-tight">مميزات المنصة</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-medium px-4 leading-relaxed">
            اكتشف ما يجعل سبورت ستريم الوجهة المثالية لعشاق الرياضة
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                id={`feature-${idx}`}
                data-animate
                className="group bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border-2 border-gray-600/50 hover:border-emerald-500/70 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 animate-slide-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 group-hover:text-emerald-400 transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 lg:py-24 border-t-2 border-gray-700">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16" id="values-header" data-animate>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-shadow leading-tight">قيمنا الأساسية</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-medium px-4 leading-relaxed">
            المبادئ التي توجه كل ما نقوم به
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                id={`value-${idx}`}
                data-animate
                className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border-2 border-gray-600/50 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 text-center hover:border-emerald-500/70 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-emerald-500/30 animate-slide-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6 shadow-lg">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 leading-tight">{value.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 md:pb-20 lg:pb-24">
        <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 rounded-2xl sm:rounded-3xl border-2 border-gray-600/50 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-green-600/10 to-emerald-600/20"></div>
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
          
          <div className="relative px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-12 lg:py-20 text-center">
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-emerald-400 mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 animate-float drop-shadow-2xl" />
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-shadow px-2">
              هل أنت مستعد لتجربة مستقبل البث الرياضي؟
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto font-medium px-3 sm:px-4 leading-relaxed">
              انضم إلى ملايين المشجعين واستكشف مميزات منصتنا اليوم
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 active:scale-95 text-white font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 lg:py-5 xl:py-6 rounded-xl sm:rounded-xl md:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0" fill="currentColor" />
              <span>استكشف المميزات</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}