# Antonina Kachusova Portfolio

[English](#english) · [Українська](#українська)

## Links

- [View Live Site](https://antonina-kachusova-portfolio.vercel.app/)
- [GitHub Repository](https://github.com/antonina-kachusova/Antonina-Kachusova-Portfolio)
- [LinkedIn](https://www.linkedin.com/in/antonina-kachusova/)

---

## English

### About the project

This is my personal portfolio website created to present my frontend projects, technical skills, certificates, and contact information in a clear and structured way.

The portfolio is built with Next.js App Router and includes a Home page, About page, Projects page, dynamic project detail pages, and Contact page. Each project has its own card, technology stack, GitHub repository link, live demo link, screenshot, and detailed description.

The goal of this portfolio is to show my practical experience as a Junior Frontend Developer through real learning and portfolio projects built with React, Next.js, TypeScript, JavaScript, APIs, routing, forms, localStorage, authentication, database integration, and responsive UI.

### Main features

- Responsive personal portfolio website
- Home page with selected featured projects
- About page with skills, education, certificates, and developer background
- Projects page with all portfolio projects
- Dynamic project detail pages using `/projects/[slug]`
- Reusable project cards
- GitHub and Live Demo buttons for each project
- Project screenshots and demo GIFs
- Skills grouped by technology area
- Contact page with links and contact information
- Clean UI structure built with reusable components
- Responsive layout for desktop, tablet, and mobile screens

### Tech stack

- Next.js with App Router
- React
- JavaScript
- Plain CSS
- Dynamic Routes
- Reusable Components
- Responsive Design
- Vercel Deployment

### Project structure

```text
app/
  layout.js
  page.js
  globals.css
  about/
    page.js
  projects/
    page.js
    [slug]/
      page.js
  contact/
    page.js

components/
  Header.js
  Footer.js
  ProjectCard.js
  ButtonLink.js
  SkillList.js

data/
  projects.js
  skills.js

public/
  images/
    projects/
  certificates/
```

### Featured projects

#### Next.js Dashboard

A full-stack financial dashboard built while completing the official Vercel Next.js App Router course. The project includes protected dashboard routes, authentication, PostgreSQL-backed data, invoice management, search, URL-based pagination, Server Actions, form validation, error handling, loading skeletons, streaming UI, metadata, and responsive design.
### What users can do
- Open the public landing page and sign in with demo credentials
- Access protected dashboard pages after authentication
- View a dashboard overview with revenue data, summary cards, and latest invoices
- Browse customer and invoice information from a PostgreSQL database
- Search invoices by customer name, email, amount, or status
- Navigate invoice results with URL-based pagination
- Create new invoices through a validated form
- Edit existing invoices and update invoice information
- Delete invoices from the dashboard
- See accessible validation messages when form data is missing or incorrect
- View loading skeletons while dashboard sections are loading
- See custom error and not-found pages when something goes wrong
- Use the dashboard on desktop and mobile screens
- Sign out after reviewing the protected pages

**Tech stack:** Next.js, React, TypeScript, App Router, React Server Components, Server Actions, PostgreSQL, Auth.js / NextAuth.js, Zod, Tailwind CSS, Suspense, Vercel

#### Jobly — Job Application Tracker

A responsive job application tracker built with Next.js, React, and TypeScript. The app helps users save job opportunities, track application progress, search and filter vacancies, open dynamic job detail pages, and keep notes for interviews and follow-ups.

**Tech stack:** Next.js, React, TypeScript, App Router, React Hooks, Context API, localStorage, useMemo, Dynamic Routes, Controlled Forms, Validation, Plain CSS, Vercel

#### Next.js Markdown Blog

A Markdown-based blog built with Next.js Pages Router and static generation. The project reads local Markdown posts, extracts metadata, converts Markdown to HTML, and generates dynamic blog post pages. The blog allows users to browse a list of posts, open individual articles, and read content generated from local Markdown files on dynamic Next.js pages.

**Tech stack:** Next.js, React, JavaScript, Markdown, CSS Modules, gray-matter, remark, remark-html, date-fns, Vercel

#### Weather App

A weather application built with React, TypeScript, and Vite. It allows users to search for a city and view current weather data from the OpenWeather API.

**Tech stack:** React, TypeScript, Vite, OpenWeather API, fetch API, CSS, Vercel

#### React Node Article Reader

A full-stack learning project that connects a React frontend with a Node.js backend. The frontend uses React Router and dynamic routes, while the backend provides article data from a local JSON file. React Node Article Reader allows users to browse a list of articles, open individual article pages, and read content loaded from a Node.js backend.

**Tech stack:** React, Vite, JavaScript, React Router, Node.js, JSON, fetch API

#### Magic Task Board

A vanilla JavaScript task board with drag-and-drop cards, persistent browser storage, dark/light theme, priority management, inline editing, and JSON export/import.
### What users can do
- Create tasks with a title and priority level
- Move tasks between Start, Progress, and Done columns using drag and drop
- Reorder tasks inside each column
- Edit task text directly on the board
- Delete tasks with confirmation
- Change task priority between Low, Medium, and High
- Enable or disable automatic sorting by priority
- Expand and collapse long task descriptions with Show more / Show less
- Switch between dark and light themes
- See how many tasks are in each column
- Export the board data as a JSON file
- Import a JSON file to restore board data
- Keep tasks after page reload because the board is saved in localStorage
- Use the board on desktop and mobile screens

**Tech stack:** HTML5, CSS3, JavaScript, Drag & Drop API, DOM, DOM Geometry, getBoundingClientRect, localStorage, JSON, CSS Variables

### Other projects included

- Material UI Pricing Page
- React Router Products SPA
- Redux Toolkit Profile State
- Smart User Search React UseMemo
- Interactive Card Details Form
- Interactive Travel Cards
- JavaScript Calendar with Reminders
- Reaction Speed Game
- Sticky Table of Contents with Scroll Highlight
- Password Generator
- Image Slider React UseEffect
- Sign Up Form React UseState

### What I learned

While building this portfolio, I practiced how to:

- Structure a Next.js App Router project
- Create reusable React components
- Store project data separately in JavaScript files
- Build dynamic detail pages with route parameters
- Organize projects by featured and non-featured status
- Create responsive layouts with plain CSS
- Present project information clearly for employers
- Work with screenshots, demo GIFs, GitHub links, and live demo links
- Improve project descriptions for portfolio and resume use
- Prepare a professional portfolio for Junior Frontend Developer roles

### Getting started locally

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

### Project status

This portfolio is an active personal project. It is being updated with new frontend and Next.js projects, improved descriptions, screenshots, demo GIFs, certificates, and resume-ready project summaries.

### Author

Antonina Kachusova  
Junior Frontend Developer

- GitHub: <https://github.com/antonina-kachusova>
- LinkedIn: <https://www.linkedin.com/in/antonina-kachusova/>
- Email: <antoninakachusova@gmail.com>

---

## Українська

### Про проєкт

Це мій персональний сайт-портфоліо, створений для презентації frontend-проєктів, технічних навичок, сертифікатів і контактної інформації у зрозумілій та структурованій формі.

Портфоліо створене на Next.js App Router і містить головну сторінку, сторінку About, сторінку Projects, динамічні сторінки деталей проєктів і сторінку Contact. Кожен проєкт має окрему картку, technology stack, посилання на GitHub, live demo, screenshot і детальний опис.

Мета цього портфоліо — показати мій практичний досвід як Junior Frontend Developer через навчальні та портфоліо-проєкти, створені з React, Next.js, TypeScript, JavaScript, APIs, routing, forms, localStorage, authentication, database integration і responsive UI.

### Основні можливості

- Адаптивний персональний сайт-портфоліо
- Головна сторінка з обраними featured projects
- About page з навичками, освітою, сертифікатами та developer background
- Projects page з усіма портфоліо-проєктами
- Динамічні сторінки деталей проєктів через `/projects/[slug]`
- Багаторазові project cards
- Кнопки GitHub і Live Demo для кожного проєкту
- Screenshots і demo GIFs для проєктів
- Навички, згруповані за технологічними напрямами
- Contact page з контактами та посиланнями
- Чиста структура UI з reusable components
- Responsive layout для desktop, tablet і mobile screens

### Технології

- Next.js with App Router
- React
- JavaScript
- Plain CSS
- Dynamic Routes
- Reusable Components
- Responsive Design
- Vercel Deployment

### Структура проєкту

```text
app/
  layout.js
  page.js
  globals.css
  about/
    page.js
  projects/
    page.js
    [slug]/
      page.js
  contact/
    page.js

components/
  Header.js
  Footer.js
  ProjectCard.js
  ButtonLink.js
  SkillList.js

data/
  projects.js
  skills.js

public/
  images/
    projects/
  certificates/
```

### Обрані проєкти

#### Next.js Dashboard

Full-stack financial dashboard, створений під час проходження офіційного курсу Vercel Next.js App Router. Проєкт містить protected dashboard routes, authentication, PostgreSQL-backed data, invoice management, search, URL-based pagination, Server Actions, form validation, error handling, loading skeletons, streaming UI, metadata і responsive design.
### Що може робити користувач
- Відкрити публічну головну сторінку та увійти через demo credentials
- Отримати доступ до захищених dashboard-сторінок після автентифікації
- Переглядати dashboard overview з revenue data, summary cards і latest invoices
- Переглядати дані customers та invoices з PostgreSQL database
- Шукати invoices за іменем клієнта, email, сумою або статусом
- Перемикати сторінки результатів через URL-based pagination
- Створювати нові invoices через форму з валідацією
- Редагувати наявні invoices і оновлювати дані рахунку
- Видаляти invoices з dashboard
- Бачити доступні повідомлення валідації, якщо дані форми відсутні або некоректні
- Бачити loading skeletons, поки секції dashboard завантажуються
- Бачити custom error і not-found pages, якщо сталася помилка
- Користуватися dashboard на комп’ютері та мобільному екрані
- Вийти із захищених сторінок після перегляду

**Tech stack:** Next.js, React, TypeScript, App Router, React Server Components, Server Actions, PostgreSQL, Auth.js / NextAuth.js, Zod, Tailwind CSS, Suspense, Vercel

#### Jobly — Job Application Tracker

Адаптивний застосунок для відстеження відгуків на вакансії, створений з Next.js, React і TypeScript. Застосунок допомагає користувачам зберігати вакансії, відстежувати статуси, шукати й фільтрувати записи, відкривати динамічні сторінки деталей і вести нотатки для співбесід.

**Tech stack:** Next.js, React, TypeScript, App Router, React Hooks, Context API, localStorage, useMemo, Dynamic Routes, Controlled Forms, Validation, Plain CSS, Vercel

#### Next.js Markdown Blog

Markdown-based blog, створений з Next.js Pages Router і static generation. Проєкт читає локальні Markdown posts, отримує metadata, конвертує Markdown у HTML і генерує динамічні сторінки постів. Блог дозволяє користувачам переглядати список постів, відкривати окремі статті та читати контент, згенерований із локальних Markdown-файлів на динамічних сторінках Next.js.

**Tech stack:** Next.js, React, JavaScript, Markdown, CSS Modules, gray-matter, remark, remark-html, date-fns, Vercel

#### Weather App

Weather application, створений з React, TypeScript і Vite. Застосунок дозволяє користувачам шукати місто і переглядати актуальні weather data з OpenWeather API.

**Tech stack:** React, TypeScript, Vite, OpenWeather API, fetch API, CSS, Vercel

#### React Node Article Reader

Full-stack learning project, який з’єднує React frontend із Node.js backend. Frontend використовує React Router і dynamic routes, а backend віддає article data з локального JSON-файлу. React Node Article Reader дозволяє користувачам переглядати список статей, відкривати окремі сторінки статей і читати контент, завантажений з Node.js backend.

**Tech stack:** React, Vite, JavaScript, React Router, Node.js, JSON, fetch API

#### Magic Task Board

Vanilla JavaScript task board з drag-and-drop cards, browser storage, dark/light theme, priority management, inline editing і JSON export/import.
### Що може робити користувач
- Створювати завдання з назвою та рівнем пріоритету
- Переміщувати завдання між колонками Start, Progress і Done за допомогою drag and drop
- Змінювати порядок завдань усередині кожної колонки
- Редагувати текст завдання прямо на дошці
- Видаляти завдання після підтвердження
- Змінювати пріоритет завдання між Low, Medium і High
- Увімкнути або вимкнути автоматичне сортування за пріоритетом
- Розгортати й згортати довгі описи завдань через Show more / Show less
- Перемикати темну та світлу тему
- Бачити кількість завдань у кожній колонці
- Експортувати дані дошки у JSON-файл
- Імпортувати JSON-файл, щоб відновити дані дошки
- Зберігати завдання після перезавантаження сторінки завдяки localStorage
- Користуватися дошкою на комп’ютері та мобільному екрані

**Tech stack:** HTML5, CSS3, JavaScript, Drag & Drop API, DOM, DOM Geometry, getBoundingClientRect, localStorage, JSON, CSS Variables

### Інші проєкти в портфоліо

- Material UI Pricing Page
- React Router Products SPA
- Redux Toolkit Profile State
- Smart User Search React UseMemo
- Interactive Card Details Form
- Interactive Travel Cards
- JavaScript Calendar with Reminders
- Reaction Speed Game
- Sticky Table of Contents with Scroll Highlight
- Password Generator
- Image Slider React UseEffect
- Sign Up Form React UseState

### Що я вивчила

Під час створення цього портфоліо я практикувала:

- Структуру Next.js App Router project
- Створення reusable React components
- Збереження project data в окремих JavaScript файлах
- Динамічні detail pages з route parameters
- Організацію проєктів за featured і non-featured status
- Responsive layout з plain CSS
- Чітку презентацію проєктів для роботодавців
- Роботу зі screenshots, demo GIFs, GitHub links і live demo links
- Покращення описів проєктів для портфоліо і резюме
- Підготовку professional portfolio для Junior Frontend Developer roles

### Локальний запуск

Встановити залежності:

```bash
npm install
```

Запустити development server:

```bash
npm run dev
```

Відкрити:

```text
http://localhost:3000
```

### Доступні команди

```bash
npm run dev      # Запустити development server
npm run build    # Створити production build
npm run start    # Запустити production server
npm run lint     # Запустити ESLint
```

### Статус проєкту

Це активний персональний проєкт. Портфоліо оновлюється новими frontend і Next.js проєктами, покращеними описами, screenshots, demo GIFs, сертифікатами та project summaries для резюме.

### Авторка

Антоніна Качусова  
Junior Frontend Developer

- GitHub: <https://github.com/antonina-kachusova>
- LinkedIn: <https://www.linkedin.com/in/antonina-kachusova/>
- Email: <antoninakachusova@gmail.com>
