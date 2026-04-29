# GiroBet — Landing Page

Site de apostas esportivas feito em Next.js 14 com TypeScript.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Como fazer deploy na Vercel (grátis)

1. Suba o projeto para o GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. Clique em **"New Project"** e selecione o repositório
4. Clique em **Deploy** — pronto!

A Vercel detecta Next.js automaticamente, sem configuração extra.

## Estrutura do projeto

```
girobet/
├── app/
│   ├── layout.tsx     # Layout raiz (metadados, fontes)
│   ├── page.tsx       # Landing page principal
│   └── globals.css    # Estilos globais
├── next.config.js
├── tsconfig.json
└── package.json
```

## Tecnologias

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS puro (sem framework de UI)
- Google Fonts (Bebas Neue + Barlow)
