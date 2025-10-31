// app/video/page.tsx
// This is an example page in Next.js App Router using TypeScript.
// Adjust the path as needed (e.g., app/[your-path]/page.tsx).
// Make sure to install any necessary dependencies if using additional features.

import React from 'react';

const VideoPage: React.FC = () => {
  // Replace 'your-video-url.mp4' with the actual source URL of your broadcast/video.
  // If it's a live stream (e.g., HLS), use a compatible player like video.js or hls.js.
  const videoSrc = 'your-video-url.mp4'; // Example: HTTPS URL to MP4 or stream manifest.

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <video
        playsInline // Autoplay inline on mobile
        className="player-no-controls group-data-[theatre=true]/main:h-xvh group-data-[theatre=true]/main:max-h-xvh h-full w-full outline-none"
        id="video-player"
        controls={false} // No controls as per your example; set to true if needed
        autoPlay // Optional: Autoplay the video
        muted // Optional: Mute by default for autoplay compliance
        loop // Optional: Loop the video
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;