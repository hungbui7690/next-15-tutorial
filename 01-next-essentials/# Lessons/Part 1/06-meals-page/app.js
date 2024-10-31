/*
  Using Client Components Efficiently
  1. community/page.js
  2. components/main-header.js
    -> setup active class for nav links -> create <nav-link.js>

      const path = usePathname()
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Outputting Meals Data & Images With Unknown Dimensions
  3. components/meals/
  3. meals/page.js
      -> <Image src={image} alt={title} fill />


*/
