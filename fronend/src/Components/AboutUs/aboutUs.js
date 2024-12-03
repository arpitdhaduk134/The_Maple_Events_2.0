import React, { useEffect, useState } from "react";
import "./aboutUs.css";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState({
    title: "",
    description: "",
    images: [],
  });

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/about-us");
        const data = await response.json();
        setAboutUs(data);
      } catch (error) {
        console.error("Error fetching About Us data:", error);
      }
    };

    fetchAboutUs();
  }, []);

  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>{aboutUs.title || "About Us"}</h1>
        <p>{aboutUs.description || "Learn more about who we are and what we do."}</p>
      </div>
      <div className="about-us-content">
        {aboutUs.images && aboutUs.images.length > 0 ? (
          <div className="about-us-images">
            {aboutUs.images.map((image, index) => (
              <div key={index} className="about-us-image-card">
                <img
                  src={`http://localhost:5000${image}`}
                  alt={`About Us ${index}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No images available yet!</p>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
