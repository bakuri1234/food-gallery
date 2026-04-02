import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <p className="section-subtitle">დაგვიკავშირდი</p>
          <h2 className="section-title" style={{color: 'var(--cream)'}}>კონტაქტი</h2>
          <div className="section-divider" style={{margin: '1.5rem 0'}}></div>

          <div className="contact-items">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <span className="contact-label">მისამართი</span>
                <span className="contact-value">თავისუფლების 106, ქუთაისი, 4600</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <span className="contact-label">ტელეფონი</span>
                <a href="tel:550501717" className="contact-value contact-link">550 50 17 17</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <span className="contact-label">სამუშაო საათები</span>
                <span className="contact-value">ყოველდღე · ღიაა</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://instagram.com/food_gallery_georgia"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Food Gallery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.0!2d42.7!3d42.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE1JzM2LjAiTiA0MsKwNDInMDAuMCJF!5e0!3m2!1sen!2sge!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Food Gallery by Bakery Honey · ყველა უფლება დაცულია</p>
      </div>
    </section>
  );
};

export default Contact;