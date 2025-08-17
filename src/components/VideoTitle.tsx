import React from 'react';

const VideoTitle = () => {
  return (
    <h1 className="font-sans font-black text-center flex flex-wrap justify-center items-center gap-x-[.20em] p-1 text-[clamp(1rem,8vw,20rem)] leading-none">
      <span>MASTERING</span>
      <video
        className="w-[1.5em] sm:w-[1.5em] md:w-[1.5em] h-auto rounded-md align-middle"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videoTitle1.mp4" type="video/mp4" />
      </video>
      <span>THE</span>

       {/* Force line break to keep exactly two lines */}
      <span className="basis-full w-full h-0" aria-hidden="true" />
      
      <span>ART</span>
      <video
        className="w-[1.5em] sm:w-[1.5em] md:w-[1.5em] h-auto rounded-md align-middle"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videoTitle2.mp4" type="video/mp4" />
      </video>
      <span>OF CODE</span>
    </h1>
  );
};

export default VideoTitle;
