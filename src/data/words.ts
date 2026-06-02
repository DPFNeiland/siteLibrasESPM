import type { CategoryColor, Word, WordVideo } from '../types';
import { publicUrl } from '../utils/publicUrl';

const createVideo = (slug: string, poster: string, title: string): WordVideo => ({
  src: publicUrl(`videos/${slug}.mp4`),
  poster,
  title,
  type: 'video/mp4',
  autoPlay: true,
  controls: true,
  preload: 'metadata',
  playsInline: true,
});

const algorithmImage = 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=880&q=80';
const databaseImage = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=880&q=80';
const programmingImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=880&q=80';
const apiImage = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=880&q=80';
const crudImage = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=880&q=80';
const codingImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=880&q=80';
const htmlImage = 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=880&q=80';
const javaImage = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=880&q=80';
const appleImage = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=880&q=80';
const sprintImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=880&q=80';
const reactImage = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=880&q=80';

export const WORDS: Word[] = [
  {
    id: 1,
    word: 'Algoritmo',
    category: 'Lógica',
    imageUrl: algorithmImage,
    video: createVideo(
      'algoritmo',
      algorithmImage,
      'Vídeo do sinal em Libras de Algoritmo',
    ),
    shortDef: 'Sequência de instruções para processamento de dados técnicos.',
    definition:
      'Um algoritmo é uma sequência finita e ordenada de passos que, quando executados, resolvem um problema ou realizam uma tarefa. É a base de toda computação moderna, do cálculo simples à inteligência artificial.',
  },
  {
    id: 2,
    word: 'Banco de Dados',
    category: 'Estrutura',
    imageUrl: databaseImage,
    video: createVideo(
      'banco-de-dados',
      databaseImage,
      'Vídeo do sinal em Libras de Banco de Dados',
    ),
    shortDef: 'Armazenamento organizado de informações digitais estruturadas.',
    definition:
      'Um banco de dados é um conjunto organizado de dados armazenados eletronicamente. SGBDs permitem criar, ler, atualizar e deletar registros com eficiência e segurança.',
  },
  {
    id: 3,
    word: 'Programação',
    category: 'Desenvolvimento',
    imageUrl: programmingImage,
    video: createVideo(
      'programacao',
      programmingImage,
      'Vídeo do sinal em Libras de Programação',
    ),
    shortDef: 'Processo criativo e técnico da escrita de código de software.',
    definition:
      'Programação é o processo de criar instruções para que um computador execute tarefas. Utiliza linguagens como Python, Java e JavaScript para desenvolver softwares e aplicações.',
  },
  {
    id: 4,
    word: 'API',
    category: 'Internet',
    imageUrl: apiImage,
    video: createVideo(
      'api',
      apiImage,
      'Vídeo do sinal em Libras de API',
    ),
    shortDef: 'Interface que permite a comunicaÃ§Ã£o entre sistemas diferentes.',
    definition:
      'API, ou Interface de Programação de Aplicações, É um conjunto de regras que permite que softwares troquem dados e funcionalidades de forma padronizada.',
  },
  {
    id: 5,
    word: 'CRUD',
    category: 'Estrutura',
    imageUrl: crudImage,
    video: createVideo(
      'crud',
      crudImage,
      'Vídeo do sinal em Libras de CRUD',
    ),
    shortDef: 'Operações básicas para criar, ler, atualizar e apagar dados.',
    definition:
      'CRUD é a sigla para Create, Read, Update e Delete. Essas quatro operações formam a base de muitos sistemas que manipulam informações em bancos de dados.',
  },
  {
    id: 6,
    word: 'Codar',
    category: 'Desenvolvimento',
    imageUrl: codingImage,
    video: createVideo(
      'codar',
      codingImage,
      'Vídeo do sinal em Libras de Codar',
    ),
    shortDef: 'Ato de escrever código para criar programas e aplicações.',
    definition:
      'Codar é escrever instruções em uma linguagem de programação para que o computador execute tarefas, resolva problemas ou construa funcionalidades.',
  },
  {
    id: 7,
    word: 'HTML',
    category: 'Internet',
    imageUrl: htmlImage,
    video: createVideo(
      'html',
      htmlImage,
      'Vídeo do sinal em Libras de HTML',
    ),
    shortDef: 'Linguagem de marcação usada para estruturar páginas web.',
    definition:
      'HTML é a linguagem usada para organizar o conteúdo de páginas na web, definindo elementos como títulos, parágrados, links, imagens e formulários.',
  },
  {
    id: 8,
    word: 'JAVA',
    category: 'Desenvolvimento',
    imageUrl: javaImage,
    video: createVideo(
      'java',
      javaImage,
      'Vídeo do sinal em Libras de JAVA',
    ),
    shortDef: 'Linguagem de programação usada em sistemas, apps e servidores.',
    definition:
      'Java é uma linguagem de programação orientada a objetos muito usada no desenvolvimento de aplicações corporativas, sistemas web, aplicativos Android e servidores.',
  },
  {
    id: 9,
    word: 'Apple',
    category: 'Marca',
    imageUrl: appleImage,
    video: createVideo(
      'apple',
      appleImage,
      'Vídeo do sinal em Libras de Apple',
    ),
    shortDef: 'Empresa de tecnologia conhecida por iPhone, Mac e iPad.',
    definition:
      'Apple é uma empresa global de tecnologia que desenvolve dispositivos, sistemas operacionais e serviços digitais, como iPhone, Mac, iPad, iOS e macOS.',
  },
  {
    id: 10,
    word: 'Sprint',
    category: 'Metodologia',
    imageUrl: sprintImage,
    video: createVideo(
      'sprint',
      sprintImage,
      'Vídeo do sinal em Libras de Sprint',
    ),
    shortDef: 'Período curto de trabalho usado em métodos Ágeis.',
    definition:
      'Sprint é um ciclo de trabalho com duraÃ§Ã£o definida, usado em metodologias Ágeis como Scrum para planejar, desenvolver e entregar partes de um projeto.',
  },
  {
    id: 11,
    word: 'React',
    category: 'Desenvolvimento',
    imageUrl: reactImage,
    video: createVideo(
      'react',
      reactImage,
      'Vídeo do sinal em Libras de React',
    ),
    shortDef: 'Biblioteca JavaScript para construir interfaces de usuário.',
    definition:
      'React é uma biblioteca JavaScript usada para criar interfaces interativas com componentes reutilizáveis, facilitando o desenvolvimento de aplicações web modernas.',
  },
];

export const CAT_COLORS: Record<string, CategoryColor> = {
  Lógica: { bg: '#EEF2FF', text: '#4338CA' },
  Estrutura: { bg: '#FFF7ED', text: '#C2410C' },
  Desenvolvimento: { bg: '#F0FDF4', text: '#166534' },
  IA: { bg: '#FDF4FF', text: '#7E22CE' },
  Internet: { bg: '#EFF6FF', text: '#1D4ED8' },
  Infraestrutura: { bg: '#F0FDFA', text: '#0F766E' },
  Proteção: { bg: '#FFF1F2', text: '#BE123C' },
  Design: { bg: '#FFFBEB', text: '#B45309' },
  Marca: { bg: '#F8FAFC', text: '#334155' },
  Metodologia: { bg: '#ECFDF5', text: '#047857' },
};

export const DEFAULT_COLOR: CategoryColor = { bg: '#F1F5F9', text: '#475569' };

export const getCategoryColor = (cat: string): CategoryColor =>
  CAT_COLORS[cat] ?? DEFAULT_COLOR;
