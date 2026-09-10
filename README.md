# Oliver Network — site

Site institucional da **Oliver Network**: integração tecnológica em infraestrutura de TI e Telecom
e serviços gerenciados (MSP) para ambientes corporativos, data center e industrial.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **TailwindCSS 3** + **shadcn/ui**
- **Framer Motion** para animações (reveal on scroll, cursor light, mega menus, transições)
- **@anthropic-ai/sdk** — assistente "Oliver IA" (rota server-only)

## Rodando o projeto

```bash
npm install --legacy-peer-deps
cp .env.example .env.local        # e preencha as variáveis (veja abaixo)
npm run dev
```

Acesse http://localhost:3000

> `--legacy-peer-deps` é necessário porque algumas dependências herdadas (ex.: `cmdk`) ainda
> declaram peer de React 18.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

| Variável | Obrigatória | Descrição |
|---|---|---|
| `ANTHROPIC_API_KEY` | para o chat | Chave da API da Anthropic. Fica **apenas no servidor** — nunca use `NEXT_PUBLIC_`. Sem ela, o chat responde orientando o contato humano. |
| `ANTHROPIC_MODEL` | não | Modelo do assistente. Padrão: `claude-sonnet-5`. |
| `NEXT_PUBLIC_APP_URL` | não | URL pública (metadata/SEO). Padrão: `https://olivernetwork.com.br`. |

O endpoint do assistente é `POST /api/ai/chat` (`src/app/api/ai/chat/route.ts`): valida a
entrada, limita tamanho e frequência, tem timeout e faz streaming (SSE). Nenhuma conversa é
armazenada.

## Estrutura

```
src/
  app/(marketing)/        páginas do site (home, msp, servicos, solucoes, infraestrutura, planos,
                          como-funciona, empresa, contato, faq) + rotas dinâmicas [slug]
  app/api/ai/chat/        endpoint seguro do assistente
  components/global/      efeitos e animações reutilizáveis (CursorLight, AnimatedGrid,
                          MagneticButton, RevealText, AnimatedImage, ScrollProgress, PageTransition)
  components/marketing/   Header, mega menus, Footer, PageHero, CTASection, ServiceDetail, etc.
  components/chatbot/     widget do assistente + system prompt
  constants/              dados estruturados (services, solutions, infrastructure, plans, faq,
                          company, links)
```

## Build

```bash
npm run build
```
