export const metadata = {
  title: 'The Old Church with the Purple Door',
  description: 'Historic 1906 wedding venue in Horton, Michigan.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}