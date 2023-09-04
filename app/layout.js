export const metadata = {
  title: 'Ecommerce',
  description: 'For Your Home Gadgets',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
