import Header from '../components/Header'

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-[1100px] mx-auto px-5 py-[60px]">
        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">
          <h3>About Ef-Won</h3>
          <p>I'm a passionate backend developer specializing in building scalable, high-performance systems that power modern applications. With years of experience in cloud infrastructure and API development, I help businesses transform their ideas into robust, production-ready solutions.</p>
        </div>

        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">
          <h3>Expertise</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="text-primary">Backend Development:</span> Node.js, Python, REST APIs, GraphQL</li>
            <li><span className="text-primary">Cloud & Infrastructure:</span> AWS, Docker, Kubernetes, CI/CD</li>
            <li><span className="text-primary">Databases:</span> PostgreSQL, MongoDB, Redis</li>
            <li><span className="text-primary">DevOps:</span> Server deployment, monitoring, performance optimization</li>
          </ul>
        </div>

        <div className="bg-[rgba(17,24,42,0.8)] p-[25px] rounded-2xl my-5">
          <h3>Philosophy</h3>
          <p>I believe in writing clean, maintainable code that scales. Every project I work on is built with reliability, security, and performance in mind. Whether it's a startup MVP or an enterprise system serving millions of users, I ensure the foundation is solid.</p>
        </div>
      </div>
    </>
  )
}