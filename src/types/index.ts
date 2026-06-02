// Tipos centrais do projeto — importe daqui em qualquer componente

export interface Word {
  id: number;
  word: string;
  category: string;
  imageUrl: string;
  video: WordVideo;
  shortDef: string;
  definition: string;
  isFeatured?: boolean;
}

export interface WordVideo {
  src: string;
  poster?: string;
  title: string;
  type?: string;
  autoPlay?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  playsInline?: boolean;
}

export interface CategoryColor {
  bg: string;
  text: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface GlossaryConfig {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
}
