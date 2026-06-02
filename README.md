# LibrasESPM

Glossário em React + TypeScript com modal de vídeo para demonstrações em Libras.

## Onde colocar os vídeos

- Coloque os arquivos finais em `public/videos/`.
- Use nomes estáveis por palavra, por exemplo `algoritmo.mp4`, `banco-de-dados.mp4` e `programacao.mp4`.
- O projeto já resolve o caminho usando `import.meta.env.BASE_URL`, então funciona no GitHub Pages.

## Como adicionar um novo vídeo

1. Adicione o arquivo em `public/videos/`.
2. Crie ou edite o item correspondente em `src/data/words.ts`.
3. Defina o `slug` do vídeo e o texto do título dentro de `createVideo(...)`.
4. O card e o modal passam a usar esse vídeo automaticamente.

## Observações para GitHub Pages

- Os controles nativos do navegador já exibem play, pause, volume e tela cheia.
- Vídeos grandes devem ficar fora do repositório, em um serviço externo ou em um bucket/CDN.
- Se você usar arquivos locais, prefira versões finais compactadas em MP4/WebM.
