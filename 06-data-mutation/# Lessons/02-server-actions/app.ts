/*
  Server Actions in Forms
  - https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations


-----------------------

  - Instead of using Route Handlers -> api/routes.js
    -> NextJS offers a better way to handle data submissions in forms => Server Actions
    -> Form Actions !== Server Actions -> built in React
    -> to transform Form Actions into Server Actions -> <'use server'>


-----------------------

  - <form action='/test'>
    -> browser -> action = url
  - react/nextjs form actions -> <form action={createPost}> -> action = method 
    -> createPost(formData) -> can access to form data

  🌲 must have name attribute 


-----------------------

  1. /new-post/page.js 
    -> create server action 


  ❌ now, we don't store imageURL in the DB


*/
