import { useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "./Intro.css";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
    console.log(playVideo);
  };
  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <FaPlay color="#fff" fontSize={30} />
          ) : (
            <FaPause color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
