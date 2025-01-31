import React, { useState } from 'react';
import axios from 'axios';
import styles from './addCars.module.css';

const AddCars = () => {
  const [carData, setCarData] = useState({
    brand: '',
    name: '',
    power: '',
    torque: '',
    description: '',
    productionYear: '',
    topSpeedValue: '',
    topSpeedUnit: 'kmh',
  });
  const [images, setImages] = useState([]);
  const [sounds, setSounds] = useState({});
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === 'images') {
      setImages([...e.target.files]);
    } else {
      setSounds({ ...sounds, [e.target.name]: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(carData).forEach((key) => {
      formData.append(key, carData[key]);
    });
    images.forEach((image) => formData.append('images', image));
    Object.keys(sounds).forEach((key) => formData.append(key, sounds[key]));

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('Authentication token is missing. Please log in again.');
        return;
      }

      const response = await axios.post(
        'http://localhost:5001/api/cars',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(`Car added successfully: ${response.data.name}`);
    } catch (error) {
      setMessage(
        `Failed to add car: ${error.response?.data?.message || error.message}`
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
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="power"
          placeholder="Power (BHP)"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="torque"
          placeholder="Torque (Nm)"
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
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
          name="topSpeedValue"
          placeholder="Top Speed"
          onChange={handleInputChange}
          required
        />
        <select
          name="topSpeedUnit"
          onChange={handleInputChange}
          defaultValue="kmh"
        >
          <option value="kmh">KMH</option>
          <option value="mph">MPH</option>
        </select>
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <input
          type="file"
          name="rev"
          accept="audio/*"
          onChange={handleFileChange}
        />
        <input
          type="file"
          name="flyby"
          accept="audio/*"
          onChange={handleFileChange}
        />
        <input
          type="file"
          name="launchControl"
          accept="audio/*"
          onChange={handleFileChange}
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCars;
