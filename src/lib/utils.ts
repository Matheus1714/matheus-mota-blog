import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText (text: string) {
  const MAX_TEXT_LENGTH = 150
  if (text.length <= MAX_TEXT_LENGTH) {
      return text
  }
  const truncatedDescription = `${text.substring(0, MAX_TEXT_LENGTH)}...`
  return truncatedDescription
}