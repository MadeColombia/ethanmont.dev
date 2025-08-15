import React from 'react';

const VideoTitle = () => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
      <span>Mastering</span>
      <video
        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto rounded-md"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>
      <span>the art</span>
      <video
        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto rounded-md"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video2.mp4" type="video/mp4" />
      </video>
      <span>of code</span>
    </h1>
  );
};

export default VideoTitle;
