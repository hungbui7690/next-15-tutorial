/*
  What Is "File-based Routing" And Why Is It Helpful
  - slide
  - React: Code based routing
    -> Switch 
      # Route
      # Route
      # Route
  - Next.js: File-based routing


-----------------------------

  @ Prior to Next 13
  - /pages
    - index.js -> main starting page -> /
    - about.js -> /about
    - products/
      - index.js -> /products
      - [id].js -> /products/[id]


-----------------------------

  @ From Next 13   
  - /app
    - page.js
    - layout.js
    - about/
      - page.js
    - products/
      - page.js
      - [id]
        - page.js


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Adding A First Page
  1. pages/index.js


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Adding a Named - Static Route File
  2. pages/about.js


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Nested Paths & Routes
  3. pages/portfolio/index.js
  4. pages/portfolio/<list.js>
    - localhost:3000/portfolio/list


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Adding Dynamic Paths & Routes
  5. pages/portfolio/[projectid].js
    

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Extracting Dynamic Path Segment Data (Dynamic Routes)
  - http://localhost:3000/portfolio/<something>
  - const router = useRouter()
    # router.pathname -> '/portfolio/[projectid]'
    # router.query -> {projectid: 'something'}
      -> router.query.projectid


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Building Nested Dynamic Routes & Paths
  - each client has a list of projects


--------------------

  6. pages/clients/index.js
  7. pages/clients/[id]/index.js
    -> router.query = {id: '123'}

  8. pages/clients/[id]/[clientprojectid].js
    -> dynamic path with nested path
    -> specific project of a specific client
    -> router.query = {id: '123', clientprojectid: '321'}


--------------------

  - Test: 
    # http://localhost:3000/clients/
    # http://localhost:3000/clients/123
    # http://localhost:3000/clients/123/321


*/
