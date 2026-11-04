export const metadata = {
  title: 'The Old Church with the Purple Door',
  description: 'Historic 1906 wedding venue in Horton, Michigan.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Georgia, serif', background: '#faf8f5', color: '#2c1810' }}>
        <header style={{ background: '#4a1942', color: '#fff', padding: '16px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: 20, fontWeight: 600 }}>
              The Old Church with the Purple Door
            </a>
            <nav style={{ display: 'flex', gap: 20 }}>
              <a href="/the-chapel" style={{ color: '#f0e6d3', textDecoration: 'none' }}>Chapel</a>
              <a href="/the-gardens" style={{ color: '#f0e6d3', textDecoration: 'none' }}>Gardens</a>
              <a href="/weddings" style={{ color: '#f0e6d3', textDecoration: 'none' }}>Weddings</a>
              <a href="/login" style={{ color: '#f0e6d3', textDecoration: 'none' }}>Account</a>
            </nav>
          </div>
        </header>
        <div style={{ minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </div>
        <footer style={{ background: '#2c1810', color: '#f0e6d3', padding: '24px', textAlign: 'center', fontSize: 14 }}>
          The Old Church with the Purple Door · Horton, Michigan
        </footer>
      </body>
    </html>
  )
}
