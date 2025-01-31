import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import styles from './dashboard.module.css';
import CarCard from '../../components/carCard';

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:5001/api/cars', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching cars:', error));
  }, []);

  return (
    <>
      <Header />
      <h1 className={styles.title}>Admin Dashboard</h1>
      <div className={styles.cardGrid}>
        {cars.length > 0 ? (
          cars.map((car) => <CarCard key={car._id} car={car} />)
        ) : (
          <p className={styles.message}>
            No cars available. Add some cars to see them here!
          </p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
