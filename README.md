# Mother's Day Tribute Blog (moms-day-project)

This project is a Mother’s Day Tribute Blog developed using Next.js. It simulates building a mini-blog website focused on celebrating mothers, showcasing frontend skills in UI replication, routing, dynamic pages, and responsiveness. The goal is to create a heartwarming space with tribute stories, articles, and category browsing.

## Project Overview

The application aims to provide a platform to:
*   Display featured tribute stories in a carousel.
*   Allow users to explore articles by category.
*   Showcase recent articles with key details (image, title, excerpt, reading time, category).
*   Provide detailed views for individual articles.
*   (Bonus) Implement search and category filtering.

Data is managed locally using `lib/data.ts`.

## Key Technologies

*   [Next.js](https://nextjs.org/)
*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [pnpm](https://pnpm.io/)

## Features Implemented

*   **Framework:** Next.js with TypeScript
*   **Styling:** Tailwind CSS
*   **Routing:**
    *   Home Page (`/`) displaying recent articles.
    *   Article Detail Page (`/articles/[slug]`) for dynamic content.
    *   Category Page (`/categories`)
    *   Contact Page (`/contact`)
*   **Components:** Reusable components for Header, Footer, Article Cards.
*   **Data:** Local data management in `lib/data.ts`.
*   **Layout:** Basic site layout defined in `app/layout.tsx`.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
