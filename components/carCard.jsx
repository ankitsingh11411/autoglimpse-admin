import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './carCard.module.css';

const CarCard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/cars')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  return (
    <div className={styles.car_cards}>
      {cars.map((car) => (
        <div key={car._id} className={styles.car_card}>
          <img
            src={
              car.image
                ? `http://localhost:3000/uploads/${car.image}`
                : '/mwheel.jpg'
            }
            alt={`${car.brand} ${car.model}`}
            className={styles.car_image}
          />

          <h2>
            {car.brand} {car.model}
          </h2>
          <p>
            Production: {car.productionYear} - {car.endYear || 'Present'}
          </p>
          <p>Top Speed: {car.topSpeed} km/h</p>
          <p>Horsepower: {car.horsepower} HP</p>
          <p>Torque: {car.torque} Nm</p>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
