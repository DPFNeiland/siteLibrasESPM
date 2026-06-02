# Libras ESPM - Dicionário de Termos de Tecnologia em Libras

> Repositório dedicado a um dicionário digital de termos de tecnologia com explicações, imagens e demonstrações em Libras.

Este projeto reúne palavras comuns do universo da tecnologia, como algoritmos, banco de dados, programação, API, HTML, Java e React, em uma interface visual e acessível. O objetivo é criar um ambiente simples para consulta, aprendizado e apoio à comunicação em Libras dentro do contexto acadêmico e tecnológico.

---

## Sobre o projeto

O site foi desenvolvido como um glossário interativo, com foco em:

- consulta rápida de termos técnicos;
- cards com imagem, categoria e descrição curta;
- modal com definição completa e vídeo demonstrativo em Libras;
- busca por palavras cadastradas;
- organização dos termos por categorias;
- publicação web via GitHub Pages.

Cada palavra cadastrada possui seus próprios atributos, incluindo nome, categoria, imagem relacionada, definição resumida, explicação completa e referência para vídeo em Libras.

---

## Estrutura do repositório

```text
.
|- public/
|  |- videos/                 # vídeos em Libras usados nos termos do dicionário
|  |- favicon.svg             # ícone do site
|  `- icons.svg               # ícones públicos do projeto
|- src/
|  |- assets/                 # imagens e arquivos estáticos importados pelo React
|  |- components/             # componentes reutilizáveis da interface
|  |  |- Badge/               # etiqueta visual de categoria
|  |  |- Breadcrumb/          # navegação estrutural da página
|  |  |- CategoryChips/       # filtros/chips de categorias
|  |  |- FeaturedRow/         # destaque visual para termo principal
|  |  |- Modal/               # janela com vídeo e definição completa
|  |  |- Navbar/              # barra superior do site
|  |  |- PlayButton/          # botão de abertura do vídeo
|  |  |- SearchBar/           # campo de busca
|  |  |- VideoPlayer/         # player de vídeo
|  |  `- WordCard/            # card individual de cada termo
|  |- data/
|  |  `- words.ts             # base de palavras do dicionário
|  |- layouts/                # estrutura principal das páginas
|  |- pages/                  # páginas da aplicação
|  |- router/                 # configuração de rotas
|  |- styles/                 # estilos globais
|  |- types/                  # tipos TypeScript centrais
|  `- utils/                  # funções auxiliares
|- .github/
|  `- workflows/
|     `- deploy.yml           # workflow de publicação no GitHub Pages
|- index.html                 # arquivo HTML base do Vite
|- package.json               # dependências e scripts do projeto
`- vite.config.ts             # configuração do Vite
```

### Organização principal

- `src/data/words.ts`: concentra os termos exibidos no dicionário.
- `public/videos`: armazena os vídeos em Libras vinculados às palavras.
- `src/components`: contém os blocos visuais reutilizados pela interface.
- `.github/workflows/deploy.yml`: automatiza o build e deploy no GitHub Pages.

---

## Tecnologias utilizadas

| Item | Descrição |
|------|-----------|
| Linguagem | TypeScript |
| Biblioteca | React |
| Build tool | Vite |
| Rotas | React Router |
| Estilização | CSS Modules e CSS global |
| Deploy | GitHub Pages com GitHub Actions |

---

## Como executar localmente

Instale as dependências do projeto:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL exibida no terminal, normalmente:

```text
http://localhost:5173/
```

---

## Como gerar a versão de produção

Para criar a versão final do site:

```bash
npm run build
```

O Vite irá gerar os arquivos finais dentro da pasta:

```text
dist/
```

Para testar a versão de produção localmente:

```bash
npm run preview
```

---

## Como adicionar uma nova palavra

As palavras do dicionário ficam no arquivo:

```text
src/data/words.ts
```

Cada item segue uma estrutura semelhante a:

```ts
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
  definition: 'Explicação completa do termo...',
}
```

Para adicionar um novo termo:

1. Crie uma imagem relacionada ou defina uma URL para `imageUrl`.
2. Adicione o vídeo correspondente em `public/videos/`.
3. Cadastre o novo objeto em `src/data/words.ts`.
4. Use no `createVideo` o mesmo nome do arquivo de vídeo, sem a extensão `.mp4`.

Exemplo:

```text
public/videos/react.mp4
```

```ts
video: createVideo('react', reactImage, 'Vídeo do sinal em Libras de React')
```

---

## Publicação no GitHub Pages

O projeto está preparado para publicação no GitHub Pages usando GitHub Actions.

Ao fazer um commit e enviar para a branch `main`, o workflow:

1. instala as dependências;
2. executa o build do Vite;
3. envia a pasta `dist` para o GitHub Pages.

Comandos básicos:

```bash
git add .
git commit -m "Atualiza projeto"
git push origin main
```

Depois do push, acompanhe o processo pela aba `Actions` do GitHub.

---

## Objetivos de aprendizagem

Este projeto apoia a prática de:

- desenvolvimento de interfaces com React;
- organização de componentes reutilizáveis;
- uso de TypeScript em projetos front-end;
- integração de vídeos e imagens em uma aplicação web;
- estruturação de dados para glossários digitais;
- publicação de sites estáticos com Vite e GitHub Pages;
- criação de recursos educacionais mais acessíveis.

---

## Observações

- Os vídeos devem ficar em `public/videos/`.
- Os nomes dos vídeos precisam bater com os slugs usados em `createVideo`.
- Em produção, maiúsculas e minúsculas fazem diferença no nome dos arquivos.
- Vídeos muito grandes podem deixar o repositório pesado.
- Para novos termos, mantenha definições curtas, diretas e fáceis de consultar.

---

## Autor

- Rodrigo Neiland
