import Header from '../components/Header'

export default function Services() {
  return (
    <>
      <Header />
      <div className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">VPS Deployment & Server Setup</div>
        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">Backend API Development</div>
        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">App Hosting & Maintenance</div>
        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">Performance Optimization</div>
      </div>
    </>
  )
}