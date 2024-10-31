/*
  Server Action Responses & useFormState
  - Once the fields have been validated on the server, you can return a serializable object in your action and use the React useFormState hook to show a message to the user.

-----------------------------

  1. lib/actions.js
    - instead of throwing error when inputs are invalid, we change to
      export async function shareMeal(prevState, formData) {} -> we can access to <prevState>
      -> return {message: 'Invalid input.'}

  2. meals/share/page.js
    - we can use useFormState to access the message returned from the actions

      🎐 similar to useState in React -> init message = null
        -> const [state, formAction] = useFormState(shareMeal, { message: null })
      🍉 {state.message && <p>{state.message}</p>}
      🍖 change formAction from <shareMeal> to <formAction>
        -> before: <form className={classes.form} action={shareMeal}>
        -> after:  <form className={classes.form} action={formAction}>
      🌲 since useFormState() has 2 args -> in actions.js, we need to have 2 params
        -> export async function shareMeal(prevState, formData) {}



*/
