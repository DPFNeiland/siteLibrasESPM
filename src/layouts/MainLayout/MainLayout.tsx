import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './MainLayout.module.css';

const MainLayout: FC = () => (
  <>
    <Navbar />
    <div className={styles.content}>
      <Outlet />
    </div>
  </>
);

export default MainLayout;
