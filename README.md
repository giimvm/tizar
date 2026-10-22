#  Tizar

Landing Page desenvolvida com React para apresentação da plataforma Tizar.

##  Sobre o Projeto

A Tizar é uma plataforma voltada para conectar talentos da área comercial às melhores oportunidades do mercado, utilizando tecnologia para aproximar profissionais e empresas.

Este repositório contém o desenvolvimento do frontend da aplicação, construído utilizando React e Vite.

---

## 🛠️ Tecnologias Utilizadas

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Git
- GitHub

---

## 📂 Estrutura do Projeto

```text
src/
│
├── assets/
│   ├── icons/
│   └── images/
│
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── ComoFunciona/
│   ├── AreasAtuacao/
│   ├── Diferenciais/
│   ├── Resultados/
│   ├── Contato/
│   └── Footer/
│
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── responsive.css
│
├── App.jsx
└── main.jsx
```

---

## 🎯 Padrão de Desenvolvimento

Cada componente possui sua própria pasta contendo:

```text
NomeComponente/
├── NomeComponente.jsx
└── NomeComponente.css
```

Exemplo:

```text
Hero/
├── Hero.jsx
└── Hero.css
```

### Estilos

- `global.css` → estilos globais da aplicação.
- `variables.css` → variáveis de cores, fontes e espaçamentos.
- `responsive.css` → regras de responsividade.

---

## ▶️ Executando o Projeto

### Instalar dependências

```bash
npm install
```

### Executar em ambiente de desenvolvimento

```bash
npm run dev
```

### Gerar build

```bash
npm run build
```

---

## 🌳 Fluxo de Branches

### Branch principal

```text
main
```

Contém apenas versões estáveis do projeto.

### Branch de desenvolvimento

```text
develop
```

Utilizada para integração das funcionalidades.

### Branches de feature

Exemplos:

```text
feature/header
feature/hero
feature/contato
feature/footer
```

Cada integrante deverá criar sua branch a partir da `develop`.

---

## ✅ Convenção de Commits

### Nova funcionalidade

```bash
git commit -m "feat: adiciona seção hero"
```

### Correção de bugs

```bash
git commit -m "fix: corrige responsividade do header"
```

### Ajustes de estilo

```bash
git commit -m "style: ajusta espaçamento da seção contato"
```

### Documentação

```bash
git commit -m "docs: atualiza README"
```

---

## 👥 Divisão de Responsabilidades

| Integrante | Responsável |
|------------|-------------|
| Integrante 1 | Header + Hero |
| Integrante 2 | Como Funciona + Áreas de Atuação |
| Integrante 3 | Diferenciais + Resultados |
| Integrante 4 | Contato + Footer |

---

## 📱 Responsividade

A aplicação deve ser desenvolvida considerando:

- Desktop
- Tablet
- Mobile

Toda nova funcionalidade deve ser validada nos três cenários.

---

## 📌 Boas Práticas

- Não commitar diretamente na `main`.
- Sempre atualizar sua branch antes de iniciar uma tarefa.
- Realizar Pull Request para a `develop`.
- Manter a padronização de nomenclatura dos componentes.
- Revisar alterações antes de abrir um Pull Request.

---

## 👨‍💻 Equipe

- Giovana Monteiro
- Leticia Minucelli
- Luan Alves
- Luann Flor

---