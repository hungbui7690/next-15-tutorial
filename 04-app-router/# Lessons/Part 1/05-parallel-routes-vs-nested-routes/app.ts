/*
  Parallel Routes & Nested Routes
  - Parallel routes are created using named slots. Slots are defined with the <@folder> convention.
  - Slots are not route segments and do not affect the URL structure


-------------------------

  - By default, Next.js keeps track of the active state (or subpage) for each slot. However, the content rendered within a slot will depend on the type of navigation:
    # Soft Navigation: During client-side navigation, Next.js will perform a partial render, changing the subpage within the slot, while maintaining the other slot's active subpages, even if they don't match the current URL.
    # Hard Navigation: After a full-page load (browser refresh), Next.js cannot determine the active state for the slots that don't match the current URL. Instead, it will render a <default.js> file for the unmatched slots, or <404> if <default.js> doesn't exist.


-------------------------

  - You can define a <default.js> file to render as a fallback for unmatched slots during the initial load or full-page reload.


-------------------------

  - lib/news.js
    -> utility functions -> getNewsForYears, getNewsForYear, getNewsForYearAndMonth...
  - @archive/[year]/page.js
  - @latest/default.js

  🌲 we can have @latest/<default.js> & @latest/<page.js> at the same time -> or we just need to have only <default.js> file


*/
