import { useEffect, useRef, useState, type FC } from 'react';
import styles from './VideoPlayer.module.css';

interface Props {
  src: string;
  poster?: string;
  title: string;
  type?: string;
  autoPlay?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  playsInline?: boolean;
}

const VideoPlayer: FC<Props> = ({
  src,
  poster,
  title,
  type = 'video/mp4',
  autoPlay = true,
  controls = true,
  preload = 'metadata',
  playsInline = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [errorSrc, setErrorSrc] = useState<string | null>(null);
  const hasError = errorSrc === src;

  useEffect(() => {
    if (!autoPlay || hasError) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // O navegador pode bloquear autoplay em cenários fora do gesto do usuário.
      });
    }
  }, [autoPlay, hasError, src]);

  return (
    <div className={styles.player}>
      {hasError ? (
        <div className={styles.fallback} role="alert">
          <span className={styles.fallbackTitle}>Vídeo indisponível</span>
          <span className={styles.fallbackText}>
            Não foi possível carregar {title.toLowerCase()}.
          </span>
        </div>
      ) : (
        <video
          ref={videoRef}
          className={styles.video}
          poster={poster}
          title={title}
          controls={controls}
          autoPlay={autoPlay}
          preload={preload}
          playsInline={playsInline}
          onError={() => setErrorSrc(src)}
        >
          <source src={src} type={type} />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
