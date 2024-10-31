'use server'

import { redirect } from 'next/navigation'

import { saveMeal } from './meals'

function isInvalidText(text) {
  return !text || text.trim() === ''
}

// 1. share/page.js -> useFormState(shareMeal, { message: null }) -> 2 args -> here we need to have 2 params
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // 2.
    return {
      // throw new Error('Invalid input.'),
      message: 'Invalid input.',
    }
  }

  await saveMeal(meal)
  redirect('/meals')
}