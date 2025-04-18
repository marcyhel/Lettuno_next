# SaaS de Livros Digitais

Este é um projeto SaaS (Software as a Service) para gerenciamento de livros digitais, construído com Next.js 15, NextAuth v5, Prisma e PostgreSQL. O sistema inclui funcionalidades de autenticação, assinaturas via Stripe, gerenciamento de livros e livro do mês.

## Requisitos

- Node.js (versão recomendada: 18.x ou superior)
- PostgreSQL
- Conta Stripe para processamento de pagamentos
- Conta de e-mail para envio de notificações

## Configuração

### 1. Clone o repositório

```bash
git clone [URL_DO_REPOSITÓRIO]
cd mp-saas-next-auth-prisma-next
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Prisma
DATABASE_URL="postgresql://[usuario]:[senha]@[host]:[porta]/[banco]?schema=saas_book"

# NextAuth
AUTH_SECRET="sua_chave_secreta_aqui"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=sua_chave_publica_stripe
STRIPE_SECRET_KEY=sua_chave_secreta_stripe
STRIPE_PRICE_ID_BASIC=id_do_plano_basico
STRIPE_PRICE_ID_PREMIUM=id_do_plano_premium
NEXT_PUBLIC_STRIPE_PORTAL_CLIENTE=url_do_portal_cliente_stripe
NEXT_PUBLIC_PRODUCT_BASIC="Básico"
NEXT_PUBLIC_PRODUCT_PREMIUM="Premium"

# URLs
URL_NEXT_BASE=http://localhost:3000
NEXT_PUBLIC_URL_NEXT_BASE=http://localhost:3000

# Email
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD='senha_do_email'
EMAIL_APP_PASSWORD='senha_de_aplicativo_gmail'
```

### 4. Configure o banco de dados

Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev --name init
```

## Executando o projeto

### Ambiente de desenvolvimento

```bash
npm run dev
```

Este comando inicia o servidor de desenvolvimento Next.js com Turbopack e também executa o script de tarefas cron para gerenciamento do livro do mês.

### Ambiente de produção

```bash
npm run build
npm run start
```

## Funcionalidades principais

### Autenticação

O sistema utiliza NextAuth v5 para autenticação com credenciais (email/senha). Inclui:
- Registro de usuários
- Login
- Recuperação de senha

### Assinaturas

Integração com Stripe para gerenciamento de assinaturas:
- Plano Básico
- Plano Premium
- Portal do cliente para gerenciamento de assinaturas

### Gerenciamento de livros

- Catálogo de livros por categoria
- Favoritos
- Progresso de leitura
- Visualizador de PDF integrado

### Livro do mês

Funcionalidade que destaca um livro mensalmente para os assinantes, gerenciado por tarefas cron automatizadas.

## Estrutura do banco de dados

O projeto utiliza Prisma ORM com PostgreSQL. Os principais modelos incluem:
- `user`: Informações do usuário e assinatura
- `book`: Catálogo de livros
- `Category`: Categorias de livros
- `monthly_featured_book`: Livro do mês
- `user_book_reader`: Progresso de leitura do usuário

## Tarefas cron

O projeto inclui tarefas automatizadas para:
- Gerenciamento do livro do mês
- Verificação de status de assinaturas

Para executar manualmente a tarefa de seleção do próximo livro do mês:

```bash
npm run start_book
```

## Tecnologias utilizadas

- Next.js 15
- NextAuth v5
- Prisma ORM
- PostgreSQL
- Stripe
- Tailwind CSS
- PDF.js para visualização de PDFs
- Nodemailer para envio de emails
