"use client";

import { useRef, useState, useEffect } from 'react';
import { 
  ArrowLeft, Users, Wifi, Settings, Volume2, VolumeX,
  Maximize, Minimize, Play, Pause, Signal, Radio,
  TrendingUp, Clock, Eye, Shield, Award, Target, Activity
} from 'lucide-react';

export default function ProfessionalLiveStreamViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [quality, setQuality] = useState("1080p");
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [viewerCount, setViewerCount] = useState(127543);
  const [matchTime, setMatchTime] = useState("45:00");

  const streamUrl = "https://1player.baselalsharef.com/albaplayer/bein1/?serv=0";

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 100) - 50);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatViewers = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" dir="rtl">
      {/* Professional Header */}
      <div className="bg-slate-900/98 backdrop-blur-xl border-b border-slate-700/30 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-all group"
              >
                <div className="bg-slate-800/50 group-hover:bg-slate-700/50 rounded-xl p-2.5 transition-all">
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </div>
              </button>
              <div className="h-10 w-px bg-slate-700/50"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">سبورت ستريم برو</div>
                  <div className="text-slate-400 text-xs">بث مباشر عالي الجودة</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-red-600/10 border border-red-600/30 rounded-xl px-4 py-2.5">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                <span className="text-red-500 text-sm font-bold">بث مباشر</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/30 rounded-xl px-4 py-2.5">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-bold text-sm">{formatViewers(viewerCount)}</span>
                <span className="text-slate-400 text-xs">متفرج</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player - Larger Section */}
          <div className="lg:col-span-2">
            {/* Team Headers with Logos */}
            <div className="bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/30 p-6 mb-6 shadow-2xl">
              <div className="flex items-center justify-between">
                {/* Liverpool */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl p-2">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" 
                      alt="Liverpool FC"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">ليفربول</h2>
                    <p className="text-slate-400 text-sm">إنجلترا • الريدز</p>
                  </div>
                </div>

                {/* VS & Time */}
                <div className="text-center px-8">
                  <div className="bg-slate-800/50 border border-slate-700/30 rounded-xl px-6 py-3 mb-2">
                    <span className="text-4xl font-bold text-white">VS</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-emerald-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-bold">{matchTime}</span>
                  </div>
                </div>

                {/* Real Madrid */}
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white text-left">ريال مدريد</h2>
                    <p className="text-slate-400 text-sm text-left">إسبانيا • الملكي</p>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl p-2">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
                      alt="Real Madrid CF"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div 
              ref={containerRef}
              className="relative bg-black rounded-2xl overflow-hidden border border-slate-700/30 shadow-2xl"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <div className="relative aspect-video">
                <iframe
                  ref={iframeRef}
                  src={streamUrl}
                  className="w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  title="Live Stream"
                  allow="autoplay; fullscreen"
                />
                <div 
                  className="absolute inset-0 pointer-events-auto"
                  style={{ background: 'transparent' }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowControls(!showControls);
                  }}
                />
                
                {/* Controls Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 transition-opacity duration-300 pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Top Info Bar */}
                  <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between pointer-events-auto">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-600/90 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-red-500/30">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-bold">مباشر</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 border border-slate-600/30">
                        <span className="text-white text-sm font-bold">دوري أبطال أوروبا</span>
                      </div>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-slate-600/30">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span className="text-white text-sm font-bold">{formatViewers(viewerCount)}</span>
                    </div>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto">
                    <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-5 border border-slate-600/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const iframe = iframeRef.current;
                              if (iframe) {
                                if (isPlaying) {
                                  iframe.style.display = 'none';
                                  setIsPlaying(false);
                                } else {
                                  iframe.style.display = 'block';
                                  iframe.src = iframe.src;
                                  setIsPlaying(true);
                                }
                              }
                            }}
                            className="text-white hover:text-emerald-400 transition-all hover:scale-110"
                          >
                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" fill="currentColor" />}
                          </button>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMuted(!isMuted);
                                setVolume(isMuted ? 80 : 0);
                              }}
                              className="text-white hover:text-emerald-400 transition-all hover:scale-110"
                            >
                              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                            </button>
                            
                            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  const newVolume = Number(e.target.value);
                                  setVolume(newVolume);
                                  setIsMuted(newVolume === 0);
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-24 h-2 bg-slate-600/50 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:cursor-pointer"
                              />
                              <span className="text-white text-sm font-bold min-w-[3rem]">{volume}%</span>
                            </div>
                          </div>

                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowQualityMenu(!showQualityMenu);
                              }}
                              className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 text-emerald-400 text-sm font-bold hover:bg-slate-700/50 transition-all"
                            >
                              <Signal className="w-4 h-4" />
                              <span>{quality}</span>
                            </button>
                            
                            {showQualityMenu && (
                              <div className="absolute bottom-full mb-2 left-0 bg-black/95 backdrop-blur-xl rounded-xl border border-slate-600/50 overflow-hidden min-w-[150px] z-50">
                                {['1080p', '720p', '480p', '360p', 'تلقائي'].map((q) => (
                                  <button
                                    key={q}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setQuality(q);
                                      setShowQualityMenu(false);
                                    }}
                                    className={`w-full text-right px-4 py-3 text-sm font-bold transition-all ${
                                      quality === q ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                                    }`}
                                  >
                                    {q}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="text-white hover:text-emerald-400 transition-all hover:scale-110"
                          >
                            <Settings className="w-6 h-6" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFullscreen();
                            }}
                            className="text-white hover:text-emerald-400 transition-all hover:scale-110"
                          >
                            {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
                          </button>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 via-red-600 to-emerald-500 w-full"></div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span>مباشر</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream Quality Bar */}
            <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl mt-4 px-6 py-4 border border-slate-700/30">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Wifi className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold">جودة {quality}</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Signal className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium">اتصال مستقر</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium">تأخير منخفض</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Analysis */}
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/30 p-8 mt-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">تحليل المباراة</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">المواجهة الأسطورية في آنفيلد</h3>
                  <p className="text-slate-300 leading-relaxed text-base">
                    يستضيف ملعب آنفيلد الأسطوري واحدة من أعظم المواجهات في تاريخ كرة القدم الأوروبية. ليفربول، بطل أوروبا 6 مرات، يواجه ريال مدريد، صاحب الرقم القياسي بـ14 لقباً في دوري الأبطال. هذه المباراة تحمل أهمية استثنائية في مرحلة المجموعات، حيث يسعى الفريقان لتعزيز موقعهما في صدارة المجموعة والتأهل المباشر لدور الـ16.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-red-400" />
                      <h4 className="text-lg font-bold text-white">ليفربول - الريدز</h4>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      يدخل ليفربول هذه المباراة بمعنويات عالية بعد انتصاراته المتتالية في الدوري الإنجليزي. يورغن كلوب يعتمد على ثلاثي الهجوم الخطير بقيادة محمد صلاح، الذي يعتبر أحد أبرز اللاعبين في العالم حالياً. الفريق يتمتع بقوة دفاعية صلبة بقيادة فيرجيل فان دايك، ويمتلك خط وسط ديناميكي يضم أليكسيس ماك أليستر ودومينيك سوبوسلاي.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-950/60 text-red-400 text-xs font-bold px-3 py-1 rounded-lg">الهجوم السريع</span>
                      <span className="bg-red-950/60 text-red-400 text-xs font-bold px-3 py-1 rounded-lg">الضغط العالي</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-slate-300" />
                      <h4 className="text-lg font-bold text-white">ريال مدريد - الملكي</h4>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      النادي الملكي يأتي بخبرة لا مثيل لها في دوري الأبطال. كارلو أنشيلوتي، المدرب الأكثر تتويجاً بالبطولة، يعتمد على نجومه فينيسيوس جونيور وجود بيلينغهام الذي أثبت أنه إضافة حقيقية للفريق. ريال مدريد معروف بقدرته على قلب النتائج في اللحظات الحاسمة، ويمتلك دفاعاً قوياً بقيادة أنطونيو روديغر وداني كارفاخال.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-700/60 text-slate-300 text-xs font-bold px-3 py-1 rounded-lg">الخبرة الأوروبية</span>
                      <span className="bg-slate-700/60 text-slate-300 text-xs font-bold px-3 py-1 rounded-lg">الروح القتالية</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-950/40 to-blue-950/40 rounded-xl p-5 border border-emerald-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-lg font-bold text-white">النقاط الرئيسية</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                      <p className="text-slate-300"><span className="font-bold text-white">المواجهات المباشرة:</span> التقى الفريقان 9 مرات سابقاً في دوري الأبطال، بواقع 4 انتصارات لريال مدريد و3 لليفربول و2 تعادل</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                      <p className="text-slate-300"><span className="font-bold text-white">آخر مواجهة:</span> نهائي 2022 في باريس، فاز ريال مدريد 1-0 بهدف فينيسيوس جونيور</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                      <p className="text-slate-300"><span className="font-bold text-white">الأهمية التكتيكية:</span> كلوب المعروف بأسلوب الجيجنبريس ضد أنشيلوتي صاحب الخبرة الأوروبية الأكبر</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                      <p className="text-slate-300"><span className="font-bold text-white">النجوم البارزة:</span> محمد صلاح ضد فينيسيوس جونيور - صراع الأجنحة الأخطر في العالم</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-950/40 border border-red-700/30 text-red-400 text-xs font-bold px-4 py-2 rounded-lg">
                    🏆 دوري أبطال أوروبا
                  </span>
                  <span className="bg-emerald-950/40 border border-emerald-700/30 text-emerald-400 text-xs font-bold px-4 py-2 rounded-lg">
                    ⚽ ملعب آنفيلد
                  </span>
                  <span className="bg-blue-950/40 border border-blue-700/30 text-blue-400 text-xs font-bold px-4 py-2 rounded-lg">
                    🔴 الريدز
                  </span>
                  <span className="bg-purple-950/40 border border-purple-700/30 text-purple-400 text-xs font-bold px-4 py-2 rounded-lg">
                    ⚪ الملكي
                  </span>
                  <span className="bg-amber-950/40 border border-amber-700/30 text-amber-400 text-xs font-bold px-4 py-2 rounded-lg">
                    ⭐ قمة أوروبية
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Match Statistics */}
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/30 p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">إحصائيات المباراة</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">المشاهدون الحاليون</span>
                    <span className="text-white font-bold text-lg">{formatViewers(viewerCount)}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 w-3/4"></div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">البطولة</span>
                    <span className="text-white font-bold">دوري أبطال أوروبا</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">المرحلة</span>
                    <span className="text-white font-bold">دور المجموعات</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">الملعب</span>
                    <span className="text-white font-bold">آنفيلد</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">السعة</span>
                    <span className="text-white font-bold">53,394 متفرج</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">جودة البث</span>
                    <span className="text-emerald-400 font-bold">{quality}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">المعلق</span>
                    <span className="text-white font-bold">حفيظ دراجي</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-400">الحالة</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      مباشر الآن
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Form */}
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/30 p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white">آخر 5 مباريات</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" 
                        alt="LFC"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white font-bold text-sm">ليفربول</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                    <div className="flex-1 bg-slate-600/20 border border-slate-600/30 rounded-lg py-2 text-center">
                      <span className="text-slate-400 font-bold text-xs">تعادل</span>
                    </div>
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-700/30"></div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
                        alt="RMA"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white font-bold text-sm">ريال مدريد</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                    <div className="flex-1 bg-red-600/20 border border-red-600/30 rounded-lg py-2 text-center">
                      <span className="text-red-400 font-bold text-xs">خسارة</span>
                    </div>
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                    <div className="flex-1 bg-slate-600/20 border border-slate-600/30 rounded-lg py-2 text-center">
                      <span className="text-slate-400 font-bold text-xs">تعادل</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Players */}
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/30 p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-600/20 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white">اللاعبون الأساسيون</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" 
                        alt="Mohamed Salah"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">محمد صلاح</div>
                      <div className="text-slate-400 text-xs">جناح أيمن - ليفربول</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">أهداف:</span>
                      <span className="text-white font-bold">12</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">تمريرات:</span>
                      <span className="text-white font-bold">8</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
                        alt="Vinicius Jr"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">فينيسيوس جونيور</div>
                      <div className="text-slate-400 text-xs">جناح أيسر - ريال مدريد</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">أهداف:</span>
                      <span className="text-white font-bold">10</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">تمريرات:</span>
                      <span className="text-white font-bold">6</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
                        alt="Jude Bellingham"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">جود بيلينغهام</div>
                      <div className="text-slate-400 text-xs">وسط - ريال مدريد</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">أهداف:</span>
                      <span className="text-white font-bold">14</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">تمريرات:</span>
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Prediction */}
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/30 p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white">توقعات المباراة</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-slate-400">فوز ليفربول</span>
                    <span className="text-white font-bold">45%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-red-600" style={{width: '45%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-slate-400">التعادل</span>
                    <span className="text-white font-bold">25%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-slate-500 to-slate-600" style={{width: '25%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-slate-400">فوز ريال مدريد</span>
                    <span className="text-white font-bold">30%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-slate-300 to-slate-400" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}