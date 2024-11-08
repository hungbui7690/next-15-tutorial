/*
  <useFormState>
  - for validation

  ❌ For some unknown reason, the React team decided to suddenly change this Hook's name to <useActionState>. In addition, it now must be imported from react instead of react-dom.


-----------------------

  - we can add <required> to <input> -> but it's not safe -> inspect elements -> can remove it 
    -> we need to check from our server -> not from our client


-----------------------

  - const initialState = {
      message: '',
    }

  - const [state, formAction] = useFormState(<createPost>, initialState)


-----------------------

  - for image validation -> need to check size as well
    -> if (!image || image.size === 0) 


-----------------------

  1. @components/post-form.tsx
  2. news/page.tsx

  🌲 we need to create 2 files because useFormState needs to be 'client' component, whereas new-post/page.js is 'server' actions -> we need separate these 

  🍉 when changing to useFormState -> we need to add prevState to the param list
    -> async function createPost(<prevState>, <formData>) {}




*/
