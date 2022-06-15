import "./App.css";
import React, { useState } from "react";

const videoData = {
  tutorialVideos: [
    {
      id: 1,
      title: "Disappointment",
      src: "https://www.youtube.com/embed/wqlZ0mLgDzk",
    },
    {
      id: 2,
      title: "Computer Chronicles: Laptops?",
      src: "https://www.youtube.com/embed/zRCBepOHaYk",
    },
    {
      id: 3,
      title: "Tkay Maidza <3",
      src: "https://www.youtube.com/embed/i-AiWZOkpHA",
    },
    {
      id: 4,
      title: "This Code Tho",
      src: "https://www.youtube.com/embed/mqFLXayD6e8",
    },
    {
      id: 5,
      title: "Bless It",
      src: "https://www.youtube.com/embed/ts0vYOVRkj8",
    },
  ],
};

function App() {
  const { tutorialVideos } = videoData;
  const [currentVideo, setCurrentVideo] = useState(videoData.tutorialVideos[0]);

  const handleVideoClick = (vid) => {
    setCurrentVideo(vid);
  };

  const videoLink = tutorialVideos.map((video, index) => (
    <button
      className="video-buttons"
      onClick={() => handleVideoClick(video)}
      key={index}
    >
      {video.title}
    </button>
  ));

  return (
    <div className="App">
      <div className="tutorial-video-panel">
        <h1 className="tutorial-videos-header-text">Some Vids I Luv</h1>

        <div className="tutorial-videos-panel">{videoLink}</div>
        <br />
      </div>
      <div>
        <iframe
          className="tutorial-video-iframe"
          width="860"
          height="483"
          src={currentVideo.src}
          title={currentVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
