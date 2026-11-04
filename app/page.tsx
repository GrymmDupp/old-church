export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '40px', maxWidth: '720px', margin: '0 auto' }}>
      <h1>The Old Church with the Purple Door</h1>
      <p>Next.js + Supabase foundation.</p>
      <ul>
        <li>Auth via Supabase</li>
        <li>Client accounts</li>
        <li>Bookings with deposit tracking</li>
        <li>Ceremony Builder storage</li>
        <li>Cart and admin notes</li>
      </ul>
      <p>See README.md for setup.</p>
    </main>
  )
}