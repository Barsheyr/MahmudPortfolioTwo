import React, { useState } from "react";
import AerVideo from "../assets/aer-videonew.mp4";

const Videocomponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black">
      <div className="relative">
        <video ref={videoRef} className="" src={AerVideo} controls={false} />
        <button
          onClick={handlePlay}
          className="inset-0 flex bg-red-500 items-center justify-center bg-opacity-50 rounded-lg text-white text-md"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default Videocomponent;
