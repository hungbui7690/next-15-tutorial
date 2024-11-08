/*
  Separate Actions
  1. create root/actions/posts.js
    -> add 'use server' on top of file
  2. new-post/page.js -> import


-----------------------

  "use server" Does Not Guarantee Server-side Execution!
  - In the previous lectures, you saw a lot of usage of the "use server" directive.

  - What's very important to understand about this directive is the following: It's just "telling" NextJS that something should become a server action. I.e., that NextJS should send requests to that function behind the scenes (kind of).

  - "use server" does not mean or guarantee that the code will only execute on the server! Whilst that will be the case for server actions, you can't rely on the usage of "use server" to "hide code" from the client!

  - If you have code that must never end up on the client-side (no matter if it's a server action or not), you should instead use the server-only package as described here: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment.


*/
