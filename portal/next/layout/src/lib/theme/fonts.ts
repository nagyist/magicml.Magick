import {
  Montserrat as FontSans,
  Montserrat_Alternates as FontAlt,
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const fontAlt = FontAlt({
  subsets: ['latin'],
  variable: '--font-alt',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})
