
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <>
      <Header />
      <div className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <ProjectCard
          title="Docker Auto Deployment Platform"
          description="Automated system that deploys GitHub repositories into live applications using Docker containers, with automatic routing and subdomain provisioning."
          tech="Docker • Python • Traefik • Linux VPS • GitHub"
          features={[
            'GitHub repo deployment',
            'Automatic Docker build & container execution',
            'Dynamic routing via reverse proxy (Traefik)',
            'Subdomain-based deployment (app.domain.com)',
            'Multi-app VPS hosting',
          ]}
          apiEndpoint="https://api.domain.com/deploy"
          liveUrl="https://deploy.domain.com"
          buttonLabel="🚀 Deploy & Test Live"
        />
        <ProjectCard
          title="Multi-Tenant API Platform"
          description="Businesses needed isolated backend systems per customer. Built scalable tenant-based API architecture."
          tech="Node.js • PostgreSQL • Docker"
          features={[
            'Isolated backend per customer',
            'Scalable multi-tenant API',
            'Secure data separation',
            'Automated tenant provisioning',
          ]}
          liveUrl={undefined}
          apiEndpoint={undefined}
          buttonLabel="GitHub: github.com/yourname/api"
        />
        <ProjectCard
          title="Server Deployment Automation"
          description="Manual deployments wasted hours. Automated VPS provisioning and setup."
          tech="Bash • Nginx • AWS"
          features={[
            'Automated VPS provisioning',
            'Scripted server setup',
            'Nginx reverse proxy automation',
            'AWS integration',
          ]}
          liveUrl={undefined}
          apiEndpoint={undefined}
          buttonLabel="GitHub: github.com/yourname/deploy"
        />
      </div>
    </>
  )
}