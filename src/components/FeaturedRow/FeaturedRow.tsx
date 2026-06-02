import type { FC } from 'react';
import type { Word } from '../../types';
import WordCard from '../WordCard/WordCard';
import styles from './FeaturedRow.module.css';

interface Props {
  featured: Word;
  companion: Word | null;
  onOpen: (word: Word) => void;
}

const FeaturedRow: FC<Props> = ({ featured, companion, onOpen }) => (
  <div className={styles.row}>
    {/* Col 1: imagem grande */}
    <div
    className={styles.imgCol}
    role="button"
    tabIndex={0}
    aria-label={`Destaque: ${featured.word}`}
    onClick={() => onOpen(featured)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen(featured);
      }
    }}
  >
      <img src={featured.imageUrl} alt={featured.word} loading="lazy" />
    </div>


    {/* Col 3: card companheiro */}
    {companion && <WordCard item={companion} onOpen={onOpen} delay={80} />}
  </div>
);

export default FeaturedRow;
