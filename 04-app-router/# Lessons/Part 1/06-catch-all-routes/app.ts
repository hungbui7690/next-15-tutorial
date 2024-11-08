/*
  Configure Catch-All Routes 

-----------------------

  Catch-all Segments
  - pages/shop/[...slug].js	
    -> /shop/a/b/c ->	{ slug: ['a', 'b', 'c'] }
    ❌ this won't match /shop


-----------------------

  Optional Catch-all Segments
  - pages/shop/[[...slug]].js	
    -> /shop -> { slug: <undefined> }
    -> /shop/a/b/c -> 	{ slug: ['a', 'b', 'c'] }
    ❎ this match /shop

  🌲 we will catch /archive/years/month -> /archive/2002/6


-----------------------

  - archive/
    - @archive
      - [[...filter]]
        - <page.js>
      - <page.js>
    - @latest
    - layout.js
  ❌ this setup will cause error -> since we use optional catch all segments <archive/@archive/[[...filter]]/page.js> -> it will catch /archive and its nested routes
      -> but we also has <@archive/page.js> -> also catch /archive and its nested routes
      => this will cause conflicts 

  - archive/
    - @archive
      - [[...filter]]
        - <page.js>
    - @latest
    - layout.js
  ❎ to fix -> just remove <@archive/page.js>




*/
