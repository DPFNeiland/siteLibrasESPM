import type { FC } from 'react';
import styles from './Navbar.module.css';

const Navbar: FC = () => (
  <nav className={styles.nav} aria-label="Navegação principal">
    <div className={styles.brand}>
      <div className={styles.logo} aria-hidden="true">🤟</div>
      <span className={styles.name}>LibrasESPM</span>
    </div>
    <span className={styles.tag}>Glossário Digital</span>
  </nav>
);

export default Navbar;
