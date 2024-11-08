/*
  Likes
  - we have Likes table -> user_id, post_id
  

-------------------------

  1. actions/posts.js
  2. components/posts.js -> has <LikeButton> -> this button comes from /components/<like-icon.js>
    -> we can add form action to the icon


-------------------------

  Method 1: 
  - add form action directly to the icon
    + export default function LikeButton({ action }) {
        return (
          <button formAction={action} className='like-button'>
        )
      }
  - use in the LikeButton
    + <LikeButton action={togglePostLikeStatus} />


-------------------------

  Method 2: 
  - no need form action in the icon
    + export default function LikeButton() {
        return (
          <button className='like-button'>
        )
      }
  - wrap the from around the button -> then use bind to pass the post id
    + <form action={togglePostLikeStatus.bind(null, post.id)} className={post.isLiked ? 'liked' : ''}>
        <LikeButton />
      </form>


  🌲 need to reload the page to see the style changes


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Revalidate Path
  - nextjs caches the data aggressively -> not pick up the latest date -> revalidate path to purge the cache


-------------------------

  - revalidatePath('/feed', 'layout') -> default
  - revalidatePath('/feed', 'page') 

  🍉 NextJS Docs -> you should not provide type 


-------------------------

  - when we add revalidatePath -> it update the new like status -> but NOT IMMEDIATELY -> fix in next lesson


*/
