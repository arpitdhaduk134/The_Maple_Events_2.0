import React, { useEffect, useState } from "react";
import "./events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch with delay
    setTimeout(() => {
      fetch("http://localhost:5000/api/events")
        .then((response) => response.json())
        .then((data) => {
          setEvents(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching events:", error));
    }, 1000); // Add delay for skeleton effect
  }, []);

  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <div className="events-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="event-card skeleton">
                <div className="event-image skeleton"></div>
                <div className="event-details">
                  <div className="skeleton" style={{ width: "80%", height: "20px", marginBottom: "10px" }}></div>
                  <div className="skeleton" style={{ width: "60%", height: "20px" }}></div>
                </div>
              </div>
            ))
          : events.map((event) => (
              <div key={event._id} className="event-card">
                <div className="event-image">
                  <img src={event.imageUrl} alt={event.title} />
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Events;
