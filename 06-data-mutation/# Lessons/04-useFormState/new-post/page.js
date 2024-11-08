import { redirect } from 'next/navigation'

import { storePost } from '@/lib/posts'
import PostForm from '@/components/post-form'

export default function NewPostPage() {
  // @ when changing to useFormState -> need to change the param list as well
  async function createPost(prevState, formData) {
    'use server'
    const title = formData.get('title')
    const image = formData.get('image')
    const content = formData.get('content')

    let errors = []

    if (!title || title.trim().length === 0) errors.push('Title is required.')
    if (!content || content.trim().length === 0)
      errors.push('Content is required.')

    // @ for image validation -> need to check size as well
    if (!image || image.size === 0) errors.push('Image is required.')
    if (errors.length > 0) return { errors } // # MUST RETURN

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1,
    })

    redirect('/feed')
  }

  // @
  return <PostForm action={createPost} />
}
