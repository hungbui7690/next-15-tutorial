/*
  Setting Up & Using Parallel Routes
  - https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
  - rendering multiple pages in a single route


-------------------------

  - /archive/@archive/page.js
  - /archive/@latest/page.js.js
  - /archive/layout.js
    -> export default function ArchiveLayout({ archive, latest }) {}

  🧪 http://localhost:3000/archive
    -> show content of 2 pages (@archive and @latest) in just a single route -> /archive 



*/
