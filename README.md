# Conecta Kids

Site educativo sobre segurança na internet para crianças e jovens (React + Vite).

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Gerar versão de produção

```bash
npm run build
npm run preview
```

## Onde editar o conteúdo

| O que | Arquivo |
|---|---|
| Cards de assuntos | `src/components/Assuntos/assuntosData.jsx` |
| Vídeos (trocar links e durações) | `src/components/Videos/videosData.jsx` |
| Tutoriais | `src/components/Tutorial/tutorialsData.js` |
| Armadilhas (segurança) | `src/components/Seguranca/golpesData.jsx` |
| Perguntas do quiz | `src/components/Quiz/quizData.js` |
| Cores e fontes | `src/index.css` (variáveis em `:root`) |
| Ilustração do topo | `src/assets/hero-illustration.svg` |
| Logo da Unisanta | coloque `logo-unisanta.png` em `src/assets` |
