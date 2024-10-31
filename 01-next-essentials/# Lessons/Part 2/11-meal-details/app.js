/*
  Loading & Rendering Meal Details via Dynamic Routes & Route Parameters
  1. lib/meals.js 
    -> add getMeal() -> single meal


--------------------------

  2. meals/[mealSlug]/page.js

      export default function MealDetailsPage({ params }) {}
      -> params.mealSlug

      <p
        className={classes.instructions}
        dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}
      ></p>
      -> similar to innerHTML


\\\\\\\\\\\\\\\\\\\\\\\\\\

  Throwing Not Found Errors For Individual Meals
  3. meals/[mealSlug]/page.js
    - import { notFound } from 'next/navigation'
    - notFound() -> navigate to 404 page



*/
