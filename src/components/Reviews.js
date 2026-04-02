import React from 'react';
import '../App.css';

const reviews = [
  {
    name: 'მარიამ გ.',
    text: 'საოცარი ადგილი! კვება ძალიან გემრიელი და ჯანსაღია, ფასებიც ხელმისაწვდომია. ყოველ კვირა ახალ მენიუს ველოდები!',
    stars: 5,
    platform: 'Facebook',
  },
  {
    name: 'გიორგი მ.',
    text: 'Food Gallery-ი ჩემი საყვარელი ადგილია ქუთაისში. ყოველ დღე სხვადასხვა კერძი — ეს ნამდვილად გასაოცარია.',
    stars: 5,
    platform: 'Facebook',
  },
  {
    name: 'ნინო ბ.',
    text: 'პასკები ახსოვს! ფისტის და შოკოლადის — ორივე უგემრიელესი. ნამდვილი ხელოვნება საკვებში.',
    stars: 5,
    platform: 'Facebook',
  },
];

const Stars = ({ count }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews-header">
        <p className="section-subtitle">მომხმარებლები ამბობენ</p>
        <h2 className="section-title">რევიუები</h2>
        <div className="section-divider"></div>

        <div className="rating-badge">
          <span className="rating-num">5.0</span>
          <Stars count={5} />
          <span className="rating-label">Facebook · 7 რევიუ</span>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <Stars count={r.stars} />
            <p className="review-text">"{r.text}"</p>
            <div className="review-footer">
              <span className="review-name">{r.name}</span>
              <span className="review-platform">{r.platform}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;