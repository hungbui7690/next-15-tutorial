/*
  Setup 
  - npx create-next-app@latest


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Understanding File-based Routing & React Server Components
  - server components:
    # rendered only on the server
    # never on the client


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Navigating Between Pages - Wrong & Right Solution
  - use <a> -> refresh page
  - use <Link> -> navigate between pages


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Project Organization: https://nextjs.org/docs/app/building-your-application/routing/colocation
  - /components
      - button.js -> NOT ROUTABLE
  - /api
      - routes.js -> ROUTABLE
      - db.js -> NOT ROUTABLE
  - /lib 
      - constants.js -> NOT ROUTABLE
  - /dashboard
      - page.js -> ROUTABLE
      - nav.js -> NOT ROUTABLE


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Custom Components
  1. root/components/header.jsx
  2. app/page.js


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Dynamic Routes
  1. app/blog/page.js
  2. app/blog/[slug]/page.js
    -> export default function BlogPostPage(props) {}
    -> export default function BlogPostPage({ params }) {}
    -> params.slug



*/
