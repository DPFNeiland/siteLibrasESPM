import type { FC } from 'react';
import type { BreadcrumbItem } from '../../types';
import styles from './Breadcrumb.module.css';

interface Props {
  items: BreadcrumbItem[];
}

const Breadcrumb: FC<Props> = ({ items }) => (
  <nav aria-label="Caminho de navegação">
    <ol className={styles.list}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={item.label} className={styles.item}>
            {isLast ? (
              <span className={styles.active} aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <a href={item.href ?? '#'} className={styles.link}>
                  {item.label}
                </a>
                <span className={styles.sep} aria-hidden="true">›</span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
