import { Bruno_Ace, Philosopher } from 'next/font/google'

export const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: ['400']
})

export const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal']
})