import type { FC } from 'react';
import { getCategoryColor } from '../../data/words';
import styles from './CategoryChips.module.css';

interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

const ALL = 'Todos';

const CategoryChips: FC<Props> = ({ categories, active, onChange }) => {
  const all = [ALL, ...categories];

  return (
    <div className={styles.chips} role="group" aria-label="Filtrar por categoria">
      {all.map((cat) => {
        const isActive = cat === active;
        const color = cat === ALL
          ? { bg: '#1A6BFF', text: '#fff' }
          : getCategoryColor(cat);

        return (
          <button
            key={cat}
            id={`chip-${cat.toLowerCase().replace(/[\s/]+/g, '-').replace(/[^\w-]/g, '')}`}
            className={styles.chip}
            aria-pressed={isActive}
            onClick={() => onChange(cat)}
            type="button"
            style={
              isActive
                ? { background: color.bg, color: color.text, borderColor: 'transparent' }
                : undefined
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryChips;
