import React, { useState } from 'react';
import coverPhoto from '../assets/images/coverphoto.png';
import video1 from '../assets/videos/foodvideo1.mp4';
import video2 from '../assets/videos/foodvideo2.mp4';
import '../App.css';

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src={coverPhoto} alt="Food Gallery" className="hero-cover" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <p className="hero-tag">Premium Selection</p>
        <h1 className="hero-title">
          Food Gallery
          <span className="hero-subtitle-script">by Bakery Honey</span>
        </h1>
        <p className="hero-desc">დაბალანსებული კვება ხელმისაწვდომ ფასად</p>
        <div className="hero-btns">
          <a href="#menu" className="btn-primary">იხილე მენიუ</a>
          <a href="#contact" className="btn-secondary">დაგვიკავშირდი</a>
        </div>
      </div>

      <div className="hero-videos">
        <p className="videos-label">ჩვენი გალერეიდან</p>
        <div className="video-thumbnails">
          <div className="video-thumb" onClick={() => setActiveVideo(video1)}>
            <video src={video1} muted playsInline />
            <div className="play-icon">▶</div>
          </div>
          <div className="video-thumb" onClick={() => setActiveVideo(video2)}>
            <video src={video2} muted playsInline />
            <div className="play-icon">▶</div>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="modal-inner" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveVideo(null)}>✕</button>
            <video src={activeVideo} controls autoPlay className="modal-video" />
          </div>
        </div>
      )}

      <div className="hero-scroll">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;