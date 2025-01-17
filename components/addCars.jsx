import React, { useState } from 'react';
import axios from 'axios';
import styles from './addCars.module.css';

const AddCars = () => {
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    productionYear: '',
    endYear: '',
    topSpeed: '',
    horsepower: '',
    torque: '',
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(carData).forEach((key) => {
      formData.append(key, carData[key]);
    });
    if (image) {
      formData.append('image', image);
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3000/api/cars/add',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(`Car added successfully: ${response.data.model}`);
    } catch (error) {
      setMessage(
        `Failed to add car: ${error.response?.data?.error || error.message}`
      );
    }
  };

  return (
    <div className={styles.addCarContainer}>
      {message && <p className={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.addCarForm}>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="productionYear"
          placeholder="Production Year"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="endYear"
          placeholder="End Year"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="topSpeed"
          placeholder="Top Speed (km/h)"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="horsepower"
          placeholder="Horsepower"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="torque"
          placeholder="Torque (Nm)"
          onChange={handleInputChange}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCars;
