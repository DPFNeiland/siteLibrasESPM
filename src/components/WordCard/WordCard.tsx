import type { FC } from 'react';
import type { Word } from '../../types';
import Badge from '../Badge/Badge';
import PlayButton from '../PlayButton/PlayButton';
import styles from './WordCard.module.css';

interface Props {
  item: Word;
  onOpen: (word: Word) => void;
  delay?: number;
}

const WordCard: FC<Props> = ({ item, onOpen, delay = 0 }) => (
  <article
    className={styles.card}
    style={{ animationDelay: `${delay}ms` }}
    role="button"
    tabIndex={0}
    aria-label={`Ver detalhes de ${item.word}`}
    onClick={() => onOpen(item)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen(item);
      }
    }}
  >
    {/* Thumbnail */}
    <div className={styles.thumb}>
      <img src={item.imageUrl} alt={item.word} loading="lazy" />
      <div className={styles.gradient} aria-hidden="true" />
      <div className={styles.playWrap}>
        <PlayButton
          size={10}
          ariaLabel={`Reproduzir vídeo de ${item.word}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpen(item);
          }}
        />
      </div>
    </div>

    {/* Corpo */}
    <div className={styles.body}>
      <div className={styles.titleRow}>
        <span className={styles.title}>{item.word}</span>
        <Badge category={item.category} />
      </div>
      <p className={styles.def}>{item.shortDef}</p>
    </div>
  </article>
);

export default WordCard;
