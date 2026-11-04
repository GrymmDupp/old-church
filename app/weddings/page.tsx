export default function Weddings() {
  return (
    <main style={{ fontFamily: 'system-ui', maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
      <h1>Weddings</h1>
      <p>The Old Church with the Purple Door specializes in intimate ceremonies, elopements, and micro weddings for up to 50 guests.</p>
      <h2>Packages</h2>
      <ul>
        <li><strong>Short and Sweet</strong> — Up to 10 guests. 1 hour. $300</li>
        <li><strong>Classic Elopement</strong> — Up to 20 guests. 1.5 hours. $450</li>
        <li><strong>Full Ceremony</strong> — Up to 50 guests. 2 hours. $700</li>
      </ul>
      <p>All packages include the High Priest or Priestess, a day-of on-site coordinator, and access to the Ceremony Builder in your account.</p>
      <p><a href="/login">Create an Account</a> · <a href="/book">Book a Date</a> · <a href="/contact">Contact Us</a></p>
    </main>
  )
}
