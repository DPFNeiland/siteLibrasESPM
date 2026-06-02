import { useEffect, useRef, type FC } from 'react';
import type { Word } from '../../types';
import Badge from '../Badge/Badge';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import styles from './Modal.module.css';

interface Props {
  word: Word;
  onClose: () => void;
}

const Modal: FC<Props> = ({ word, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes: ${word.word}`}
    >
      <div className={styles.modal}>
        <div className={styles.video}>
          <VideoPlayer
            key={word.video.src}
            src={word.video.src}
            poster={word.video.poster ?? word.imageUrl}
            title={word.video.title}
            type={word.video.type}
            autoPlay={word.video.autoPlay ?? true}
            controls={word.video.controls ?? true}
            preload={word.video.preload ?? 'metadata'}
            playsInline={word.video.playsInline ?? true}
          />
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Fechar vídeo"
            type="button"
          >
            ×
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{word.word}</h3>
            <Badge category={word.category} />
          </div>
          <p className={styles.definition}>{word.definition}</p>
          <p className={styles.tip}>
            Pratique o sinal repetindo os movimentos mostrados no vídeo acima.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
