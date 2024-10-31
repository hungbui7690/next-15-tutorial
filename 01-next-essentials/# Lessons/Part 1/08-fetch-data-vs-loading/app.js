/*
  Fetching Data By Leveraging NextJS & Fullstack Capabilities
  1. @lib/meals.js
  2. app/meals/page.js

  🌲 Note 
    -> don't use useEffect() in meals/page.js to fetch data
    -> but create @lib/meal.js to fetch data

  🍖 @lib/meals.js -> we turn the function into async function -> since later, we want to handle loading state


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Adding A Loading Page
  - click on navbar -> then go back -> using cache -> no loading
  - refresh -> loading

  3. meals/loading.js or app/loading.js
    -> since we add this: await new Promise((resolve) => setTimeout(resolve, 2000))


  🌲 It caches even more aggressively when running in prod mode -> learn later


*/
