import React, { useState } from 'react';
import m10 from '../assets/images/menu.jpg';
import m11 from '../assets/images/menu2.jpg';
import m12 from '../assets/images/menu3.jpg';
import m13 from '../assets/images/menu4.jpg';
import m14 from '../assets/images/menu5.jpg';
import m15 from '../assets/images/menu6.jpg';
import m16 from '../assets/images/menu7.jpg';
import '../App.css';
 
const days = [
  {
    day: 'ორშაბათი',
    img: m10,
    items: [
      { time: 'საუზმე', dish: 'შაქშუქა, ფეტა და მრავალმარცვლოვანი პური' },
      { time: 'ლანჩი', dish: 'ავოკადოს სალათი გრილზე გამომცხვარ ქათამთან ერთად, თაფლის სოუსით' },
      { time: 'სადილი', dish: 'წითელი ორაგული თაფლის და მდოგვის გლაზურით სატაცურთან ერთად ყავისფერი ბრინჯის გარნირით' },
      { time: 'ვახშამი', dish: 'რიკოტა ნიგვზით და დარიჩინით' },
      { time: 'დეტოქსი', dish: 'ლიმონი, ჯინჯერი და პიტნა' },
    ]
  },
  {
    day: 'სამშაბათი',
    img: m11,
    items: [
      { time: 'საუზმე', dish: 'პროტეინ პანქეიქები შვრიის ფქვილით და კენკრის სოუსით' },
      { time: 'ლანჩი', dish: 'ნიგვზის სალათი თინუსით' },
      { time: 'სადილი', dish: 'ინდაური თეთრი ღვილის სოუსში კუსკუსის გარნირით და ბეიბი ბოსტნეულით' },
      { time: 'ვახშამი', dish: 'ბერძნული იოგურტი თაფლით და ფისტით' },
      { time: 'დეტოქსი', dish: 'მწვანე ჩაი ლიმნით' },
    ]
  },
  {
    day: 'ოთხშაბათი',
    img: m12,
    items: [
      { time: 'საუზმე', dish: 'კვერცხი ბენედიქტი ავოკადოთი და ჰოლანდიური სოუსით' },
      { time: 'ლანჩი', dish: 'ხმელთაშუაბჭვის სალათი ჰალუმით და გრილზე შემწვარი ყველით' },
      { time: 'სადილი', dish: 'საქონლის სტეიკი წიწაკის სოუსით და ბატატის გარნირით' },
      { time: 'ვახშამი', dish: 'პროტეინ ბარი თაფლით და ნუშით' },
      { time: 'დეტოქსი', dish: 'კიტრი, პიტნა, ყვავი' },
    ]
  },
  {
    day: 'ხუთშაბათი',
    img: m13,
    items: [
      { time: 'საუზმე', dish: 'ჩია პუდინგი კოქოსის რძით მანგოს პიურესთან ერთად' },
      { time: 'ლანჩი', dish: 'ქათმის ცეზარი ბერძნული იოგურტის დრესინგით' },
      { time: 'სადილი', dish: 'ორაგული ტერიაქის სოუსით ბროკოლის და კინოას გარნირთან ერთად' },
      { time: 'ვახშამი', dish: 'ომლეტი სოკოთი და ტრუფელის სოუსით' },
      { time: 'დეტოქსი', dish: 'სტაფილო და ჯინჯერი' },
    ]
  },
  {
    day: 'პარასკევი',
    img: m14,
    items: [
      { time: 'საუზმე', dish: 'ფრიტატა ისპანახით და კარმეზანით' },
      { time: 'ლანჩი', dish: 'თუნას ტარტარი ავოკადოთი და სეზამის ზეთით' },
      { time: 'სადილი', dish: 'ქათმის სტეიკი ლიმონის და კარაქის სოუსში სატაცურის გარნირით' },
      { time: 'ვახშამი', dish: 'რიკოტა კრევეტებით და ნაღებით' },
      { time: 'დეტოქსი', dish: 'ლიმონი, კოჭა' },
    ]
  },
  {
    day: 'შაბათი',
    img: m15,
    items: [
      { time: 'საუზმე', dish: 'ჯანსალი ტირამისუ კარამელიზირებული ნუშით' },
      { time: 'ლანჩი', dish: 'ბურატას სალათი ბლეიბით' },
      { time: 'სადილი', dish: 'საქონლის სტეიკი ტრუფელის პასტის გარნირით' },
      { time: 'ვახშამი', dish: 'ბერძნული იოგურტი მოცხარით' },
      { time: 'დეტოქსი', dish: 'კიტრი და ლიმონი' },
    ]
  },
  {
    day: 'კვირა',
    img: m16,
    items: [
      { time: 'საუზმე', dish: 'ავოკადოს ტოსტი კორშირებული კვერცხით და შებოლილი ორაგულით' },
      { time: 'ლანჩი', dish: 'ქათმის და ავოკადოს ბოული თაჰინის პასტით' },
      { time: 'სადილი', dish: 'პასტა კრევეტებით და ნივრის პასტით' },
      { time: 'ვახშამი', dish: 'პოკე ინდაურის ლორით და კვერცხით' },
      { time: 'დეტოქსი', dish: 'ჭარხალი, სტაფილო და ლიმონი' },
    ]
  },
];
 
const Menu = () => {
  const [activeDay, setActiveDay] = useState(0);
  const current = days[activeDay];
 
  return (
    <section className="menu" id="menu">
      <div className="menu-header">
        <p className="section-subtitle">კვირის მენიუ</p>
        <h2 className="section-title">Premium Selection</h2>
        <div className="section-divider"></div>
      </div>
 
      <div className="menu-days">
        {days.map((d, i) => (
          <button
            key={i}
            className={`day-btn ${activeDay === i ? 'active' : ''}`}
            onClick={() => setActiveDay(i)}
          >
            {d.day}
          </button>
        ))}
      </div>
 
      <div className="menu-content">
        <div className="menu-img">
          <img src={current.img} alt={current.day} />
          <div className="menu-day-badge">{current.day}</div>
        </div>
      </div>
    </section>
  );
};
 
export default Menu;