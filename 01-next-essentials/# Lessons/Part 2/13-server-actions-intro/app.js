/*
  Introducing & Using Server Actions for Handling Form Submissions
  - form submit -> server actions 

  1. meals/share/page.js
      export default function ShareMealPage() {
        async function shareMeal(formData) {
          'use server'
        }
      }
      <form className={classes.form} action={shareMeal}>


*/
