import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <section className="text-center py-[140px] px-5">
        <h1 className="text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          I build backend systems that scale without breaking
        </h1>
        <p className="text-gray-400 text-lg">Backend APIs • VPS Deployment • Cloud Infrastructure</p>
        <Link href="/projects" className="inline-block px-7 py-[14px] rounded-lg bg-gradient-to-br from-primary to-secondary text-black mx-2.5 my-2.5 no-underline">
          View Projects
        </Link>
        <Link href="/contact" className="inline-block px-7 py-[14px] rounded-lg border border-primary text-primary mx-2.5 my-2.5 no-underline">
          Hire Me
        </Link>
      </section>
    </>
  )
}