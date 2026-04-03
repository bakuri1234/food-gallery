import React from 'react';
import '../App.css';

const branches = [
  'თბილისი',
  'ქუთაისი',
  'ბათუმი',
  'რუსთავი',
  'ზუგდიდი',
  'ქობულეთი',
  'ფოთი',
];

const Branches = () => {
  return (
    <section className="branches" id="branches">
      <div className="branches-header">
        <p className="section-subtitle">ჩვენი მდებარეობები</p>
        <h2 className="section-title">ფილიალები</h2>
        <div className="section-divider"></div>
        <p className="branches-desc">Food Gallery გხვდებათ საქართველოს 7 ქალაქში</p>
      </div>

      <div className="branches-grid">
        {branches.map((city, i) => (
          <div key={i} className="branch-card">
            <span className="branch-city">{city}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;