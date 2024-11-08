import { storePost } from '@/lib/posts'

// 1.
export default function NewPostPage() {
  async function createPost(formData) {
    'use server' // @

    const title = formData.get('title')
    const image = formData.get('image')
    const content = formData.get('content')

    console.log(title, image, content) // @

    storePost({
      imageUrl: '', // $
      title,
      content,
      userId: 1, // $ always upload as user 1 -> later we use user 2 to like user 1's posts
    })
  }

  return (
    <>
      <h1>Create a new post</h1>

      {/* 2. */}
      <form action={createPost}>
        <p className='form-control'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' />
        </p>
        <p className='form-control'>
          <label htmlFor='image'>Image URL</label>
          <input
            type='file'
            accept='image/png, image/jpeg'
            id='image'
            name='image'
          />
        </p>
        <p className='form-control'>
          <label htmlFor='content'>Content</label>
          <textarea id='content' name='content' rows='5' />
        </p>
        <p className='form-actions'>
          <button type='reset'>Reset</button>
          <button>Create Post</button>
        </p>
      </form>
    </>
  )
}
