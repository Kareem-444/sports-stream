"use client";

import { useRef, useState, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, Settings, Signal
} from 'lucide-react';

export default function MobileLiveStreamViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [quality, setQuality] = useState("1080p");
  const [showQualityMenu, setShowQualityMenu] = useState(false);

  const streamUrl = "https://shoofkoora.live/albaplayer/thmanyah-1/?serv=0";

  // Auto-hide controls after 3 seconds
  useEffect(() => {
    if (showControls) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showControls]);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
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
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    setVolume(isMuted ? 80 : 0);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleContainerClick = () => {
    setShowControls(!showControls);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
      onClick={handleContainerClick}
    >
      {/* Video Player */}
      <div className="relative w-full h-full">
        <iframe
          ref={iframeRef}
          src={streamUrl}
          className="absolute inset-0 w-full h-full pointer-events-none"
          allowFullScreen
          frameBorder="0"
          scrolling="no"
          title="Live Stream"
          allow="autoplay; fullscreen; picture-in-picture"
          sandbox="allow-scripts allow-same-origin"
        />
        
        {/* Transparent overlay to prevent iframe clicks */}
        <div 
          className="absolute inset-0 z-10"
          style={{ background: 'transparent' }}
        />
        
        {/* Controls Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 transition-opacity duration-300 pointer-events-none z-20 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 md:p-6 pointer-events-auto">
            <div className="flex items-center justify-between">
              <div className="bg-red-600/90 backdrop-blur-md rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 border border-red-500/30">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-xs sm:text-sm font-bold">بث مباشر</span>
              </div>
              <div className="bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 border border-slate-600/30">
                <span className="text-white text-xs sm:text-sm font-bold">دوري أبطال أوروبا</span>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 pointer-events-auto">
            <div className="bg-black/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-slate-600/30">
              {/* Progress Bar */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex-1 h-1.5 sm:h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 via-red-600 to-emerald-500 w-full"></div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="hidden sm:inline">مباشر</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between gap-2">
                {/* Left Controls */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Play className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                    )}
                  </button>

                  {/* Volume Controls */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </button>
                    
                    {/* Volume Slider - Hidden on mobile */}
                    <div className="hidden sm:flex items-center gap-2 md:gap-3 bg-white/5 rounded-lg px-3 py-1.5 md:px-4 md:py-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        onClick={(e) => e.stopPropagation()}
                        className="w-16 md:w-24 h-1.5 md:h-2 bg-slate-600/50 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 md:[&::-webkit-slider-thumb]:w-4 md:[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:cursor-pointer"
                      />
                      <span className="text-white text-xs md:text-sm font-bold min-w-[2.5rem]">{volume}%</span>
                    </div>
                  </div>

                  {/* Quality Menu */}
                  <div className="relative hidden sm:block">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowQualityMenu(!showQualityMenu);
                      }}
                      className="flex items-center gap-1.5 sm:gap-2 bg-slate-800/50 border border-slate-700/30 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 text-emerald-400 text-xs sm:text-sm font-bold hover:bg-slate-700/50 transition-all"
                    >
                      <Signal className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden md:inline">{quality}</span>
                    </button>
                    
                    {showQualityMenu && (
                      <div className="absolute bottom-full mb-2 left-0 bg-black/95 backdrop-blur-xl rounded-xl border border-slate-600/50 overflow-hidden min-w-[120px] sm:min-w-[150px] z-50">
                        {['1080p', '720p', '480p', '360p', 'تلقائي'].map((q) => (
                          <button
                            key={q}
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuality(q);
                              setShowQualityMenu(false);
                            }}
                            className={`w-full text-right px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold transition-all ${
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

                {/* Right Controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1 hidden sm:block"
                  >
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFullscreen();
                    }}
                    className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1"
                  >
                    {isFullscreen ? (
                      <Minimize className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Maximize className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}