import { useState, useMemo, useCallback, type FC } from 'react';
import type { Word } from '../../types';
import { WORDS } from '../../data/words';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryChips from '../../components/CategoryChips/CategoryChips';
import WordCard from '../../components/WordCard/WordCard';
import FeaturedRow from '../../components/FeaturedRow/FeaturedRow';
import Modal from '../../components/Modal/Modal';
import styles from './GlossaryPage.module.css';

const BREADCRUMBS = [
  { label: 'Dicionário', href: '#' },
  { label: 'Tecnologia' },
];

const GlossaryPage: FC = () => {
  const [search,    setSearch]    = useState('');
  const [activeCat, setActiveCat] = useState('Todos');
  const [openWord,  setOpenWord]  = useState<Word | null>(null);

  const openModal  = useCallback((w: Word) => setOpenWord(w), []);
  const closeModal = useCallback(() => setOpenWord(null),     []);

  /* ── Dados derivados ── */
  const featured    = useMemo(() => WORDS.find(w => w.isFeatured) ?? null, []);
  const normalWords = useMemo(() => WORDS.filter(w => !w.isFeatured),       []);
  const categories  = useMemo(() => [...new Set(normalWords.map(w => w.category))], [normalWords]);

  /* ── Filtragem reactiva ── */
  const isFiltering = search.trim() !== '' || activeCat !== 'Todos';

  const filtered = useMemo(() =>
    WORDS.filter(w => {
      const okCat  = activeCat === 'Todos' || w.category === activeCat;
      const okText = w.word.toLowerCase().includes(search.toLowerCase());
      return okCat && okText;
    }),
    [search, activeCat],
  );

  /*
   * Layout sem filtro (fiel à imagem):
   *   row1      → normal[0..2]  (linha 1 de 3 cards)
   *   featured  → coluna 1 e 2 da linha 2
   *   companion → normal[3]     (coluna 3 da linha 2)
   *   rest      → normal[4..]   (linhas seguintes)
   */
  const row1      = normalWords.slice(0, 3);
  const companion = normalWords[3] ?? null;
  const rest      = normalWords.slice(4);

  return (
    <div>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbWrap}>
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>Glossário de Tecnologia</h1>
        <p className={styles.subtitle}>
          Aprenda os principais termos do mundo digital e da programação em{' '}
          <a href="#" className={styles.subtitleLink}>Libras</a>,
          com foco em conceitos técnicos e desenvolvimento.
        </p>
      </header>

      {/* Ferramentas: busca + chips */}
      <div className={styles.toolbar}>
        <SearchBar value={search} onChange={setSearch} />
        <CategoryChips
          categories={categories}
          active={activeCat}
          onChange={setActiveCat}
        />
      </div>

      {/* ── Layout padrão (sem filtro) ── */}
      {!isFiltering && (
        <>
          {/* Linha 1 */}
          <div className={styles.grid}>
            {row1.map((w, i) => (
              <WordCard key={w.id} item={w} onOpen={openModal} delay={i * 60} />
            ))}
          </div>

          {/* Linha destaque */}
          {featured && (
            <FeaturedRow featured={featured} companion={companion} onOpen={openModal} />
          )}

          {/* Linhas extras */}
          {rest.length > 0 && (
            <div className={`${styles.grid} ${styles.gridExtra}`}>
              {rest.map((w, i) => (
                <WordCard key={w.id} item={w} onOpen={openModal} delay={i * 55} />
              ))}
            </div>
          )}
        </>
      )}

      {/* ── Layout com filtro ativo ── */}
      {isFiltering && (
        <div className={styles.grid}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyIcon}>🔎</p>
              <p className={styles.emptyTitle}>Nenhuma palavra encontrada</p>
              <p className={styles.emptySub}>Tente outro termo ou remova os filtros.</p>
            </div>
          ) : (
            filtered.map((w, i) => (
              <WordCard key={w.id} item={w} onOpen={openModal} delay={i * 50} />
            ))
          )}
        </div>
      )}

      {/* Rodapé */}
      <footer className={styles.footer}>
        🤟 LibrasESPM — Glossário Digital de Libras · {new Date().getFullYear()}
      </footer>

      {/* Modal */}
      {openWord && <Modal word={openWord} onClose={closeModal} />}
    </div>
  );
};

export default GlossaryPage;
