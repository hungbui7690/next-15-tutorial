/*
  Intercepting Navigation & Using Interception Routes
  - For example, when clicking on a photo in a feed, you can display the photo in a modal, overlaying the feed. In this case, Next.js intercepts the /photo/123 route, masks the URL, and overlays it over /feed.
  - However, when navigating to the photo by clicking a shareable URL or by refreshing the page, the entire photo page should render instead of the modal. No route interception should occur.
  🌲 Depends of the way we go to the page -> different renders will be shown


-------------------------

  Convention
  - Intercepting routes can be defined with the (..) convention, which is similar to relative path convention ../ but for segments.
  - You can use:
      (.) to match segments on the same level
      (..) to match segments one level above
      (..)(..) to match segments two levels above
      (...) to match segments from the root app directory



-------------------------

  - feed
    - layout.js
    - <(..photo)>
      - [id]
        - page.js
  - <photo>
    - [id]
      - page.js
  - layout.js
  - page.js

  => For example, you can intercept the <photo> segment from within the <feed> segment by creating a <(..)photo> directory.
  => Note that the (..) convention is based on route segments, not the file-system.


-------------------------

  - news/[slug]/<(.)image>/page.js 
    -> we want to intercept the /image route
  - news/[slug]/image/page.js -> we don't change anything

  🍖 since news/[slug]/image in the same folder with news/[slug]/(.)image/ -> we use (.)
    -> the photo example above use (..) -> since from inside of /feed to /photo -> we need to go out 1 level -> (..) to match segments one level above


-------------------------

  - click on the image in /news/[slug] -> Intercepted!
  - if we reload -> Intercepted! disappears

  🍉 we need to go through /news/[slug] to use the intercept



*/
