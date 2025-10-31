"use client";

import { useEffect, useRef, useState } from 'react';
import type Hls from 'hls.js';
import { 
  ArrowLeft, Users, Wifi, WifiOff, Settings, Volume2, VolumeX, 
  Maximize, Minimize, Play, Pause, SkipBack, SkipForward,
  MessageSquare, ThumbsUp, Share2, Bookmark, MoreVertical,
  TrendingUp, Clock, Eye, Signal, Download, Cast, Radio
} from 'lucide-react';

type QualityLevel = 'auto' | '1080p' | '720p' | '480p' | '360p';

export default function LiveStreamViewer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState<QualityLevel>('auto');
  const [volume, setVolume] = useState(100);
  const [viewerCount, setViewerCount] = useState("1.2M");
  const [likes, setLikes] = useState(45200);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [showControls, setShowControls] = useState(true);
  const [bitrate, setBitrate] = useState("5.2 Mbps");
  const [latency] = useState("2.3s");

  // Different test stream - Sintel movie stream
  const streamUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadStream = async () => {
      try {
        if (typeof window !== 'undefined') {
          const Hls = (await import('hls.js')).default;
          
          if (Hls.isSupported()) {
            const hls = new Hls({
              enableWorker: true,
              lowLatencyMode: true,
              maxBufferLength: 30,
              maxMaxBufferLength: 60,
            });
            
            hlsRef.current = hls;
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
            
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              setIsLoading(false);
              video.play().catch(e => console.log('Autoplay prevented:', e));
              setIsPlaying(true);
              
              // Simulate viewer count updates
              const viewerInterval = setInterval(() => {
                const randomChange = Math.floor(Math.random() * 1000) - 500;
                setViewerCount(prev => {
                  const numViewers = parseFloat(prev) * 1000000 + randomChange;
                  return (numViewers / 1000000).toFixed(1) + "M";
                });
              }, 5000);

              return () => clearInterval(viewerInterval);
            });
            
            hls.on(Hls.Events.LEVEL_SWITCHED, (_event, data) => {
              const level = hls.levels[data.level];
              if (level) {
                setBitrate(`${(level.bitrate / 1000000).toFixed(1)} Mbps`);
              }
            });
            
            hls.on(Hls.Events.ERROR, (_event, data) => {
              if (data.fatal) {
                setHasError(true);
                setIsLoading(false);
                console.error('HLS Error:', data);
              }
            });
            
            return () => {
              hls.destroy();
            };
          } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = streamUrl;
            video.addEventListener('loadedmetadata', () => {
              setIsLoading(false);
            });
            video.addEventListener('error', () => {
              setHasError(true);
              setIsLoading(false);
            });
          } else {
            setHasError(true);
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error('Error loading stream:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadStream();

    // Time update listener
    const handleTimeUpdate = () => {
      const minutes = Math.floor(video.currentTime / 60);
      const seconds = Math.floor(video.currentTime % 60);
      setCurrentTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [streamUrl]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (newVolume: number) => {
    const video = videoRef.current;
    if (!video) return;
    
    setVolume(newVolume);
    video.volume = newVolume / 100;
    if (newVolume === 0) {
      setIsMuted(true);
      video.muted = true;
    } else {
      setIsMuted(false);
      video.muted = false;
    }
  };

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

  const handleQualityChange = (quality: QualityLevel) => {
    setSelectedQuality(quality);
    const hls = hlsRef.current;
    
    if (hls && hls.levels) {
      if (quality === 'auto') {
        hls.currentLevel = -1; // Auto quality
      } else {
        const targetHeight = parseInt(quality);
        const levelIndex = hls.levels.findIndex((level) => level.height === targetHeight);
        if (levelIndex !== -1) {
          hls.currentLevel = levelIndex;
        }
      }
    }
    setShowSettings(false);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const skipTime = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime += seconds;
  };

  return (
    <div className="min-h-screen bg-[#0a0f0a]">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="bg-gray-800/50 group-hover:bg-gray-700/50 rounded-lg p-2 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="font-semibold hidden sm:block">Back to Home</span>
              </button>
              
              <div className="h-8 w-px bg-gray-700"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Radio className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <div className="text-sm text-gray-400">Streaming on</div>
                  <div className="text-white font-semibold">SportsStream Premium</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-red-600/90 rounded-lg px-4 py-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-bold uppercase">Live</span>
              </div>
              
              <div className="hidden sm:flex items-center gap-2 bg-slate-800/50 border border-gray-700/50 rounded-lg px-4 py-2">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-semibold">{viewerCount}</span>
              </div>

              <button className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                <Cast className="w-4 h-4" />
                <span>Cast</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Video Player - Takes 3 columns */}
          <div className="lg:col-span-3">
            {/* Enhanced Video Player */}
            <div 
              ref={containerRef}
              className="relative bg-gradient-to-br from-slate-900/90 to-gray-900/90 rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Stream Info Bar */}
              <div className="bg-slate-900/50 backdrop-blur-sm border-b border-gray-800/50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/30 rounded-lg px-3 py-1.5">
                      <span className="text-emerald-400 text-sm font-bold uppercase">UEFA Champions League</span>
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold text-white">Real Madrid vs Barcelona</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-2 bg-slate-800/50 border border-gray-700/50 rounded-lg px-3 py-1.5">
                      <Signal className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-gray-300 font-medium">{bitrate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Container with Advanced Controls */}
              <div className="relative aspect-video bg-black group">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
                      <div className="absolute inset-0 w-20 h-20 border-4 border-green-500/20 border-b-green-500 rounded-full animate-spin animation-delay-150"></div>
                    </div>
                    <p className="text-gray-400 font-semibold text-lg">Connecting to stream...</p>
                    <p className="text-gray-600 text-sm mt-2">Optimizing quality for your connection</p>
                  </div>
                )}

                {hasError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20">
                    <WifiOff className="w-20 h-20 text-red-500 mb-4" />
                    <p className="text-red-400 text-xl font-semibold mb-2">Unable to load stream</p>
                    <p className="text-gray-500 text-sm mb-4">Please check your connection and try again</p>
                    <button 
                      onClick={() => window.location.reload()}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                    >
                      Retry Connection
                    </button>
                  </div>
                )}

                <video
                  ref={videoRef}
                  className="w-full h-full"
                  playsInline
                />

                {/* Custom Video Controls Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'} z-10`}>
                  {/* Top Controls */}
                  <div className="absolute top-0 left-0 right-0 p-6 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-600/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white text-xs font-bold uppercase">Live</span>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                        <span className="text-white text-xs font-semibold">{currentTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-400" />
                        <span className="text-white text-xs font-semibold">{viewerCount}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Play Button */}
                  {!isPlaying && !isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={togglePlay}
                        className="bg-emerald-600/90 backdrop-blur-sm hover:bg-emerald-500 text-white rounded-full p-6 transition-all hover:scale-110 shadow-2xl"
                      >
                        <Play className="w-12 h-12" fill="currentColor" />
                      </button>
                    </div>
                  )}

                  {/* Bottom Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-3">
                      {/* Progress Bar */}
                      <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500" style={{ width: '45%' }}></div>
                      </div>

                      {/* Control Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Play/Pause */}
                          <button
                            onClick={togglePlay}
                            className="text-white hover:text-emerald-400 transition-colors"
                          >
                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" fill="currentColor" />}
                          </button>

                          {/* Skip Buttons */}
                          <button
                            onClick={() => skipTime(-10)}
                            className="text-white hover:text-emerald-400 transition-colors"
                          >
                            <SkipBack className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => skipTime(10)}
                            className="text-white hover:text-emerald-400 transition-colors"
                          >
                            <SkipForward className="w-5 h-5" />
                          </button>

                          {/* Volume Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={toggleMute}
                              className="text-white hover:text-emerald-400 transition-colors"
                            >
                              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={volume}
                              onChange={(e) => handleVolumeChange(Number(e.target.value))}
                              className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500"
                            />
                          </div>

                          {/* Quality Badge */}
                          <div className="hidden sm:block bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                            <span className="text-emerald-400 text-xs font-bold">{selectedQuality === 'auto' ? 'AUTO' : selectedQuality}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Settings Button with Dropdown */}
                          <div className="relative">
                            <button
                              onClick={() => setShowSettings(!showSettings)}
                              className="text-white hover:text-emerald-400 transition-colors"
                            >
                              <Settings className="w-5 h-5" />
                            </button>

                            {/* Quality Settings Dropdown */}
                            {showSettings && (
                              <div className="absolute bottom-full right-0 mb-2 bg-slate-900/95 backdrop-blur-xl border border-gray-700 rounded-xl p-3 min-w-[200px] shadow-2xl">
                                <div className="text-white font-semibold text-sm mb-3 px-2">Quality Settings</div>
                                <div className="space-y-1">
                                  {(['auto', '1080p', '720p', '480p', '360p'] as QualityLevel[]).map((quality) => (
                                    <button
                                      key={quality}
                                      onClick={() => handleQualityChange(quality)}
                                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                        selectedQuality === quality
                                          ? 'bg-emerald-600 text-white font-semibold'
                                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                      }`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span>{quality === 'auto' ? 'Auto (Recommended)' : quality}</span>
                                        {selectedQuality === quality && (
                                          <div className="w-2 h-2 bg-white rounded-full"></div>
                                        )}
                                      </div>
                                      {quality === 'auto' && (
                                        <div className="text-xs text-emerald-300 mt-1">Adapts to your connection</div>
                                      )}
                                    </button>
                                  ))}
                                </div>
                                <div className="mt-3 pt-3 border-t border-gray-700">
                                  <div className="flex items-center justify-between text-xs text-gray-400 px-2">
                                    <span>Current: {bitrate}</span>
                                    <span>Latency: {latency}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Fullscreen Button */}
                          <button
                            onClick={toggleFullscreen}
                            className="text-white hover:text-emerald-400 transition-colors"
                          >
                            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stream Stats Bar */}
              <div className="bg-slate-900/50 backdrop-blur-sm px-6 py-4 border-t border-gray-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Wifi className="w-4 h-4 text-emerald-400" />
                      <span className="font-medium">HD Quality</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>20:45 GMT</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Trending #1</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                        isLiked
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} />
                      <span className="text-sm">{(likes / 1000).toFixed(1)}K</span>
                    </button>
                    
                    <button className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg font-semibold transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm hidden sm:inline">Share</span>
                    </button>
                    
                    <button className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 p-2 rounded-lg transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    
                    <button className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 p-2 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Information */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {/* Description */}
              <div className="bg-gradient-to-br from-slate-900/70 to-gray-900/70 rounded-2xl border border-gray-800/50 p-6">
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  Match Details
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Experience the ultimate football rivalry as Real Madrid takes on Barcelona in this historic UEFA Champions League clash. 
                  Watch every moment in stunning 4K quality with expert commentary and real-time statistics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-950/50 border border-emerald-800/30 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    Football
                  </span>
                  <span className="bg-emerald-950/50 border border-emerald-800/30 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    UEFA Champions League
                  </span>
                  <span className="bg-emerald-950/50 border border-emerald-800/30 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    4K HDR
                  </span>
                  <span className="bg-amber-950/50 border border-amber-800/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    Premium
                  </span>
                </div>
              </div>

              {/* Live Stats */}
              <div className="bg-gradient-to-br from-slate-900/70 to-gray-900/70 rounded-2xl border border-gray-800/50 p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Live Statistics
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Current Viewers</span>
                    <span className="text-white font-bold">{viewerCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Peak Viewers</span>
                    <span className="text-white font-bold">2.8M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Stream Quality</span>
                    <span className="text-emerald-400 font-bold">{selectedQuality === 'auto' ? 'AUTO' : selectedQuality}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Bitrate</span>
                    <span className="text-white font-bold">{bitrate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Latency</span>
                    <span className="text-white font-bold">{latency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Live Chat */}
            <div className="bg-gradient-to-br from-slate-900/70 to-gray-900/70 rounded-2xl border border-gray-800/50 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  Live Chat
                </h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">24.5K online</span>
                </div>
              </div>
              
              <div className="bg-slate-950/50 rounded-xl p-4 min-h-[500px] max-h-[500px] overflow-y-auto space-y-3">
                {/* Sample Chat Messages */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">JD</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-semibold">JohnDoe</span>
                      <span className="text-xs text-gray-500">2m ago</span>
                    </div>
                    <p className="text-gray-300 text-sm">What a goal! 🔥</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">SF</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-semibold">SportsFan</span>
                      <span className="text-xs text-gray-500">3m ago</span>
                    </div>
                    <p className="text-gray-300 text-sm">Best match of the season!</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">MB</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-semibold">MadridBarca</span>
                      <span className="text-xs text-gray-500">5m ago</span>
                    </div>
                    <p className="text-gray-300 text-sm">Stream quality is amazing! 👍</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-8">
                  <p className="text-gray-500 text-sm text-center">
                    Chat will be available soon<br/>
                    <span className="text-xs">Join the conversation with millions of fans</span>
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Send a message..."
                  disabled
                  className="w-full bg-slate-950/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-slate-900/70 to-gray-900/70 rounded-2xl border border-gray-800/50 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-3 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold">Download Highlights</span>
                </button>
                <button className="w-full flex items-center gap-3 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-3 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold">Share Stream</span>
                </button>
                <button className="w-full flex items-center gap-3 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-3 rounded-lg transition-colors">
                  <Bookmark className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold">Save to Favorites</span>
                </button>
              </div>
            </div>

            {/* Related Streams */}
            <div className="bg-gradient-to-br from-slate-900/70 to-gray-900/70 rounded-2xl border border-gray-800/50 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Related Streams</h3>
              <div className="space-y-3">
                <button className="block group w-full text-left">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-gray-900"></div>
                    <div className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-bold text-white">
                      LIVE
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-10 h-10 text-white/50" />
                    </div>
                  </div>
                  <h4 className="text-white text-sm font-semibold group-hover:text-emerald-400 transition-colors">
                    Team A vs Team B
                  </h4>
                  <p className="text-gray-400 text-xs">Premier League • 500K viewers</p>
                </button>

                <div className="block">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-gray-900"></div>
                    <div className="absolute top-2 left-2 bg-gray-600/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-bold text-white">
                      UPCOMING
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clock className="w-10 h-10 text-white/50" />
                    </div>
                  </div>
                  <h4 className="text-white text-sm font-semibold">
                    Lakers vs Bulls
                  </h4>
                  <p className="text-gray-400 text-xs">NBA Finals • Starts in 2h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-[#0a0f0a]/80 backdrop-blur-xl mt-12">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">© 2024 SportsStream Premium. All rights reserved.</p>
              <p className="text-gray-600 text-xs mt-1">Experience sports like never before</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </button>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </button>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Help
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}