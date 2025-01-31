import React from 'react';
import styles from './carCard.module.css';

const CarCard = ({ car }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {car.images && car.images.length > 0 ? (
          <img
            src={car.images[0]}
            alt={`${car.brand} ${car.name}`}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>Image not available</div>
        )}
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>
          {car.brand} {car.name}
        </h2>
        <p className={styles.description}>{car.description}</p>
        <div className={styles.specs}>
          <p>
            <strong>Power:</strong> {car.power} BHP
          </p>
          <p>
            <strong>Torque:</strong> {car.torque} Nm
          </p>
          <p>
            <strong>Top Speed:</strong> {car.topSpeed.value} {car.topSpeed.unit}
          </p>
          <p>
            <strong>Production Year:</strong> {car.productionYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
