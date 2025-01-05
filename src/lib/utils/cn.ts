/**
 * Combines multiple class names and resolves Tailwind CSS conflicts.
 *
 * @param inputs - Any number of class name strings to merge
 * @returns A single merged class name string
 *
 * @example
 * cn('px-2 py-1', 'px-4') // Returns 'py-1 px-4'
 * cn('text-gray-500', isError && 'text-red-500') // Conditional classes
 * cn('bg-blue-500', className) // Merging with external classes
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
