/*
  Foodie - Starter
  1. assets/
  2. public/images
  3. layout.js
  4. global.css


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Exercise 
  - create 3 routes 
    + /meals
    + /meals/share
    + /community
  - create a dynamic route
    + /meals/[slug]


----------------------

  Solution 

  1. /meals/page.js
  2. /meals/share/page.js
  3. /community/page.js
  4. /meals/[slug]/page.js -> dynamic route


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  CSS Module vs Adding Custom Component to Layout
  - https://nextjs.org/docs/app/building-your-application/styling#css-modules

  5. components/main-header.js -> navbar
    -> main-header.module.css
    -> import <classes> from './main-header.module.css' or import <styles> from './main-header.module.css'
    -> <nav className={classes.nav}>
  6. app/<layout.js>


  🌲 now, we are using the <img> for the logo -> next, we will use nextjs image to optimize the image


*/
