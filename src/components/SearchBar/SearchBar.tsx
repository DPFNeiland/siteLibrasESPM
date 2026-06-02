import type { ChangeEvent, FC } from 'react';
import styles from './SearchBar.module.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: FC<Props> = ({
  value,
  onChange,
  placeholder = 'Buscar palavra em Libras...',
}) => (
  <div className={styles.wrap}>
    <span className={styles.icon} aria-hidden="true">🔍</span>
    <input
      id="search-input"
      type="search"
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      aria-label="Buscar palavra"
    />
  </div>
);

export default SearchBar;
