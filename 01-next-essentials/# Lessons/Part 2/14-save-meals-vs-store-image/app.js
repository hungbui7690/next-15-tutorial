/*
  Storing Server Actions in Separate Files
  1. lib/action.js
    ❎ must have 'user server'
  2. app/meals/share/page.js 
    -> import { shareMeal } from '@/lib/actions'
    -> <form className={classes.form} action={shareMeal}>


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Save Meals to Database
  - steps:
    + convert title to slug
    + save the image to public/images
      # now, we temp save the image to /public -> later, we will save to image hosting provider (ImageKit, Cloudinary, or S3, etc.)
    + set meal.image path
    + insert to db 


-------------------------------

  Creating a Slug & Sanitizing User Input for XSS Protection
  - A slug is a string that is used to uniquely identify a resource in a URL-friendly way. It is typically used in the URL to identify a specific page or post on a website. A slug consists of a set of characters that are easy to read and remember, and that accurately describe the content of the resource.
  - In our project, we want to change our title to a slug 
  

-------------------------------

  - simply slug generator
      function slugify(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
        str = str.toLowerCase(); // convert string to lowercase
        str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
                .replace(/\s+/g, '-') // replace spaces with hyphens
                .replace(/-+/g, '-'); // remove consecutive hyphens
        return str;
      }


-------------------------------

  - many libraries to generate slug
    # lodash
      -> const kebabCaseString = _.kebabCase("Hello World") -> hello-world
    # slugify
        slugify('I ♥ Dogs'); // i-love-dogs
        slugify('  Déjà Vu!  '); // deja-vu
        slugify('fooBar 123 $#%'); // foo-bar-123
        slugify('я люблю единорогов'); // ya-lyublyu-edinorogov
    # voca
    ...


-------------------------------

  - npm i slugify
    -> generate slug from string
  - npm i xss
    -> sanitize user input -> prevent from cross site scripting -> since we use dangerouslySetInnerHTML

  3. lib/meals.js + actions.js
  4. app/meals/share/page.js


*/
