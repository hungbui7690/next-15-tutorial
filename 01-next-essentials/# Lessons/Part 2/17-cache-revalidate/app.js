/*
  Building For Production & Understanding NextJS Caching
  - caching will be different in prod 

------------------------

  - to produce prod environment
    # npm run build
    # npm start

  - try to add meal 
  - will be redirected to /meals page
  - new meal is missing -> since at build step, we can see that /meals is static page -> use cached data

  - if we add log to /meals
  - build again 
  - when we run -> no log appears -> use cached data


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Triggering Cache Re-Validations
  1. lib/actions.js
    -> revalidatePath('/meals')

    🌲 revalidatePath('/meals', page) -> default -> this page only
    🍖 revalidatePath('/meals', layout) -> include nested page


  ❌ though /meals is not cache 
    -> new meal's image is not shown after added new meal 
    -> that is because we store image on /public/images
    -> in prod -> /public will be placed to .next/
    -> when we add new image to /public/images -> server will ignore that 
    -> https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets -> Only assets that are in the public directory at build time will be served by Next.js. Files added at request time won't be available. We recommend using a third-party service like Vercel Blob for persistent file storage.



*/
