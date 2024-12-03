import React, { useEffect, useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/portfolio');
        const data = await response.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <div className="portfolio-page">
      <h1>Our Stunning Portfolio</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item._id} className="portfolio-item">
            <div className="portfolio-image-container">
              {item.titleImage ? (
                <img
                  src={item.titleImage}
                  alt={item.title}
                  className="portfolio-image"
                />
              ) : (
                <div className="fallback-image">No Image Available</div>
              )}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
