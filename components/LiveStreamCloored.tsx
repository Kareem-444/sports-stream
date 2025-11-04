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
  const [viewerCount, setViewerCount] = useState(142835);
  const [matchTime, setMatchTime] = useState("21:00");

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
                {/* PSG */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-red-800 rounded-2xl flex items-center justify-center shadow-xl p-3">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <circle cx="100" cy="100" r="90" fill="#004170"/>
                      <path d="M100 30 L130 70 L170 70 L140 100 L160 140 L100 110 L40 140 L60 100 L30 70 L70 70 Z" fill="#E30613"/>
                      <circle cx="100" cy="100" r="25" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">باريس سان جيرمان</h2>
                    <p className="text-slate-400 text-sm">فرنسا • البطل الحالي</p>
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

                {/* Bayern Munich */}
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white text-left">بايرن ميونخ</h2>
                    <p className="text-slate-400 text-sm text-left">ألمانيا • البافاري</p>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl p-2">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <circle cx="100" cy="100" r="90" fill="#DC052D"/>
                      <circle cx="100" cy="100" r="70" fill="white"/>
                      <circle cx="70" cy="80" r="20" fill="#0066B2"/>
                      <circle cx="130" cy="80" r="20" fill="#0066B2"/>
                      <circle cx="100" cy="120" r="20" fill="#0066B2"/>
                      <circle cx="85" cy="100" r="15" fill="#0066B2"/>
                      <circle cx="115" cy="100" r="15" fill="#0066B2"/>
                    </svg>
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
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">قمة أوروبية في حديقة الأمراء</h3>
                  <p className="text-slate-300 leading-relaxed text-base">
                    يستضيف ملعب حديقة الأمراء الأسطوري مواجهة نارية بين بطل دوري الأبطال الحالي باريس سان جيرمان وبايرن ميونخ الألماني في الجولة الرابعة من مرحلة المجموعات. الفريقان يتصدران ترتيب المجموعة برصيد 9 نقاط لكل منهما بعد 3 انتصارات متتالية، مما يجعل هذه المباراة حاسمة لتحديد الصدارة. بايرن ميونخ يدخل المباراة بسلسلة انتصارات مذهلة وصلت إلى 15 مباراة متتالية في جميع المسابقات، وهو رقم قياسي لأي فريق في الدوريات الأوروبية الخمسة الكبرى.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <h4 className="text-lg font-bold text-white">باريس سان جيرمان - البطل</h4>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      البطل الحالي لدوري الأبطال يسعى للانتقام من بايرن بعد خسارته أمامه في ربع نهائي كأس العالم للأندية الصيف الماضي. لويس إنريكي يعتمد على ثلاثي الهجوم الديناميكي كفاراتسخيليا، مايولو، وباركولا. أوسمان ديمبيلي جاهز للمشاركة بعد تعافيه من الإصابة. الفريق سجل 13 هدفاً في 3 مباريات بدوري الأبطال، أكثر من أي فريق آخر، ويمتلك دفاعاً قوياً بقيادة ماركينيوس وباتشو.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-950/60 text-blue-400 text-xs font-bold px-3 py-1 rounded-lg">الهجوم الساحق</span>
                      <span className="bg-blue-950/60 text-blue-400 text-xs font-bold px-3 py-1 rounded-lg">الاستحواذ العالي</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-red-400" />
                      <h4 className="text-lg font-bold text-white">بايرن ميونخ - البافاري</h4>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      الآلة البافارية لا تقهر هذا الموسم بقيادة فينسنت كومباني. فازوا بجميع مباريا تهم الـ15 في الموسم الحالي، وسجلوا 54 هدفاً، أكثر من أي فريق أوروبي. هاري كين في قمة عطائه برصيد 22 هدفاً في 15 مباراة، بينما يساهم لويس دياز وسيرج جنابري ومايكل أوليسيه في تشكيل خط هجوم مرعب. تاريخياً، بايرن فاز في 4 مواجهات متتالية أمام باريس في دوري الأبطال.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-950/60 text-red-400 text-xs font-bold px-3 py-1 rounded-lg">القوة الهجومية</span>
                      <span className="bg-red-950/60 text-red-400 text-xs font-bold px-3 py-1 rounded-lg">الانتصارات المتتالية</span>
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
                      <p className="text-slate-300"><span className="font-bold text-white">المواجهات المباشرة:</span> فاز بايرن في 8 مباريات من أصل 14 لقاء في دوري الأبطال، وخسر باريس 4 مباريات متتالية أمامهم</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                      <p className="text-slate-300"><span className="font-bold text-white">آخر مواجهة:</span> كأس العالم للأندية في يوليو 2025، فاز باريس 2-0 وهي آخر خسارة لبايرن حتى الآن</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                      <p className="text-slate-300"><span className="font-bold text-white">الأهمية التكتيكية:</span> لويس إنريكي (4-3-3) ضد فينسنت كومباني الذي حول بايرن لآلة هجومية لا تتوقف</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                      <p className="text-slate-300"><span className="font-bold text-white">النجوم البارزة:</span> هاري كين (22 هدفاً) ضد كفاراتسخيليا وديمبيلي - معركة الأهداف والإبداع</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-950/40 border border-red-700/30 text-red-400 text-xs font-bold px-4 py-2 rounded-lg">
                    🏆 دوري أبطال أوروبا
                  </span>
                  <span className="bg-emerald-950/40 border border-emerald-700/30 text-emerald-400 text-xs font-bold px-4 py-2 rounded-lg">
                    ⚽ حديقة الأمراء
                  </span>
                  <span className="bg-blue-950/40 border border-blue-700/30 text-blue-400 text-xs font-bold px-4 py-2 rounded-lg">
                    🔵 البطل الحالي
                  </span>
                  <span className="bg-purple-950/40 border border-purple-700/30 text-purple-400 text-xs font-bold px-4 py-2 rounded-lg">
                    🔴 البافاري
                  </span>
                  <span className="bg-amber-950/40 border border-amber-700/30 text-amber-400 text-xs font-bold px-4 py-2 rounded-lg">
                    ⭐ المتصدران
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
                    <span className="text-white font-bold">الجولة 4 - المجموعات</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">الملعب</span>
                    <span className="text-white font-bold">حديقة الأمراء</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">السعة</span>
                    <span className="text-white font-bold">48,583 متفرج</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">جودة البث</span>
                    <span className="text-emerald-400 font-bold">{quality}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400">المعلق</span>
                    <span className="text-white font-bold">عصام الشوالي</span>
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
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-red-800 rounded-lg flex items-center justify-center p-1">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="#004170"/>
                        <path d="M100 30 L130 70 L170 70 L140 100 L160 140 L100 110 L40 140 L60 100 L30 70 L70 70 Z" fill="#E30613"/>
                      </svg>
                    </div>
                    <span className="text-white font-bold text-sm">باريس سان جيرمان</span>
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
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                    <div className="flex-1 bg-slate-600/20 border border-slate-600/30 rounded-lg py-2 text-center">
                      <span className="text-slate-400 font-bold text-xs">تعادل</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-700/30"></div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="#DC052D"/>
                        <circle cx="100" cy="100" r="70" fill="white"/>
                        <circle cx="70" cy="80" r="20" fill="#0066B2"/>
                        <circle cx="130" cy="80" r="20" fill="#0066B2"/>
                        <circle cx="100" cy="120" r="20" fill="#0066B2"/>
                      </svg>
                    </div>
                    <span className="text-white font-bold text-sm">بايرن ميونخ</span>
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
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
                    </div>
                    <div className="flex-1 bg-emerald-600/20 border border-emerald-600/30 rounded-lg py-2 text-center">
                      <span className="text-emerald-400 font-bold text-xs">فوز</span>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-red-800 rounded-lg flex items-center justify-center p-1.5">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="#004170"/>
                        <circle cx="100" cy="100" r="40" fill="#E30613"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">خفيشا كفاراتسخيليا</div>
                      <div className="text-slate-400 text-xs">جناح أيسر - باريس</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">أهداف:</span>
                      <span className="text-white font-bold">11</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">تمريرات:</span>
                      <span className="text-white font-bold">7</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-red-800 rounded-lg flex items-center justify-center p-1.5">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="#004170"/>
                        <circle cx="100" cy="100" r="40" fill="#E30613"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">أوسمان ديمبيلي</div>
                      <div className="text-slate-400 text-xs">جناح أيمن - باريس</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">أهداف:</span>
                      <span className="text-white font-bold">8</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">تمريرات:</span>
                      <span className="text-white font-bold">9</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="#DC052D"/>
                        <circle cx="100" cy="100" r="40" fill="#0066B2"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">هاري كين</div>
                      <div className="text-slate-400 text-xs">مهاجم - بايرن</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">أهداف:</span>
                      <span className="text-white font-bold">22</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">تمريرات:</span>
                      <span className="text-white font-bold">11</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="#DC052D"/>
                        <circle cx="100" cy="100" r="40" fill="#0066B2"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">مايكل أوليسيه</div>
                      <div className="text-slate-400 text-xs">جناح - بايرن</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">أهداف:</span>
                      <span className="text-white font-bold">9</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">تمريرات:</span>
                      <span className="text-white font-bold">8</span>
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
                    <span className="text-slate-400">فوز باريس سان جيرمان</span>
                    <span className="text-white font-bold">35%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{width: '35%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-slate-400">التعادل</span>
                    <span className="text-white font-bold">20%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-slate-500 to-slate-600" style={{width: '20%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-slate-400">فوز بايرن ميونخ</span>
                    <span className="text-white font-bold">45%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-red-600" style={{width: '45%'}}></div>
                  </div>
                </div>

                <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30 mt-4">
                  <h4 className="text-white font-bold text-sm mb-2">التوقعات الإحصائية</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">احتمال أكثر من 2.5 هدف</span>
                      <span className="text-emerald-400 font-bold">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">احتمال تسجيل الفريقين</span>
                      <span className="text-emerald-400 font-bold">71%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">متوسط الأهداف المتوقعة</span>
                      <span className="text-white font-bold">3.2 هدف</span>
                    </div>
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