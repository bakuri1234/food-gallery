import React, { useState } from 'react';
import fp1 from '../assets/images/foodphoto1.jpg';
import fp2 from '../assets/images/foodphoto2.jpg';
import fp3 from '../assets/images/foodphoto3.jpg';
import fp4 from '../assets/images/foodphoto4.jpg';
import tk1 from '../assets/images/tkbileuli1.jpg';
import tk2 from '../assets/images/tkbileuli2.jpg';
import tk3 from '../assets/images/tkbileuli3.jpg';
import tk4 from '../assets/images/tkbileuli4.jpg';
import tk5 from '../assets/images/tkbileuli5.jpg';
import '../App.css';

const photos = [
  { src: fp1, label: 'ბრუსკეტები' },
  { src: fp2, label: 'სალათები' },
  { src: fp3, label: 'Chia Pudding' },
  { src: fp4, label: 'სალმონი' },
  { src: tk1, label: 'პასკა ნუშით' },
  { src: tk2, label: 'პასკა კარამელით' },
  { src: tk3, label: 'პასკა შოკოლადით' },
  { src: tk4, label: 'პასკა ფისტით' },
  { src: tk5, label: 'პასკა ბეჟეთი' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <p className="section-subtitle">გემოთა სამყარო</p>
        <h2 className="section-title">გალერეა</h2>
        <div className="section-divider"></div>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`gallery-item item-${i}`}
            onClick={() => setLightbox(photo)}
          >
            <img src={photo.src} alt={photo.label} />
            <div className="gallery-overlay">
              <span>{photo.label}</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.src} alt={lightbox.label} />
            <p>{lightbox.label}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;