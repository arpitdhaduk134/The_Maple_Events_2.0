import React, { useState } from 'react';
import axios from 'axios';
import './budgetCalculator.css';


const BudgetCalculator = () => {
  const [category, setCategory] = useState('');
  const [allocations, setAllocations] = useState({
    venue: '',
    catering: '',
    decorations: '',
    entertainment: '',
    photography: '',
    transportation: '',
    stationery: ''
  });
  const [serviceOptions, setServiceOptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Event categories
  const categories = ['Wedding', 'Birthday', 'Corporate Event', 'Anniversary'];

  // Handle allocation changes
  const handleAllocationChange = (e) => {
    setAllocations({
      ...allocations,
      [e.target.name]: e.target.value,
    });
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Prepare request body for the API
    const budgetData = {
      category,
      allocations: {
        venue: parseFloat(allocations.venue) || null,
        catering: parseFloat(allocations.catering) || null,
        decorations: parseFloat(allocations.decorations) || null,
        entertainment: parseFloat(allocations.entertainment) || null,
        photography: parseFloat(allocations.photography) || null,
        transportation: parseFloat(allocations.transportation) || null,
        stationery: parseFloat(allocations.stationery) || null,
      },
    };

    try {
      const response = await axios.post('http://localhost:5000/api/budget/calculate', budgetData);
      setServiceOptions(response.data.data);
    } catch (error) {
      setError('Error fetching options');
      console.error(error);
    }
    setLoading(false);
  };

  // Render the cards for each service category
  const renderServiceCards = (serviceCategory, serviceData) => {
    if (!serviceData || serviceData.length === 0) {
      return <p>No options available for {serviceCategory} within the budget.</p>;
    }

    return (
      <div className="card-container">
        {serviceData.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              {item.photos && item.photos.length > 0 ? (
                <img src={item.photos[0]} alt={item.name || 'service'} />
              ) : (
                <div className="no-image">No Image Available</div>
              )}
            </div>
            <div className="card-content">
              <h5>{item.name || item.packageName || item.vehicleType}</h5>
              <p>{item.description}</p>
              <p>Price: {item.price || item.pricePerGuest || item.pricePerHour || item.pricePerPiece} CAD</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="budget-calculator">
      <h2>Budget Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Event Category</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {Object.keys(allocations).map((service) => (
          <div key={service}>
            <label>Budget for {service}</label>
            <input
              type="number"
              name={service}
              value={allocations[service]}
              onChange={handleAllocationChange}
              placeholder={`Allocate budget for ${service}`}
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}

      {serviceOptions && (
        <div className="results">
          <h3>Matching Options Within Your Budget</h3>
          <div className="service-category">
            <h4>Venues</h4>
            {renderServiceCards('Venues', serviceOptions.venues)}
          </div>
          <div className="service-category">
            <h4>Catering</h4>
            {renderServiceCards('Catering Options', serviceOptions.cateringOptions)}
          </div>
          <div className="service-category">
            <h4>Decorations</h4>
            {renderServiceCards('Decorations', serviceOptions.decorations)}
          </div>
          <div className="service-category">
            <h4>Entertainment</h4>
            {renderServiceCards('Entertainments', serviceOptions.entertainments)}
          </div>
          <div className="service-category">
            <h4>Photography</h4>
            {renderServiceCards('Photography Packages', serviceOptions.photographyPackages)}
          </div>
          <div className="service-category">
            <h4>Transportation</h4>
            {renderServiceCards('Transportation Options', serviceOptions.transportationOptions)}
          </div>
          <div className="service-category">
            <h4>Stationery</h4>
            {renderServiceCards('Stationery Items', serviceOptions.stationeryItems)}
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;
