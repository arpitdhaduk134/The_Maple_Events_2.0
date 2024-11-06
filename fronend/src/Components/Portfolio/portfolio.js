import React from 'react';
import './portfolio.css'; // Import CSS for styling
import event1 from '../../Images/event1.avif';
import event2 from '../../Images/event2.avif';
import event3 from '../../Images/event3.avif';
import event4 from '../../Images/event4.avif';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant Wedding',
      description: 'An elegant wedding event with outdoor scenery.',
      image: event1,
    },
    {
      id: 2,
      title: 'Corporate Event',
      description: 'Corporate gathering with keynote speakers.',
      image: event2,
    },
    {
      id: 3,
      title: 'Birthday Party',
      description: 'A fun-filled birthday party for all ages.',
      image: event3,
    },
    {
      id: 4,
      title: 'Charity Gala',
      description: 'Annual charity fundraiser gala.',
      image: event4,
    },
    // Add more events here
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>Our Event Planning Portfolio</h1>
        <p>Take a look at some of the memorable events we've organized.</p>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
