/*
  - news/[slug]/<layout.js>
  - news/[slug]/@modal
    # move (.)image to @modal
      -> we don't need to rename to (..)image because @modal does not count as url (check archive/@archive -> @archive not count)
    # add page.js or default.js


--------------------

  - test: /news/[slug] -> click on image -> will see overlay


--------------------

  🌲 Replace page.js with default.js
    - You might be getting an error when trying to refresh the image detail route (/news/<some-news-identifier>/image).
    - In that case, rename news/[slug]/@modal/page.js to default.js.


*/
