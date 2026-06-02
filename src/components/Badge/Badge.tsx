import type { FC } from 'react';
import { getCategoryColor } from '../../data/words';
import styles from './Badge.module.css';

interface Props {
  category: string;
}

const Badge: FC<Props> = ({ category }) => {
  const color = getCategoryColor(category);
  return (
    <span
      className={styles.badge}
      style={{ background: color.bg, color: color.text }}
    >
      {category}
    </span>
  );
};

export default Badge;
