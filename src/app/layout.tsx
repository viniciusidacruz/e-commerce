import './globals.css'

export const metadata = {
  title: 'E-commerce',
  description: 'Em busca de uma boa aplicação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
