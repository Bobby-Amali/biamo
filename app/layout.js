import './globals.css'

export const metadata = {
  title: 'Biamo Inc',
  description: 'Breastfeeding Industry Solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
