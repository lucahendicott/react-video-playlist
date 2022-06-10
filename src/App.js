import "./App.css";
import React, { useState } from "react";

const data = {
  tutorialVideos: [
    {
      id: 1,
      title: "RightOn! Overview",
      src: "https://www.youtube.com/embed/sUlnToE2bqQ",
    },
    {
      id: 2,
      title: "Host & Display Overview",
      src: "https://www.youtube.com/embed/IcrEa8pa0K8",
    },
  ],
};

function App() {
  const [currentVideo, setCurrentVideo] = useState(
    data.tutorialVideos[0].src,
    data.tutorialVideos[0].title
  );

  const handleClick1 = () => {
    setCurrentVideo(data.tutorialVideos[0].src, data.tutorialVideos[0].title);
  };
  const handleClick2 = () => {
    setCurrentVideo(data.tutorialVideos[1].src, data.tutorialVideos[1].title);
  };

  return (
    <div>
      <div className="tutorial-video-panel">
        <h4 className="tutorial-videos-header-text">Tutorial Videos</h4>
        <div className="tutorial-videos-panel">
          <button
            onClick={() => handleClick1()}
            className="tutorial-videos-text"
          >
            {data.tutorialVideos[0].title}
          </button>
          <br />
          <br />
          <button
            onClick={() => handleClick2()}
            className="tutorial-videos-text"
          >
            {data.tutorialVideos[1].title}
          </button>
        </div>
      </div>
      <br />
      <br />
      <iframe
        width="860"
        height="483"
        src={currentVideo}
        title={currentVideo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
