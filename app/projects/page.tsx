import Header from '../components/Header'

export default function Projects() {
  return (
    <>
      <Header />
      <div className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">
          <h3>Multi-Tenant API Platform</h3>
          <p><span className="text-primary">Problem:</span> Businesses needed isolated backend systems per customer</p>
          <p><span className="text-primary">Solution:</span> Built scalable tenant-based API architecture</p>
          <p><span className="text-primary">Tech:</span> Node.js, PostgreSQL, Docker</p>
          <p>GitHub: github.com/yourname/api</p>
          <p>Live Demo: Coming soon</p>
        </div>
        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">
          <h3>Server Deployment Automation</h3>
          <p><span className="text-primary">Problem:</span> Manual deployments wasted hours</p>
          <p><span className="text-primary">Solution:</span> Automated VPS provisioning and setup</p>
          <p><span className="text-primary">Tech:</span> Bash, Nginx, AWS</p>
          <p>GitHub: github.com/yourname/deploy</p>
          <p>Live Demo: Coming soon</p>
        </div>
      </div>
    </>
  )
}