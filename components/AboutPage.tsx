"use client";
import React from 'react';
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
    { icon: Tv, value: '+10 آلاف', label: 'بث مباشر شهرياً' },
    { icon: Star, value: '4.8', label: 'تقييم المستخدمين' },
  ];

  const values = [
    { icon: Target, title: 'الابتكار', description: 'دفع حدود التقنية بأحدث تكنولوجيا البث المباشر' },
    { icon: Heart, title: 'الشغف', description: 'مدفوعون بحبنا للرياضة وتفانينا لخدمة الجماهير' },
    { icon: TrendingUp, title: 'التميز', description: 'ملتزمون بتقديم أفضل تجربة بث على الإطلاق' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f0a]" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-b border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-green-950/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/30 rounded-full px-5 py-2.5 mb-6">
              <Play className="w-4 h-4 text-emerald-400" fill="currentColor" />
              <span className="text-emerald-400 text-sm font-semibold tracking-wide">عن المنصة</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              مرحباً بك في
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500">
                سبورت ستريم
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              وجهتك المثالية للبث الرياضي المباشر. نجلب لك إثارة المباريات مباشرة،
              أينما كنت، ومتى أردت.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:scale-105">
                <Play className="w-5 h-5" fill="currentColor" />
                ابدأ المشاهدة
              </button>
              <button className="inline-flex items-center gap-2 bg-slate-900/50 border border-gray-800/50 hover:border-emerald-600/50 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                اعرف المزيد
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900/90 to-gray-900/90 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center hover:border-emerald-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-3">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              رسالتنا
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              في سبورت ستريم، نؤمن بأن كل مشجع يستحق الوصول إلى محتوى رياضي عالمي المستوى.
              رسالتنا هي كسر الحواجز وإيصال إثارة الرياضة المباشرة إلى ملايين المشاهدين حول العالم.
            </p>
            <div className="flex items-start gap-3 bg-emerald-950/20 border border-emerald-800/30 rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-white font-semibold mb-1">منصة تجريبية</div>
                <div className="text-sm text-gray-400">
                  جميع بيانات المباريات والبث وهمية لأغراض العرض التوضيحي فقط.
                  هذا مشروع عرض يسلط الضوء على التصميم والوظائف.
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-600/20 to-green-600/20 border border-emerald-800/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-32 h-32 text-emerald-400 mx-auto mb-4" fill="currentColor" />
                <div className="text-2xl font-bold text-white mb-2">بث مميز</div>
                <div className="text-gray-400">استمتع بالرياضة كما لم تراها من قبل</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">مميزات المنصة</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            اكتشف ما يجعل سبورت ستريم الوجهة المثالية لعشاق الرياضة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-900/70 to-gray-900/70 backdrop-blur-sm border border-gray-800/50 hover:border-emerald-700/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-950/30"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">قيمنا الأساسية</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            المبادئ التي توجه كل ما نقوم به
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900/70 to-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 text-center hover:border-emerald-700/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 rounded-3xl border border-gray-800/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-green-600/5 to-emerald-600/10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
          
          <div className="relative px-8 py-16 md:px-12 text-center">
            <Trophy className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              هل أنت مستعد لتجربة مستقبل البث الرياضي؟
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              انضم إلى ملايين المشجعين واستكشف مميزات منصتنا اليوم
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:scale-105 text-lg">
              <Play className="w-6 h-6" fill="currentColor" />
              استكشف المميزات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}