import React,{useState} from 'react';
import {ArrowRight,ArrowUpRight, Github,Linkedin,Mail,Menu,X,Code2,Server,Database,Cloud,ShieldCheck,Award,GraduationCap,ExternalLink} from 'lucide-react';
import portrait from './assets/sandeep.png';
import polyglot from './assets/Polyglot.png';
import flavor from './assets/IFS.jpg';
import ofs from './assets/OFS.jpg';
import flight from './assets/FDAU.jpg';
import game from './assets/asta.jpg';
import db from './assets/db.jpg';
const user='Sandeep Kumar Sutharapu', github='https://github.com/Sandeep-1-Kumar', linkedin='https://www.linkedin.com/in/sandeepsutharapu',email='sandeepsutharapu18896@gmail.com';
const nav=['About','Experience','Projects','Skills','Education','Contact'];
const jobs=[
['Software Developer III','Infosys USA · Charter Communications','Jan 2024 – Nov 2026',[
'Developed Java Spring Boot services and React-integrated features for Spectrum Mobile workflows serving 10M+ customers.',
'Delivered shipment tracking for 40,000+ customers daily, improving operational efficiency by 80%.',
'Reduced pricing discrepancies by 35% and promotion-related issues by over 50% through Add-to-Cart integrations.',
'Improved system performance by 60% using parallel and asynchronous Java processing; modernized Java 11 services to Java 17.'],['Java 17','Spring Boot','React','Kafka','Redis','Kubernetes']],
['Lead Software Developer Intern','Operation Food Search · United States','Sep – Dec 2023',[
'Led development of a cross-platform application that reduced the operating budget from $4,000/year to $90/month.','Built secure Spring Boot and MySQL services with RBAC and BCrypt; integrated FlutterFlow and Firebase.'],['Spring Boot','MySQL','Firebase','Docker']],
['Software Developer Intern','Bank of Montreal · United States','Jun – Aug 2023',[
'Built consolidated reporting with Java Reactive Programming, gRPC streaming over HTTP/2, AWS Aurora and PostgreSQL.'],['Java','gRPC','PostgreSQL','AWS']],
['Senior Consultant','Capgemini · Becton Dickinson / Novelis','Jul 2021 – Aug 2022',[
'Built enterprise integrations across Oracle, SAP, MongoDB, Salesforce and external APIs.','Improved throughput by 40% with concurrent and reactive processing; delivered AWS services via CI/CD.'],['Java','Spring Boot','AWS','OAuth2']],
['Senior Systems Engineer','Infosys Technologies · India','Feb 2019 – Jun 2021',[
'Migrated legacy applications to Spring Boot microservices, building REST APIs, batch workflows and database integrations.'],['Java','Spring Boot','Oracle','JPA']],
['Java Developer','Johnson Controls · India','May 2018 – Jan 2019',[
'Built Java/Spring REST APIs and web applications with Hibernate, JSF, AJAX and JDBC; supported SOAP-to-REST migration.'],['Java','Spring','Hibernate','MySQL']]
];
const projects=[
['Polyglot','React and Spring Boot language-learning experience with MySQL, a Swahili translation algorithm and Docker Compose.','Polyglot',polyglot,['React','Spring Boot','MySQL']],
['Indian Flavor Scape','Full-stack restaurant ordering with customer/staff workflows, secure APIs and GitLab CI/CD.','Indian-Flavor-Scape',flavor,['React','Java','REST APIs']],
['OFS Meal Report App','Cross-platform reporting for a nonprofit, integrating Java services, Firebase authentication and Docker deployment.','OFS-MealReportApp',ofs,['Java','Firebase','Docker']],
['Flight Data Acquisition','System architecture designed for flight sensor ingestion at 10 MB/s with FIFO data retention.','Flight-Data-Acquisition-unit',flight,['Architecture','Data systems']],
['Indian Ludo Astachamma','Java Swing game employing MVC, Strategy and Observer patterns, serialization and score tracking.','IndianLudo_AstaChamma',game,['Java','Swing','Design patterns']],
['Database Interface','Spring Boot and React application for CSV uploads, semester selection and tabular data reporting.','DataBaseInterface',db,['React','JPA','MySQL']]
];
const skills=[
['Backend',Server,['Java 8 / 11 / 17','Spring Boot','Spring MVC','Spring Security','Hibernate / JPA','REST APIs','Microservices','gRPC']],
['Frontend',Code2,['React.js','JavaScript','Responsive UI','JSP / Servlets','AJAX','jQuery']],
['Data & messaging',Database,['Oracle','MySQL','PostgreSQL','MongoDB','Redis','Kafka','JMS','IBM MQ']],
['Cloud & DevOps',Cloud,['AWS EC2 / S3 / Lambda','RDS / Aurora','Docker','Kubernetes','Jenkins','GitLab CI/CD','Azure']],
['Security & testing',ShieldCheck,['OAuth2','JWT','RBAC','JUnit','Mockito','JaCoCo','SonarQube','JMeter']]
];
function Tags({items}){return <div className="tags">{items.map(t=><span key={t}>{t}</span>)}</div>}
function Heading({number,kicker,title,subtitle}){return <div className="heading"><span className="kicker">{number} / {kicker}</span><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div>}
export default function App(){
const [menu,setMenu]=useState(false);
return <div className="site">
<header className="header"><nav className="container navbar" aria-label="Main navigation"><a href="#home" className="brand"><span className="monogram">SK</span>Sandeep<span className="accent">.dev</span></a><div className="nav-links">{nav.map(n=><a key={n} href={'#'+n.toLowerCase()}>{n}</a>)}</div><a className="nav-action" href={'mailto:'+email}>Let's talk <ArrowUpRight size={15}/></a><button aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></nav>{menu&&<div className="mobile-links">{nav.map(n=><a href={'#'+n.toLowerCase()} onClick={()=>setMenu(false)} key={n}>{n}</a>)}</div>}</header>
<main>
<section className="hero" id="home"><div className="container hero-layout"><div className="hero-text"><div className="kicker"><i className="pulse"/> JAVA FULL STACK DEVELOPER</div><h1>Engineering software <em>that scales.</em></h1><p>Hi, I'm <strong>Sandeep Kumar Sutharapu.</strong> I bring <strong>8 years of experience</strong> building resilient enterprise applications with Java, Spring Boot, React and event-driven microservices.</p><Tags items={['Java & Spring Boot','React.js','Microservices','Cloud & DevOps']}/><div className="buttons"><a className="button primary" href="#experience">Explore experience <ArrowRight size={17}/></a><a className="button outline" href="#projects">View projects <ArrowUpRight size={17}/></a></div><div className="social"><a aria-label="GitHub" href={github} target="_blank" rel="noreferrer"><Github/></a><a aria-label="LinkedIn" href={linkedin} target="_blank" rel="noreferrer"><Linkedin/></a><a aria-label="Email" href={'mailto:'+email}><Mail/></a></div></div><div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="photo"><img src={portrait} alt="Sandeep Kumar Sutharapu"/></div><div className="floating-chip top-chip"><Code2 size={17}/> Crafting end-to-end systems</div><div className="floating-chip bottom-chip"><i className="pulse"/> Enterprise scale</div></div></div><div className="container numbers">{[['8+','Years engineering'],['10M+','Customers on supported platform'],['40K+','Daily shipment tracking users']].map(([v,l])=><div key={v}><b>{v}</b><span>{l}</span></div>)}</div></section>
<section id="about" className="section"><div className="container about"><Heading number="01" kicker="ABOUT ME" title="Complex challenges. Clear solutions."/><div className="about-copy"><p className="lead">I build reliable systems that connect great user experiences with robust backend engineering.</p><p>My experience spans mobile commerce, order fulfillment, secure integrations, distributed messaging, cloud deployment and production operations. I enjoy turning complex workflows into maintainable code and measurable business results.</p><a className="text-link" href="#projects">Explore my work <ArrowUpRight size={16}/></a></div></div></section>
<section id="experience" className="section alternate"><div className="container"><Heading number="02" kicker="CAREER" title="Experience & impact" subtitle="Engineering solutions across telecom, banking, nonprofit, healthcare and manufacturing."/><div className="timeline">{jobs.map(([role,company,date,details,tech],i)=><article className={'job '+(i===0?'featured':'')} key={company}><div className="job-heading"><div><span className="kicker">{String(i+1).padStart(2,'0')} / {company}</span><h3>{role}</h3></div><span className="date">{date}</span></div><ul>{details.map(d=><li key={d}>{d}</li>)}</ul><Tags items={tech}/></article>)}</div></div></section>
<section id="projects" className="section"><div className="container"><Heading number="03" kicker="SELECTED WORK" title="Projects worth exploring" subtitle="Full-stack applications, community impact and software architecture."/><div className="project-grid">{projects.map(([name,desc,repo,img,stack],i)=><article className="project" key={name}><div className="project-img"><img loading="lazy" src={img} alt={name+' project screenshot'}/></div><div className="project-body"><span className="kicker">{String(i+1).padStart(2,'0')} / PROJECT</span><h3>{name}</h3><p>{desc}</p><Tags items={stack}/><a className="text-link" href={github+'/'+repo} target="_blank" rel="noreferrer">Explore repository <ExternalLink size={15}/></a></div></article>)}</div></div></section>
<section id="skills" className="section alternate"><div className="container"><Heading number="04" kicker="TECH STACK" title="Tools of the trade" subtitle="A modern toolkit to design, deliver, test and operate software."/><div className="skill-grid">{skills.map(([name,Icon,items])=><article className="skill" key={name}><div className="skill-title"><Icon size={25}/><h3>{name}</h3></div><Tags items={items}/></article>)}</div></div></section>
<section id="education" className="section"><div className="container"><Heading number="05" kicker="BACKGROUND" title="Education & recognition"/><div className="credentials"><article><GraduationCap/><h3>M.S. Software Engineering</h3><p>Saint Louis University · 2022–2024</p><b>GPA 3.97 / 4.00</b></article><article><Award/><h3>Certifications & awards</h3><p>MuleSoft Certified Developer (MCD Level 1), MuleSoft Certified Associate and Agile Certified Developer.</p><p>Insta Award, Xtra-Mile Award and client appreciation for the FedEx REST migration.</p></article></div></div></section>
<section id="contact" className="section contact"><div className="container"><span className="kicker">06 / CONTACT</span><h2>Let's build what's next.</h2><p>Open to conversations about impactful software engineering work, collaboration and opportunities.</p><a className="button primary" href={'mailto:'+email}>Get in touch <ArrowUpRight size={18}/></a><div className="contact-links"><a href={'mailto:'+email}>{email}</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={github} target="_blank" rel="noreferrer">GitHub</a></div></div></section>
</main><footer><div className="container foot"><span>© {new Date().getFullYear()} {user}</span><span>Built with React · Crafted with care</span><a href="#home">Back to top ↑</a></div></footer>
</div>;
}