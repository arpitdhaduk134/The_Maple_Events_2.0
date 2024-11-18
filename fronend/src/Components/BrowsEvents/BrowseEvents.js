import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BrowseEvents = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    date: '',
    location: '',
  });

  // Fetch events based on filters
  const fetchFilteredEvents = async () => {
    try {
      const queryString = Object.keys(filters)
        .filter(key => filters[key])
        .map(key => `${key}=${encodeURIComponent(filters[key])}`)
        .join('&');

      const response = await axios.get(`/api/events?${queryString}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchFilteredEvents();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchFilteredEvents();
  };

  return (
    <div className="browse-events">
      <h2>Browse Events</h2>
      <form onSubmit={handleFilterSubmit}>
        <div>
          <label>Category</label>
          <select name="category" value={filters.category} onChange={handleFilterChange}>
            <option value="">All Categories</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="education">Education</option>
          </select>
        </div>
        <div>
          <label>Date</label>
          <input type="date" name="date" value={filters.date} onChange={handleFilterChange} />
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" value={filters.location} onChange={handleFilterChange} placeholder="Enter location" />
        </div>
        <button type="submit">Apply Filters</button>
      </form>

      <div className="events-list">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event._id} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.category}</p>
              <p>{event.location}</p>
            </div>
          ))
        ) : (
          <p>No events found for selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseEvents;
