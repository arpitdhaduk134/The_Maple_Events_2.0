import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ModalForm.css';

const ModalForm = ({ item, onClose, onRefresh }) => {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    category: item?.category || '',
    description: item?.description || '',
    price: item?.price || '',
    location: item?.location || '',
    titleImage: null,
  });
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, titleImage: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'titleImage' && formData[key]) {
        formPayload.append(key, formData[key]);
      } else {
        formPayload.append(key, formData[key]);
      }
    });

    try {
      const url = item
        ? `http://localhost:5000/api/catalog/${item._id}`
        : 'http://localhost:5000/api/catalog';
      const method = item ? 'put' : 'post';

      await axios[method](url, formPayload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      onClose();
      onRefresh();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{item ? 'Edit Item' : 'Add New Item'}</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input type="file" name="titleImage" onChange={handleImageChange} />
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>{item ? 'Update' : 'Add'}</button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
