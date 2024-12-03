import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CatalogManagement.css';

const CatalogManagement = () => {
  const [catalogItems, setCatalogItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    location: '',
    titleImage: '',
    photos: [],
  });
  const [editingItem, setEditingItem] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCatalogItems();
  }, []);

  const fetchCatalogItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/catalog');
      setCatalogItems(response.data);
    } catch (error) {
      console.error('Error fetching catalog items:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewItem((prev) => ({ ...prev, titleImage: e.target.files[0] }));
  };

  const handleAddOrUpdate = async () => {
    const formData = new FormData();
    Object.keys(newItem).forEach((key) => {
      if (key === 'photos') {
        newItem.photos.forEach((photo) => formData.append('photos', photo));
      } else {
        formData.append(key, newItem[key]);
      }
    });

    try {
      if (editingItem) {
        await axios.put(
          `http://localhost:5000/api/catalog/${editingItem._id}`,
          formData
        );
      } else {
        await axios.post('http://localhost:5000/api/catalog', formData);
      }
      fetchCatalogItems();
      resetForm();
    } catch (error) {
      console.error('Error adding/updating catalog item:', error);
    }
  };

  const resetForm = () => {
    setNewItem({
      name: '',
      category: '',
      description: '',
      price: '',
      location: '',
      titleImage: '',
      photos: [],
    });
    setEditingItem(null);
    setIsPopupVisible(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`http://localhost:5000/api/catalog/${id}`);
        fetchCatalogItems();
      } catch (error) {
        console.error('Error deleting catalog item:', error);
      }
    }
  };

  return (
    <div className="catalog-management">
      <h2>Catalog Management</h2>
      <button onClick={() => setIsPopupVisible(true)} className="add-button">
        Add New Item
      </button>
      <div className="catalog-list">
        {catalogItems.map((item) => (
          <div className="catalog-item" key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => { setEditingItem(item); setIsPopupVisible(true); }}>Edit</button>
            <button onClick={() => handleDelete(item._id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>

      {isPopupVisible && (
        <div className="popup-form">
          <h3>{editingItem ? 'Edit Item' : 'Add New Item'}</h3>
          <input type="text" name="name" placeholder="Name" value={newItem.name} onChange={handleInputChange} />
          <input type="text" name="category" placeholder="Category" value={newItem.category} onChange={handleInputChange} />
          <textarea name="description" placeholder="Description" value={newItem.description} onChange={handleInputChange} />
          <input type="number" name="price" placeholder="Price" value={newItem.price} onChange={handleInputChange} />
          <input type="text" name="location" placeholder="Location" value={newItem.location} onChange={handleInputChange} />
          <input type="file" name="titleImage" onChange={handleFileChange} />
          <button onClick={handleAddOrUpdate}>{editingItem ? 'Update' : 'Add'}</button>
          <button onClick={resetForm} className="cancel-button">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CatalogManagement;
