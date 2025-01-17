import Header from '../../components/header';
import styles from './dashboard.module.css';
import CarCard from '../../components/carCard';

const Dashboard = () => {
  return (
    <>
      <Header />
      <h1 className={styles.title}>Admin Dashboard</h1>

      <CarCard />
    </>
  );
};

export default Dashboard;
