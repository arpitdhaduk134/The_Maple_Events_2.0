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
    stationery: '',
  });
  const [serviceOptions, setServiceOptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedService, setSelectedService] = useState(null); // State to store clicked service details
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  // Event categories
  const categories = ['Wedding', 'Birthday', 'Corporate Event', 'Anniversary'];

  // Placeholders for each budget field
  const placeholders = {
    venue: 'Enter budget for venue (e.g., 5000)',
    catering: 'Enter budget for catering per guest (e.g., 50)',
    decorations: 'Enter budget for decorations (e.g., 1500)',
    entertainment: 'Enter budget for entertainment (e.g., 1000)',
    photography: 'Enter budget for photography (e.g., 1200)',
    transportation: 'Enter budget for transportation (e.g., 500)',
    stationery: 'Enter budget for stationery (e.g., 300)',
  };

  // Handle allocation changes
  const handleAllocationChange = (e) => {
    const { name, value } = e.target;
    setAllocations((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    const budgetData = {
      category,
      allocations: Object.fromEntries(
        Object.entries(allocations).map(([key, value]) => [key, parseFloat(value) || 0])
      ),
    };

    try {
      const response = await axios.post('http://localhost:5000/api/budget/calculate', budgetData);
      setServiceOptions(response.data.data);
    } catch (error) {
      setError('Error fetching options. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle card click to show details
  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  // Render cards for each category
  const renderServiceCards = (serviceCategory, serviceData) => {
    if (!serviceData || serviceData.length === 0) {
      return <p>No options available for {serviceCategory} within the budget.</p>;
    }

    return (
      <div className="card-container">
        {serviceData.map((item, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(item)}>
            <div className="card-image">
              {item.titleImage ? (
                <img src={item.titleImage} alt={item.name || 'service'} />
              ) : (
                <div className="no-image">No Image Available</div>
              )}
            </div>
            <div className="card-content">
              <h5>{item.name}</h5>
              <p>{item.description}</p>
              <p className="price">Price: {item.price} CAD</p>
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
            <label>Budget for {service.charAt(0).toUpperCase() + service.slice(1)}</label>
            <input
              type="number"
              name={service}
              value={allocations[service]}
              onChange={handleAllocationChange}
              placeholder={placeholders[service]}
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {serviceOptions && (
        <div className="results">
          <h3>Matching Options Within Your Budget</h3>
          {Object.keys(serviceOptions).map((category) => (
            <div key={category} className="service-category">
              <h4>{category}</h4>
              {renderServiceCards(category, serviceOptions[category])}
            </div>
          ))}
        </div>
      )}

      {showModal && selectedService && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>{selectedService.name}</h3>
            <div className="modal-images">
              <img src={selectedService.titleImage} alt="Service" />
            </div>
            <p>{selectedService.description}</p>
            <p>Price: {selectedService.price} CAD</p>
            <p>Location: {selectedService.location}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;
