import './globals.css'

export const metadata = {
  title: 'Biamo Inc',
  description: 'Welcome to Biamo, Your Compass in the Breastfeeding Tech World',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
