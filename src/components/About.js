import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-text">
          <p className="section-subtitle">ჩვენს შესახებ</p>
          <h2 className="section-title">Food Gallery<br /><em>by Bakery Honey</em></h2>
          <div className="section-divider" style={{margin: '1.5rem 0'}}></div>
          <p className="about-desc">
            Food Gallery — ადგილი, სადაც ჯანსაღი კვება ხვდება გემოვნებასა და ხელოვნებას.
            ჩვენ გთავაზობთ დაბალანსებულ, სუფთა და გემრიელ კვებას ხელმისაწვდომ ფასად.
          </p>
          <p className="about-desc">
            ჩვენი მენიუ ყოველ კვირა განახლდება — ახალი, სეზონური პროდუქტებით შექმნილი კერძებით,
            რომლებიც ამავდროულად ესთეტიურია და სასარგებლო.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">7</span>
              <span className="stat-label">ფილიალი</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">5★</span>
              <span className="stat-label">რეიტინგი</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">9.7K</span>
              <span className="stat-label">გამომწერი</span>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-badge">
            <span>Premium</span>
            <span>Selection</span>
          </div>
          <div className="about-quote">
            <p>"Start the morning deliciously"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;