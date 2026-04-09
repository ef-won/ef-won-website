import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-12 py-4 bg-[rgba(17,24,42,0.7)] backdrop-blur-[10px] sticky top-0 z-[1000]">
      <h2>Ef-Won</h2>
      <nav className="flex gap-5 items-center">
        <Link href="/" className="no-underline text-white hover:text-primary">Home</Link>
        <Link href="/services" className="no-underline text-white hover:text-primary">Services</Link>
        <Link href="/projects" className="no-underline text-white hover:text-primary">Projects</Link>
        <Link href="/about" className="no-underline text-white hover:text-primary">About</Link>
        <Link href="/contact" className="no-underline text-white hover:text-primary">Contact</Link>
      </nav>
    </header>
  )
}