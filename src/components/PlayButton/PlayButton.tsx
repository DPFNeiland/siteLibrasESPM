import type { FC, MouseEvent } from 'react';
import styles from './PlayButton.module.css';

interface Props {
  size?: number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  large?: boolean;
  ariaLabel?: string;
}

const PlayButton: FC<Props> = ({
  size = 10,
  onClick,
  large = false,
  className = '',
  ariaLabel = 'Reproduzir vídeo em Libras',
}) => (
  <button
    className={`${styles.play} ${large ? styles.large : ''} ${className}`.trim()}
    onClick={onClick}
    aria-label={ariaLabel}
    type="button"
  >
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 10 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1L9 6L1 11Z" fill="white" />
    </svg>
  </button>
);

export default PlayButton;
