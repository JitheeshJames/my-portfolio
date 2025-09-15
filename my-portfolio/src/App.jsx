import { motion } from "framer-motion";
import { Card, CardContent } from "./components/Card";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Jitheesh PJ</h1>
          <div className="flex gap-4 items-center">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#certifications" className="hover:text-blue-600">Certifications</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="/resume.pdf" download><Button>Resume</Button></a>
          </div>
        </div>
      </nav>
	  
      {/* Hero */}
      <header className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4">
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-5xl font-extrabold">
          Senior Software Engineer • AWS Cloud Consultant
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          6+ years building secure, cost-optimized AWS environments — infrastructure as code, automation, monitoring and incident response.
        </p>
      </header>

      {/* About */}
      <section id="about" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <Card>
          <CardContent>
            <p className="leading-relaxed">
              AWS Cloud Consultant & Administrator with experience across Manufacturing, Life Sciences, Pharma, and Commercial domains.
              I specialize in architecting scalable AWS solutions, cost optimization, security hardening, automation and cross-team delivery.
            </p>
          </CardContent>
        </Card>
      </section>
	  
      {/* Skills */}
      <section id="skills" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "AWS (IAM, S3, EC2, RDS, ECS, SageMaker, Glue, QuickSight)",
              "Infrastructure as Code (Terraform, CloudFormation)",
              "CI/CD (Jenkins, GitHub Actions, Step Functions)",
              "Containerization & Orchestration (Docker, EKS)",
              "Monitoring & Observability (CloudWatch, Grafana)",
              "Security & Compliance (IAM, DR, Backup)",
              "Automation (Python, Shell, Lambda)",
              "Cost Optimization & Troubleshooting"
            ].map((s) => (
              <motion.div whileHover={{ scale: 1.03 }} key={s} className="p-4 bg-white rounded-lg shadow text-sm font-semibold text-center">
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
	  
      {/* Projects */}
      <section id="projects" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects & Architectures</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
              <img src="/aws-cost-arch.png" alt="Cost Optimization" className="rounded mb-3 w-full object-cover" />
              <p>Autoscaling + reserved instance strategy, rightsizing and tag-driven reporting to reduce cloud spend.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Security Hardening</h3>
              <img src="/aws-security-arch.png" alt="Security" className="rounded mb-3 w-full object-cover" />
              <p>IAM least-privilege, automated audits, backups and DR design for compliance-sensitive workloads.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Data Lake & Analytics</h3>
              <img src="/aws-datalake-arch.png" alt="Data Lake" className="rounded mb-3 w-full object-cover" />
              <p>Secure S3 data lake with Glue, Lake Formation and QuickSight for analytics in pharma projects.</p>
            </CardContent>
          </Card>
        </div>
		
        <div className="mt-6">
          <p className="text-sm text-gray-600">Showcase of GitHub projects:</p>
          <ul className="mt-2 space-y-2">
            <li><a href="https://github.com/your-username/terraform-aws-infra" target="_blank" rel="noreferrer" className="text-blue-600 underline">terraform-aws-infra</a></li>
            <li><a href="https://github.com/your-username/ci-cd-pipeline" target="_blank" rel="noreferrer" className="text-blue-600 underline">ci-cd-pipeline</a></li>
            <li><a href="https://github.com/your-username/monitoring-setup" target="_blank" rel="noreferrer" className="text-blue-600 underline">monitoring-setup</a></li>
          </ul>
        </div>
      </section>
	  

      {/* Education & Certs */}
      <section id="education" className="py-16 max-w-6xl mx-auto px-4">
		<h2 className="text-3xl font-bold mb-6">Education</h2>
		<Card><CardContent><p><strong>MCA</strong> — SASTRA University (2018–2021)<br/><strong>BCA</strong> — BVM Holy Cross College (2014–2017)</p></CardContent></Card>
      </section>
	  
      {/* Experience */}
      <section id="experience" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <ul className="space-y-4">
            <li className="bg-white shadow p-4 rounded">
              <h3 className="font-semibold">Saama Technologies</h3>
              <p className="text-sm text-gray-600">2023 – Present — Senior Software Engineer (AWS Cloud Consultant)</p>
              <p>Spearheaded cost optimization, security automation and PoC development for cloud adoption.</p>
            </li>
			
            <li className="bg-white shadow p-4 rounded">
              <h3 className="font-semibold">Tata Consultancy Services (TCS)</h3>
              <p className="text-sm text-gray-600">2018 – 2023 — System Engineer (AWS Cloud)</p>
              <p>Designed and supported AWS infrastructure, implemented automation and security fixes across projects.</p>
            </li>
          </ul>
        </div>
      </section>
	  
      <section id="certifications" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <ul className="space-y-3">
            <li className="bg-white shadow p-4 rounded">AWS Solutions Architect — Associate & Professional</li>
            <li className="bg-white shadow p-4 rounded">AWS Data Analytics Specialty</li>
            <li className="bg-white shadow p-4 rounded">AWS Security Specialty</li>
          </ul>
        </div>
      </section>
	  
      {/* Contact */}
      <section id="contact" className="py-16 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
		<p>Email: <a href="mailto:jitheeshjames27@gmail.com" className="text-blue-600 underline">jitheeshjames27@gmail.com</a></p>
		<p>LinkedIn: <a href="https://linkedin.com/in/jitheesh-pj-807518161" className="text-blue-600 underline">linkedin.com/in/jitheesh-pj-807518161</a></p>
      </section>
    </div>
  );
}
	  
