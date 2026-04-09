import Header from '../components/Header'

export default function Contact() {
  return (
    <>
      <Header />
      <div className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">
          <p>Email: your@email.com</p>
          <p>WhatsApp: https://wa.me/234XXXXXXXXXX</p>
          <p>Upwork: https://upwork.com/freelancers/yourprofile</p>
          <a href="https://wa.me/234XXXXXXXXXX" className="inline-block px-7 py-3.5 rounded-lg bg-gradient-to-br from-primary to-secondary text-black mx-2.5 my-2.5 no-underline">
            Hire Me Now
          </a>
        </div>
      </div>
    </>
  )
}