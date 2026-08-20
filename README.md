# 📅 Plataforma de Reserva

> Sistema web completo para gerenciamento de reservas, desenvolvido com **React, Node.js, Express, PostgreSQL e Prisma**.

A **Plataforma de Reserva** é uma aplicação full stack criada para permitir que usuários realizem reservas de forma simples e segura, enquanto o sistema gerencia autenticação, disponibilidade e confirmação das reservas.

O projeto foi desenvolvido com foco em **arquitetura organizada, autenticação, persistência de dados, validação e integração entre frontend e backend**.

---

## 🚀 Demonstração

🌐 **Frontend:** Em breve

⚙️ **Backend/API:** Em breve

📂 **Repositório:**
`https://github.com/JGCV2007`

---

## ✨ Funcionalidades

### 👤 Autenticação

* Cadastro de usuários
* Login
* Senhas criptografadas
* Autenticação utilizando JWT
* Rotas protegidas
* Controle de acesso às reservas

### 📅 Reservas

* Criar reservas
* Consultar reservas
* Atualizar reservas
* Cancelar reservas
* Associar reservas aos usuários
* Controle das informações das reservas

### 📧 Confirmação

* Envio de e-mails de confirmação
* Integração com Resend
* Notificações relacionadas às reservas

### 🛡️ Segurança e validação

* JWT para autenticação
* bcrypt para proteção das senhas
* Zod para validação dos dados
* Variáveis de ambiente para informações sensíveis
* Middleware para proteção das rotas

---

# 🏗️ Arquitetura

O projeto utiliza uma arquitetura **Frontend + API + Banco de Dados**.

```text
┌─────────────────────┐
│      Frontend       │
│                     │
│ React + Vite        │
│ Tailwind CSS        │
└──────────┬──────────┘
           │
           │ HTTP / REST API
           ▼
┌─────────────────────┐
│       Backend       │
│                     │
│ Node.js + Express   │
│ JWT + Zod + Prisma  │
└──────────┬──────────┘
           │
           │ Prisma ORM
           ▼
┌─────────────────────┐
│      PostgreSQL     │
│                     │
│   Banco de Dados    │
└─────────────────────┘

           │
           ▼
┌─────────────────────┐
│       Resend        │
│                     │
│ E-mails de reserva  │
└─────────────────────┘
```

---

# 🛠️ Tecnologias

## Frontend

| Tecnologia   | Utilização                  |
| ------------ | --------------------------- |
| React        | Interface da aplicação      |
| Vite         | Ambiente de desenvolvimento |
| Tailwind CSS | Estilização                 |
| JavaScript   | Linguagem principal         |

## Backend

| Tecnologia | Utilização             |
| ---------- | ---------------------- |
| Node.js    | Runtime                |
| Express    | API REST               |
| Prisma     | ORM                    |
| PostgreSQL | Banco de dados         |
| JWT        | Autenticação           |
| bcrypt     | Criptografia de senhas |
| Zod        | Validação              |
| Resend     | Envio de e-mails       |

## Deploy

| Serviço  | Utilização |
| -------- | ---------- |
| Vercel   | Frontend   |
| Render   | Backend    |
| Supabase | PostgreSQL |

---

# 📁 Estrutura do projeto

```text
PlataformaDeReserva/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   └── App.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── repositories/
│   │   ├── routes/
│   │   └── services/
│   │
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# 🔐 Autenticação

A autenticação utiliza **JWT (JSON Web Token)**.

Fluxo simplificado:

```text
Usuário
   │
   ▼
Login
   │
   ▼
Backend
   │
   ├── Verifica usuário
   │
   ├── Verifica senha
   │
   └── Gera JWT
          │
          ▼
       Frontend
          │
          ▼
    Requisições autenticadas
          │
          ▼
     Middleware JWT
          │
          ▼
       Controller
```

As senhas não são armazenadas diretamente no banco de dados. O sistema utiliza **bcrypt** para realizar o hash das senhas.

---

# 📡 API

## 🔑 Autenticação

### Registrar usuário

```http
POST /auth/register
```

Exemplo:

```json
{
  "name": "Jean Vieira",
  "email": "usuario@email.com",
  "password": "123456"
}
```

### Login

```http
POST /auth/login
```

Exemplo:

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

---

## 📅 Reservas

### Criar reserva

```http
POST /reservations
```

### Listar reservas

```http
GET /reservations
```

### Buscar reserva

```http
GET /reservations/:id
```

### Atualizar reserva

```http
PUT /reservations/:id
```

### Cancelar reserva

```http
DELETE /reservations/:id
```

As rotas protegidas exigem um token JWT válido.

---

# 🗄️ Banco de Dados

O projeto utiliza **PostgreSQL** como banco de dados e **Prisma ORM** para comunicação com a aplicação.

Estrutura conceitual:

```text
┌──────────────┐
│    User      │
├──────────────┤
│ id           │
│ name         │
│ email        │
│ password     │
└──────┬───────┘
       │
       │ 1:N
       ▼
┌──────────────┐
│ Reservation  │
├──────────────┤
│ id           │
│ date         │
│ time         │
│ status       │
│ userId       │
└──────────────┘
```

---

# ⚙️ Instalação

## 1. Clone o repositório

```bash
git clone https://github.com/JGCV2007/PlataformaDeReserva.git
```

Entre na pasta:

```bash
cd PlataformaDeReserva
```

---

# 💻 Backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo:

```text
.env
```

Configure as variáveis:

```env
PORT=3000

DATABASE_URL="sua_connection_string"

JWT_SECRET="sua_chave_secreta"

CLIENT_URL="http://localhost:5173"

RESEND_API_KEY="sua_chave_resend"
```

Execute as migrations:

```bash
npx prisma migrate dev
```

Gere o Prisma Client:

```bash
npx prisma generate
```

Inicie o servidor:

```bash
npm run dev
```

---

# 🎨 Frontend

Entre na pasta:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

O Vite disponibilizará a aplicação normalmente em:

```text
http://localhost:5173
```

---

# 🔄 Fluxo da aplicação

```text
                 USUÁRIO
                    │
                    ▼
              ┌───────────┐
              │ Frontend  │
              │  React    │
              └─────┬─────┘
                    │
                    ▼
              ┌───────────┐
              │   API     │
              │ Express   │
              └─────┬─────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
   ┌─────────────┐      ┌─────────────┐
   │ PostgreSQL  │      │   Resend    │
   │   Prisma    │      │   E-mail    │
   └─────────────┘      └─────────────┘
```

---

# 🧪 Validação

O sistema utiliza **Zod** para validar os dados recebidos pela API.

Exemplo conceitual:

```text
Request
   │
   ▼
Middleware
   │
   ▼
Zod
   │
   ├── ❌ Dados inválidos
   │
   └── ✅ Dados válidos
             │
             ▼
         Controller
```

Isso ajuda a evitar que dados inválidos sejam processados pela aplicação.

---

# 🔒 Variáveis de ambiente

As informações sensíveis **não devem ser enviadas para o GitHub**.

O arquivo `.env` deve estar incluído no `.gitignore`:

```gitignore
.env
.env.local
.env.production
node_modules/
```

---

# 📌 Objetivos do projeto

Este projeto foi desenvolvido para colocar em prática conceitos de desenvolvimento **Full Stack**, incluindo:

* Desenvolvimento de APIs REST
* React
* Node.js
* Express
* PostgreSQL
* Prisma ORM
* Autenticação JWT
* Criptografia de senhas
* Validação de dados
* Arquitetura de software
* Variáveis de ambiente
* Integração com serviços externos
* Deploy de aplicações
* Git e GitHub

---

# 🚧 Próximas melhorias

* [ ] Recuperação de senha
* [ ] Confirmação de e-mail
* [ ] Painel administrativo
* [ ] Gerenciamento de usuários
* [ ] Controle de disponibilidade
* [ ] Calendário de reservas
* [ ] Sistema de notificações
* [ ] Histórico de reservas
* [ ] Dashboard com estatísticas
* [ ] Testes automatizados
* [ ] Dockerização da aplicação
* [ ] CI/CD
* [ ] Melhorias de segurança
* [ ] Documentação completa da API com Swagger

---

# 📚 Conceitos praticados

```text
Frontend
├── React
├── Componentização
├── Hooks
├── Rotas
└── Consumo de API

Backend
├── Node.js
├── Express
├── REST API
├── Controllers
├── Services
├── Repositories
├── Middlewares
└── JWT

Database
├── PostgreSQL
├── Prisma
├── Relacionamentos
├── Migrations
└── Queries

DevOps
├── Git
├── GitHub
├── Vercel
├── Render
└── Environment Variables
```

---

# 👨‍💻 Autor

**Jean Gabriel Vieira**

Estudante de **Ciência da Computação** e desenvolvedor com foco em **Desenvolvimento Full Stack, Backend, APIs e infraestrutura**.

### 🔗 Contatos

* 💼 LinkedIn: [linkedin.com/in/jeanvieira-dev](https://www.linkedin.com/in/jeanvieira-dev)
* 🐙 GitHub: [github.com/JGCV2007](https://github.com/JGCV2007)

---

# ⭐ Contribuição

Contribuições, sugestões e melhorias são bem-vindas.

Para contribuir:

```bash
git fork
git clone
git checkout -b feature/nova-feature
git commit -m "feat: adiciona nova feature"
git push origin feature/nova-feature
```

Depois, abra um **Pull Request**.

---

# 📄 Licença

Este projeto foi desenvolvido para fins **educacionais e de portfólio**.

---

<div align="center">

### 📅 Plataforma de Reserva

**React • Node.js • Express • PostgreSQL • Prisma**

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório.

</div>
