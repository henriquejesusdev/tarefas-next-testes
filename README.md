# Tarefas Next.js com Testes Unitários

Projeto criado com Next.js 15, App Router, TypeScript, Jest e Testing Library.

## Site publicado

Link do deploy na Vercel: adicione aqui a URL gerada pela Vercel apos o primeiro deploy.

## Funcionalidades

- Listagem de tarefas simulando uma API local
- Formulário para adicionar nova tarefa
- Hook personalizado para contar tarefas
- Testes unitários de componente, hook e página

## Tecnologias

- Next.js
- TypeScript
- Jest
- Testing Library
- GitHub Actions
- Vercel

## Como instalar

```bash
npm ci
```

## Como executar

```bash
npm run dev
```

## Como validar

```bash
npm run lint
npm run test
npm run build
```

## Como testar

```bash
npm test
```

## CI/CD

O workflow `.github/workflows/main.yml` executa automaticamente em push e pull request para a branch `main`.

Etapas do CI:

- Instalacao de dependencias com `npm ci`
- Validacao de codigo com `npm run lint`
- Testes automatizados com `npm run test`
- Build da aplicacao com `npm run build`

Etapa de CD:

- Deploy automatico na Vercel em todo push na branch `main`, apos o CI passar.
