# Saynt AI

Marketing site for **Saynt AI**, built with Next.js (App Router) and Tailwind CSS. It covers the company's landing page, product page for ConnectEd, careers, blog, and about pages.

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [React Hook Form](https://react-hook-form.com/) + [TanStack Query](https://tanstack.com/query) for the admin login flow
- [react-lottie](https://github.com/chenqingspring/react-lottie) for Lottie animations

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) to view the site.

## Project Structure

```
src/app/
├── Home/            # Landing page
├── About/           # About Us page
├── Product/         # ConnectEd product page
├── Career/          # Careers / job openings
├── Blogs/           # Blog listing
├── SayntBlog/       # Blog article template
├── Admin/           # Admin login (not linked from the public nav)
└── Components/      # Shared UI components (Navbar, FlipCard, Article, Lamp)
```

## Scripts

| Command         | Description                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the dev server on port 4000  |
| `npm run build` | Create a production build          |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Notes

- The `/Admin` route expects a login API at `NEXT_PUBLIC_API_URL`/user/login (not included in this repo) and is excluded from search indexing.
