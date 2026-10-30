import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Briefcase,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Trophy,
  UserRound,
  UsersRound,
  X,
} from 'lucide-react';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="portfolio-shell min-h-screen overflow-hidden">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a className="brand-mark" href="#home" aria-label="Raghunath Jillella, home">
          <span className="brand-monogram">RJ</span>
          <span className="hidden text-sm font-semibold tracking-wide sm:inline">
            Raghunath Jillella
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a className="nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="header-contact hidden lg:inline-flex" href="#contact">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={15} />
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menu-toggle lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      <div
        className="mobile-navigation lg:hidden"
        hidden={!menuOpen}
        id="mobile-navigation"
      >
        <ul className="container mx-auto max-w-6xl px-5 pb-5 sm:px-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                className="mobile-nav-link"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-section"
      id="home"
    >
      <div className="hero-grid container mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.65 }}
        >
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Full Stack Developer | Python · Flask · JavaScript · SQL
          </p>
          <h1 className="hero-title" id="hero-title">
            Hello, I&apos;m
            <span className="hero-name">Raghunath Jillella.</span>
          </h1>
          <p className="hero-summary">
            Full Stack Developer at Persevex in Bengaluru, building practical web
            applications and data-driven workflows with an engineering mindset.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <Briefcase aria-hidden="true" size={15} /> Persevex · Bengaluru, Karnataka, India
            </span>
            <span>
              <GraduationCap aria-hidden="true" size={16} /> Electronics &amp; communication
              engineering background
            </span>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="hero-portrait-wrap"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: 0.12 }}
        >
          <div className="portrait-orbit portrait-orbit-one" />
          <div className="portrait-orbit portrait-orbit-two" />
          <div className="hero-portrait">
            <img
              alt="Raghunath Jillella"
              height="400"
              src="/raghunath.jpg"
              width="400"
            />
          </div>
          <div className="portrait-note">
            <span className="portrait-note-icon">
              <UserRound aria-hidden="true" size={17} />
            </span>
            <span>
              <strong>Curious by nature</strong>
              <small>Always learning, always building</small>
            </span>
          </div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <ArrowDown aria-hidden="true" size={15} />
      </a>
    </section>
  );
}

function SectionHeading({
  id,
  label,
  title,
  description,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        inView || prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      ref={ref}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

function About() {
  return (
    <section aria-labelledby="about-title" className="section section-light" id="about">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          description="I am a Full Stack Developer at Persevex in Bengaluru, with an Electronics and Communication Engineering background. My work and project experience span web applications, Python, database-backed workflows, automation, and software problem-solving."
          id="about-title"
          label="A little about me"
          title="Engineering perspective. Software curiosity."
        />
        <div className="about-grid">
          <Reveal className="about-copy">
            <h3>Building practical, maintainable applications.</h3>
            <p>
              As a Full Stack Developer at Persevex, I contribute to web application
              features, responsive interfaces, server-side functionality, data
              workflows, and internal application improvements.
            </p>
            <p>
              My experience includes Python and Flask, browser-based interfaces,
              SQL-backed application data, and document and spreadsheet workflows.
              I also bring an engineering background from Kalasalingam Academy of
              Research and Education and continue to develop my skills through
              personal projects.
            </p>
            <a className="text-link" href="#experience">
              See my experience <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </Reveal>
          <Reveal className="about-facts" delay={0.1}>
            <div className="fact-card">
              <span className="fact-icon">
                <Code2 aria-hidden="true" size={19} />
              </span>
              <div>
                <h3>Software development</h3>
                <p>Python, SQL, and web technologies</p>
              </div>
            </div>
            <div className="fact-card">
              <span className="fact-icon">
                <Briefcase aria-hidden="true" size={19} />
              </span>
              <div>
                <h3>Applied engineering</h3>
                <p>MATLAB image processing and IoT projects</p>
              </div>
            </div>
            <div className="fact-card">
              <span className="fact-icon">
                <GraduationCap aria-hidden="true" size={20} />
              </span>
              <div>
                <h3>Electronics &amp; communication</h3>
                <p>Kalasalingam Academy of Research and Education</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      aria-labelledby="experience-title"
      className="section section-dark"
      id="experience"
    >
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          description="Full-stack application development at Persevex, alongside earlier internship experience."
          id="experience-title"
          label="Experience"
          title="Professional experience."
        />
        <Reveal className="experience-card experience-card-current">
          <div className="experience-date">
            <span className="experience-icon">
              <Briefcase aria-hidden="true" size={21} />
            </span>
            <span>April 2026 — Present</span>
          </div>
          <div className="experience-details">
            <p className="experience-type">Current role · Full stack development</p>
            <h3>Full Stack Developer</h3>
            <p className="experience-company">
              Persevex LLP <span aria-hidden="true">·</span> Bengaluru, Karnataka, India
            </p>
            <ul className="experience-list">
              <li>
                Develop and maintain web applications and internal business tools.
              </li>
              <li>
                Build frontend interfaces, backend functionality, database-driven
                features, and data workflows.
              </li>
              <li>
                Implement features, validate data, fix bugs, and improve usability
                and reliability.
              </li>
            </ul>
            <ul aria-label="Technologies and workflows used in this role" className="experience-stack">
              {              [
                'Python',
                'Flask',
                'Node.js',
                'REST APIs',
                'PostgreSQL',
                'Prisma ORM',
                'SQLite',
                'RBAC',
              ].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="experience-card">
          <div className="experience-date">
            <span className="experience-icon">
              <Briefcase aria-hidden="true" size={21} />
            </span>
            <span>May 2024 — July 2024</span>
          </div>
          <div className="experience-details">
            <p className="experience-type">Internship · Image processing</p>
            <h3>
              MATLAB Image Processing Intern
            </h3>
            <p className="experience-company">
              Youngminds Technology Solutions Pvt Ltd
            </p>
            <ul className="experience-list">
              <li>Preprocessed and analyzed weed and crop images.</li>
              <li>Applied segmentation techniques to separate image regions.</li>
              <li>Extracted image features for analysis.</li>
            </ul>
            <a
              className="text-link"
              href="https://drive.google.com/file/d/1pgMv7k1dTSZC5QOWY_6QIR0Pl_B3cSga/view?usp=drive_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              View supporting document <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type ProjectCategory = 'web' | 'python' | 'engineering' | 'private';

type PublicProject = {
  visibility: 'public';
  title: string;
  category: Exclude<ProjectCategory, 'private'>;
  technologies: string;
  description: string;
  repository?: string;
  image?: string;
  imageAlt?: string;
  icon?: ReactNode;
};

type PrivateProject = {
  visibility: 'private';
  title: string;
  category: 'private';
  description: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
};

type Project = PublicProject | PrivateProject;

const projects: Project[] = [
  {
    visibility: 'private',
    title: 'Automated Offer Letter & Certificate Generation System',
    category: 'private',
    description:
      'Generates offer letters and certificates, with supporting document processing and verification workflows.',
    image: '/project-images/document-workflow.svg',
    imageAlt:
      'Conceptual illustration of a private document workflow, with a document preview, metadata, verification steps, and record statuses; no company data shown.',
    capabilities: [
      'Offer letters',
      'Certificates',
      'Document processing',
      'Verification',
    ],
  },
  {
    visibility: 'private',
    title: 'WorkSync – Employee & Attendance Management System',
    category: 'private',
    description:
      'Supports employee records, attendance check-in and check-out, leave management, office settings, role-based access, and database-backed workflows.',
    image: '/project-images/employee-operations.svg',
    imageAlt:
      'Conceptual illustration of a private employee operations dashboard with sample profiles, attendance statuses, and administrative summaries; no company data shown.',
    capabilities: [
      'Employee management',
      'Attendance',
      'Leave management',
      'RBAC',
      'Office settings',
      'Database workflows',
    ],
  },
  {
    visibility: 'public',
    title: 'Hospital Appointment Scheduler',
    category: 'web',
    technologies: 'Next.js · TypeScript · Tailwind CSS',
    description:
      'A scheduling interface created for a frontend developer challenge, with doctor filters and day and week calendar views.',
    repository: 'https://github.com/JILLELLARAGHUNATH/Hospital-Scheduler',
    image: '/project-images/hospital-scheduler.svg',
    imageAlt:
      'Interface illustration based on the Hospital Appointment Scheduler project, showing a doctor selector, day calendar, appointment entries, and schedule statuses; not a product screenshot.',
  },
  {
    visibility: 'public',
    title: 'Student Management System',
    category: 'python',
    technologies: 'Python',
    description:
      'A Python application for managing student records, with create, read, update, and delete operations.',
    repository: 'https://github.com/JILLELLARAGHUNATH/Student-Management-System-',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Laptop and programming workspace',
  },
  {
    visibility: 'public',
    title: 'Weed Detection in Crops',
    category: 'engineering',
    technologies: 'MATLAB · Image processing · Machine learning',
    description:
      'An image-processing project exploring segmentation and classification techniques to distinguish weeds from crops.',
    repository: 'https://github.com/JILLELLARAGHUNATH/weed-detection',
    image:
      'https://media.istockphoto.com/id/1307187874/photo/rows-of-winter-wheat-in-the-foundation-stage-of-growth-taken-in-the-uk-in-march-on-a-sunny.jpg?s=612x612&w=0&k=20&c=EBMwlqLmG50q3MX630uLEFuwBedA1Z4Ivo7j55bbfUc=',
    imageAlt: 'Rows of crops growing in a field',
  },
  {
    visibility: 'public',
    title: 'Voice-Controlled Autonomous Car',
    category: 'engineering',
    technologies: 'Arduino · IoT sensors',
    description:
      'An Arduino-based project combining voice control with sensor-based obstacle detection.',
    image:
      'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    imageAlt: 'Close-up of a modern vehicle',
  },
  {
    visibility: 'public',
    title: 'Calculator Using Tkinter',
    category: 'python',
    technologies: 'Python · Tkinter',
    description:
      'A desktop calculator with common arithmetic operations, percentage calculations, parentheses, and a graphical interface.',
    repository: 'https://github.com/JILLELLARAGHUNATH/Calculator-using-Tkinter',
    image: '/project-images/calculator-tkinter.svg',
    imageAlt:
      'Interface illustration based on the Python Tkinter calculator, showing its desktop window, expression display, clear key, parentheses, percent, and numeric keypad; not a product screenshot.',
  },
];

const projectFilters: { value: 'all' | ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All projects' },
  { value: 'web', label: 'Web' },
  { value: 'python', label: 'Python' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'private', label: 'Private / confidential' },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]['value']>('all');
  const visibleProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter,
  );

  return (
    <section aria-labelledby="projects-title" className="section section-light" id="projects">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          description="Public personal projects alongside clearly identified private company work."
          id="projects-title"
          label="Selected work"
          title="Projects built to solve problems."
        />
        <div aria-label="Filter projects by category" className="project-filters" role="group">
          {projectFilters.map((filter) => {
            const count =
              filter.value === 'all'
                ? projects.length
                : projects.filter((project) => project.category === filter.value).length;

            return (
              <button
                aria-pressed={activeFilter === filter.value}
                className={`project-filter${activeFilter === filter.value ? ' is-active' : ''}`}
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                type="button"
              >
                {filter.label} <span>{count}</span>
              </button>
            );
          })}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const achievements = [
  {
    title: '1st Prize – Robotics & Automation Competition',
    organization: 'KARE IEEE Robotics and Automation Society',
    detail: 'First-prize recognition in a robotics and automation competition.',
    icon: <Trophy aria-hidden="true" size={21} />,
  },
  {
    title: 'Secretary – IEEE Signal Processing Society',
    organization: 'Kalasalingam Academy of Research and Education',
    detail:
      'Supported technical workshops and coordinated with faculty and student members.',
    icon: <UsersRound aria-hidden="true" size={21} />,
  },
];

function Achievements() {
  return (
    <section
      aria-labelledby="achievements-title"
      className="section section-light"
      id="achievements"
    >
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          description="Recognition and student leadership."
          id="achievements-title"
          label="Achievements & leadership"
          title="Contributions beyond the classroom."
        />
        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <Reveal
              className="achievement-card"
              delay={index * 0.06}
              key={achievement.title}
            >
              <span className="achievement-icon">{achievement.icon}</span>
              <div>
                <h3>{achievement.title}</h3>
                <p className="achievement-organization">{achievement.organization}</p>
                <p>{achievement.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPrivate = project.visibility === 'private';

  return (
    <Reveal className="project-card" delay={index * 0.06}>
      <div className={`project-visual ${getProjectVisualClass(project)}`}>
        {project.image ? (
          <img
            alt={project.imageAlt}
            decoding="async"
            height="280"
            loading="lazy"
            src={project.image}
            width="560"
          />
        ) : (
          <div className="project-artwork">
            <span className="project-artwork-glow" />
            {'icon' in project && project.icon}
            <span className="project-artwork-label">{project.category}</span>
          </div>
        )}
        {!isPrivate && (
          <span className="project-category">{project.category}</span>
        )}
        {isPrivate && (
          <span className="project-confidential">Private / Confidential</span>
        )}
      </div>
      <div className="project-content">
        {!isPrivate && (
          <p className="project-technologies">{project.technologies}</p>
        )}
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {isPrivate && (
          <ul aria-label="Project scope" className="project-capabilities">
            {project.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        )}
        {!isPrivate && project.repository ? (
          <a
            className="project-link project-github-button"
            href={project.repository}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={16} />
            View GitHub repository <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : !isPrivate ? (
          <span className="project-link-unavailable">
            Source repository not listed
          </span>
        ) : null}
      </div>
    </Reveal>
  );
}

function getProjectVisualClass(project: Project) {
  return project.image ? '' : 'project-visual-art';
}

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    icon: <Code2 aria-hidden="true" size={19} />,
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'REST APIs', 'Flask'],
    icon: <Briefcase aria-hidden="true" size={19} />,
  },
  {
    title: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'Prisma ORM', 'SQLite'],
    icon: <Code2 aria-hidden="true" size={19} />,
  },
  {
    title: 'Authentication',
    skills: ['Role-Based Access Control (RBAC)'],
    icon: <UserRound aria-hidden="true" size={19} />,
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Vercel', 'npm', 'Vite', 'Tailwind CSS'],
    icon: <Briefcase aria-hidden="true" size={19} />,
  },
  {
    title: 'Engineering & project experience',
    skills: ['MATLAB', 'Image Processing', 'Arduino', 'IoT sensors'],
    icon: <Briefcase aria-hidden="true" size={19} />,
  },
];

function Skills() {
  return (
    <section aria-labelledby="skills-title" className="section section-dark" id="skills">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          description="Professional tools are separated from technologies demonstrated through personal and engineering projects."
          id="skills-title"
          label="My toolkit"
          title="Skills I put into practice."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal className="skill-card" delay={index * 0.08} key={group.title}>
              <span className="skill-icon">{group.icon}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="skills-note">
          Skills are grouped by professional or project context and are not proficiency ratings.
        </p>
      </div>
    </section>
  );
}

const education = [
  {
    institution: 'Kalasalingam Academy of Research and Education',
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    detail: 'CGPA: 7.87',
    year: '2022–2026',
    location: 'Tamil Nadu',
  },
  {
    institution: 'Deepthi Junior College',
    degree: '12th standard (HSC)',
    year: '2020–2022',
    detail: 'Percentage: 73%',
    location: 'Proddatur',
  },
  {
    institution: 'Sarada High School',
    degree: '10th standard (SSC)',
    year: '2019–2020',
    detail: 'CGPA: 10.0',
    location: 'Proddatur',
  },
];

function Education() {
  return (
    <section
      aria-labelledby="education-title"
      className="section section-light"
      id="education"
    >
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          description="My academic background, as listed in the existing portfolio."
          id="education-title"
          label="Education"
          title="Learning that shapes my work."
        />
        <div className="education-list">
          {education.map((item, index) => (
            <Reveal className="education-card" delay={index * 0.06} key={item.institution}>
              <span className="education-icon">
                <GraduationCap aria-hidden="true" size={21} />
              </span>
              <div className="education-copy">
                <p className="education-location">{item.location}</p>
                <h3>{item.institution}</h3>
                <p>{item.degree}</p>
              </div>
              <div className="education-meta">
                <strong>{item.detail}</strong>
                {item.year && <span>{item.year}</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const certifications = [
  {
    name: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/iframe/be1322f1ba4f',
  },
  {
    name: 'Python',
    issuer: 'MindLuster',
  },
  {
    name: 'Power BI for Beginners',
    issuer: 'Simplilearn',
  },
];

function Certifications() {
  return (
    <section
      aria-labelledby="certifications-title"
      className="section section-light section-compact"
      id="certifications"
    >
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="certifications-title"
          label="Certifications"
          title="Courses and credentials."
        />
        <div className="certification-grid">
          {certifications.map((certification, index) => (
            <Reveal
              className="certification-card"
              delay={index * 0.05}
              key={certification.name}
            >
              <span className="certification-icon">
                <Award aria-hidden="true" size={20} />
              </span>
              <span>
                <strong>{certification.name}</strong>
                <small>{certification.issuer}</small>
              </span>
              {certification.link && (
                <a
                  aria-label={`View ${certification.name} certificate`}
                  className="certification-link"
                  href={certification.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section aria-labelledby="contact-title" className="section contact-section" id="contact">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="contact-panel">
          <div>
            <p className="section-label">Contact</p>
            <h2 id="contact-title">Have a project or opportunity in mind?</h2>
            <p>
              I&apos;m open to discussing software opportunities, collaborations,
              and ideas. Reach out using the contact details below.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:jillellaraghunath@gmail.com">
              <Mail aria-hidden="true" size={18} />
              <span>jillellaraghunath@gmail.com</span>
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a href="tel:+918309900520">
              <Phone aria-hidden="true" size={18} />
              <span>+91 8309900520</span>
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a
              href="https://github.com/JILLELLARAGHUNATH"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github aria-hidden="true" size={18} />
              <span>GitHub</span>
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a
              href="https://linkedin.com/in/raghunath-jillella-a69555268"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin aria-hidden="true" size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a className="brand-mark footer-brand" href="#home">
          <span className="brand-monogram">RJ</span>
          <span>Raghunath Jillella</span>
        </a>
        <p>© {new Date().getFullYear()} Raghunath Jillella</p>
        <a className="back-to-top" href="#home">
          Back to top <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </div>
    </footer>
  );
}

export default App;
