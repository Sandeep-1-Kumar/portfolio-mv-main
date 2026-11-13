import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

import portrait from './assets/professional-headshot-clear.svg';
import polyglot from './assets/Polyglot.png';
import flavor from './assets/IFS.jpg';
import ofs from './assets/OFS.jpg';
import flight from './assets/FDAU.jpg';
import game from './assets/asta.jpg';
import db from './assets/db.jpg';

const user = 'Sandeep Kumar Sutharapu';
const github = 'https://github.com/Sandeep-1-Kumar';
const linkedin = 'https://www.linkedin.com/in/sandeepsutharapu';
const email = 'sandeepsutharapu18896@gmail.com';

const nav = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

const stats = [
  { value: '8+', label: 'Years of experience' },
  { value: '10M+', label: 'Customers supported' },
  { value: '40K+', label: 'Shipments tracked daily' },
  { value: '60%', label: 'Performance improvement' },
];

const jobs = [
  {
    role: 'Software Developer III',
    company: 'Infosys USA · Charter Communications',
    date: 'Jan 2024 – Present',
    bullets: [
      'Built Java Spring Boot services and React-integrated features for Spectrum Mobile workflows serving 10+ million customers.',
      'Delivered end-to-end shipment tracking for 40,000+ customers daily and improved operational efficiency by 80%.',
      'Reduced pricing discrepancies by 35% and promotion-related issues by 50%+ through cart and eligibility integrations.',
      'Improved system performance by 60% using asynchronous and parallel Java processing while modernizing services from Java 11 to Java 17.',
    ],
    tech: ['Java 17', 'Spring Boot', 'React', 'Kafka', 'Oracle', 'MongoDB', 'Redis'],
  },
  {
    role: 'Lead Software Developer Intern',
    company: 'Operation Food Search, USA',
    date: 'Sep 2023 – Dec 2023',
    bullets: [
      'Led requirements, architecture and delivery of a cross-platform application that reduced operating cost from $4,000/year to $90/month.',
      'Built secure Spring Boot services with MySQL, RBAC and BCrypt, integrating FlutterFlow and Firebase authentication.',
    ],
    tech: ['Spring Boot', 'MySQL', 'Firebase', 'Docker', 'Render'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Bank of Montreal, USA',
    date: 'Jun 2023 – Aug 2023',
    bullets: [
      'Developed a report-generation service that consolidated data from multiple sources for customers and agents.',
      'Implemented gRPC streaming over HTTP/2 with Java Reactive Programming and scheduled retrieval from AWS Aurora and PostgreSQL.',
    ],
    tech: ['Java', 'gRPC', 'AWS Aurora', 'PostgreSQL', 'Reactive Programming'],
  },
  {
    role: 'Senior Consultant',
    company: 'Capgemini · Becton Dickinson / Novelis',
    date: 'Jul 2021 – Aug 2022',
    bullets: [
      'Developed Spring Boot REST APIs and enterprise integrations across Oracle, SAP, MongoDB, Salesforce and external services.',
      'Improved throughput by 40% with concurrent and reactive processing and delivered automated CI/CD on AWS and Azure DevOps.',
    ],
    tech: ['Java', 'Spring Boot', 'AWS', 'Azure DevOps', 'OAuth2', 'MongoDB'],
  },
  {
    role: 'Senior Systems Engineer',
    company: 'Infosys Technologies Pvt. Ltd.',
    date: 'Feb 2019 – Jun 2021',
    bullets: [
      'Migrated legacy applications to Java Spring Boot microservices and built reusable APIs, batch workflows and integrations.',
      'Supported Oracle, ERP and MongoDB workflows with SQL optimization, retries and reliable data processing.',
    ],
    tech: ['Java', 'Spring Boot', 'Oracle', 'JPA', 'JDBC'],
  },
  {
    role: 'Java Developer',
    company: 'Johnson Controls Inc, India',
    date: 'May 2018 – Jan 2019',
    bullets: [
      'Built Java/Spring REST APIs and enterprise web applications using Servlets, Hibernate, JPA and JDBC.',
      'Worked on SOAP-to-REST migrations, batch workflows and deployment automation with Jenkins and Docker.',
    ],
    tech: ['Java', 'Spring', 'Hibernate', 'JDBC', 'Docker'],
  },
];

const projects = [
  {
    title: 'Polyglot',
    image: polyglot,
    description:
      'A full-stack language learning platform with a responsive React frontend, Spring Boot backend, MySQL and a Swahili translation algorithm.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Docker Compose'],
    github: 'https://github.com/Sandeep-1-Kumar/Polyglot',
  },
  {
    title: 'Indian Flavor Scape',
    image: flavor,
    description:
      'Restaurant ordering platform with secure customer and staff workflows, RESTful APIs, error handling and CI/CD integration.',
    tech: ['React', 'Java', 'Spring Boot', 'GitLab CI/CD'],
    github: 'https://github.com/Sandeep-1-Kumar/Indian-Flavor-Scape',
  },
  {
    title: 'OFS Meal Report App',
    image: ofs,
    description:
      'A nonprofit-focused reporting application with Java backend logic, Firebase authentication and Docker-based deployment.',
    tech: ['Java', 'Firebase', 'Docker', 'Render'],
    github: 'https://github.com/Sandeep-1-Kumar/OFS-MealReportApp',
  },
  {
    title: 'Flight Data Acquisition Unit',
    image: flight,
    description:
      'Software architecture for aviation-grade high-speed sensor ingestion with FIFO retention and real-time system design thinking.',
    tech: ['Architecture', 'Real-time systems', 'Data ingestion'],
    github: 'https://github.com/Sandeep-1-Kumar/Flight-Data-Acquisition-unit',
  },
  {
    title: 'Indian Ludo Astachamma',
    image: game,
    description:
      'A Java Swing game designed with MVC, Strategy and Observer patterns, including score tracking and state persistence.',
    tech: ['Java', 'Swing', 'Design Patterns'],
    github: 'https://github.com/Sandeep-1-Kumar/IndianLudo_AstaChamma',
  },
  {
    title: 'Database Interface',
    image: db,
    description:
      'A Spring Boot and React application for CSV uploads, semester filtering and structured data views backed by JPA and MySQL.',
    tech: ['React', 'Spring Boot', 'JPA', 'MySQL'],
    github: 'https://github.com/Sandeep-1-Kumar/DataBaseInterface',
  },
];

const skills = [
  {
    title: 'Backend Engineering',
    icon: Server,
    items: ['Java 8/11/17', 'Spring Boot', 'Spring MVC', 'Microservices', 'REST APIs', 'gRPC', 'Hibernate/JPA', 'JDBC'],
  },
  {
    title: 'Frontend Development',
    icon: Code2,
    items: ['React.js', 'Responsive UI', 'JSP/Servlets', 'AJAX', 'jQuery'],
  },
  {
    title: 'Data & Messaging',
    icon: Database,
    items: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Apache Kafka', 'JMS', 'IBM MQ'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: ['AWS EC2/S3/Lambda', 'RDS & Aurora', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Azure'],
  },
  {
    title: 'Security & Quality',
    icon: ShieldCheck,
    items: ['OAuth2', 'JWT', 'RBAC', 'JUnit', 'Mockito', 'JaCoCo', 'SonarQube', 'JMeter'],
  },
  {
    title: 'Engineering Workflow',
    icon: Layers3,
    items: ['Git/GitHub/GitLab', 'Postman', 'Swagger', 'Splunk', 'Datadog', 'Agile / Scrum'],
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise-grid" />

      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand">
            <span className="brand-mark">SK</span>
            <span>
              Sandeep<span className="brand-accent">.dev</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a className="button ghost small" href={`mailto:${email}`}>
              Hire me <ArrowUpRight size={16} />
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="mobile-menu">
            <div className="container mobile-menu-inner">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <a href={github} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                GitHub
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                LinkedIn
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-pill">
                <Sparkles size={15} /> Java Full Stack Developer
              </span>
              <h1>
                Building <span>scalable software</span> with clean architecture, polished user
                experience and production-grade engineering.
              </h1>
              <p>
                I’m <strong>{user}</strong> — a Java Full Stack Developer with <strong>8 years of experience</strong>
                creating enterprise applications using Java, Spring Boot, React.js, cloud services and
                event-driven systems.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View projects <ArrowRight size={18} />
                </a>
                <a className="button ghost" href={`mailto:${email}`}>
                  Contact me <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="quick-links">
                <a href={github} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={`mailto:${email}`}>
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-ring ring-one" />
              <div className="portrait-ring ring-two" />
              <div className="portrait-card">
                <img src={portrait} alt="Sandeep Kumar Sutharapu" className="portrait-image" />
              </div>
              <div className="floating-card card-left">
                <span>Focus</span>
                <strong>Java · Spring Boot · React</strong>
              </div>
              <div className="floating-card card-right">
                <span>Core strength</span>
                <strong>Enterprise systems & integrations</strong>
              </div>
              <div className="floating-mini mini-top">Cloud + APIs + Messaging</div>
              <div className="floating-mini mini-bottom">Production-ready engineering</div>
            </div>
          </div>

          <div className="container stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionHeader
              eyebrow="About"
              title="Engineering with clarity, scale and impact"
              description="I enjoy transforming complex business workflows into dependable software products with strong backend foundations and clean full-stack delivery."
            />
            <div className="feature-grid">
              <article className="feature-card">
                <h3>Full-stack mindset</h3>
                <p>
                  I connect frontend usability with resilient backend logic so products feel smooth for users and maintainable for teams.
                </p>
              </article>
              <article className="feature-card">
                <h3>Integration-first experience</h3>
                <p>
                  I’ve worked across APIs, Kafka, databases, cloud tooling and enterprise systems to move data reliably between platforms.
                </p>
              </article>
              <article className="feature-card">
                <h3>Delivery focus</h3>
                <p>
                  I care about measurable outcomes — performance, reliability, automation, testability and production support.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="container">
            <SectionHeader
              eyebrow="Experience"
              title="Career highlights"
              description="A mix of enterprise delivery, system modernization, integrations and product-focused engineering across multiple domains."
            />
            <div className="timeline">
              {jobs.map((job, index) => (
                <article className="timeline-item" key={`${job.company}-${index}`}>
                  <div className="timeline-marker">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-head">
                      <div>
                        <h3>{job.role}</h3>
                        <p>{job.company}</p>
                      </div>
                      <span className="timeline-date">{job.date}</span>
                    </div>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <TagList items={job.tech} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHeader
              eyebrow="Projects"
              title="Selected work"
              description="Hands-on projects that reflect my full-stack background, interest in product thinking and love for well-structured code."
            />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay" />
                  </div>
                  <div className="project-body">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub link`}>
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <p>{project.description}</p>
                    <TagList items={project.tech} />
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                      View repository <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="skills">
          <div className="container">
            <SectionHeader
              eyebrow="Skills"
              title="Technology stack"
              description="A practical toolkit across application development, integrations, cloud deployment, testing and production support."
            />
            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <article className="skill-card" key={skill.title}>
                    <div className="skill-header">
                      <span className="skill-icon">
                        <Icon size={20} />
                      </span>
                      <h3>{skill.title}</h3>
                    </div>
                    <TagList items={skill.items} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <SectionHeader eyebrow="Education" title="Academic background & recognition" />
            <div className="education-grid">
              <article className="education-card">
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>
                <h3>Master of Science in Software Engineering</h3>
                <p>Saint Louis University, Missouri</p>
                <strong>Aug 2022 – May 2024 · GPA: 3.97 / 4.00</strong>
              </article>
              <article className="education-card">
                <div className="education-icon">
                  <Award size={24} />
                </div>
                <h3>Certifications & recognition</h3>
                <p>
                  MuleSoft Certified Associate, MuleSoft Certified Developer (MCD Level 1), Agile Certified Developer, plus client appreciation and performance awards.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-panel">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Let’s build something meaningful.</h2>
              <p>
                If you’re hiring for backend, full-stack or integration-focused roles, I’d be glad to connect.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${email}`}>
                Start a conversation <ArrowUpRight size={18} />
              </a>
              <div className="contact-links-grid">
                <a href={`mailto:${email}`}>{email}</a>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {user}</span>
          <span>Java Full Stack Developer · Built with React</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}