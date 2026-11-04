# PDVPRO

Sistema moderno de ponto de venda e gestão comercial.

## Stack inicial

- Next.js + React + TypeScript
- CSS responsivo com design tokens
- Lucide React para ícones

## Desenvolvimento

```bash
npm install
npm run dev
```

A aplicação ficará disponível em http://localhost:3000.

## Diretrizes

- Segurança e validação no servidor por padrão.
- Dinheiro armazenado em centavos (inteiros).
- Operações críticas de venda e estoque devem ser transacionais.
- Nunca versionar arquivos `.env` ou credenciais.
