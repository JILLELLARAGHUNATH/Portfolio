import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  BookOpen, 
  Briefcase, 
  Award, 
  User, 
  Cpu, 
  Brain,
  GraduationCap
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Raghunath Jillella
          </span>
        </motion.div>
        
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="hidden md:flex space-x-8"
        >
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.1 }}
              className="hover:text-pink-400 transition-colors"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Raghunath Jillella
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-300">Aspiring Software Developer</h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Passionate about programming and problem-solving with expertise in Python, C, and MATLAB.
              Looking to apply my skills to create innovative solutions and contribute to impactful projects.
            </p>
            
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Contact Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-6 py-3 border border-white/30 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src="src\images\raghunath.jpg" 
                alt="Raghunath Jillella" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        {title}
      </h2>
      <div className="mt-2 w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full"></div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" />
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <User size={120} className="text-pink-400" />
                <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Career Objective</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Aspiring software developer with a strong foundation in Python, C, and MATLAB, eager to apply programming skills
                to real-world problem-solving. Passionate about learning emerging technologies and contributing to innovative projects.
                Seeking an opportunity to enhance technical expertise, collaborate with dynamic teams, and develop solutions that drive
                efficiency and innovation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Problem Solver</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Critical Thinker</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Team Player</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Continuous Learner</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Python", icon: <Code size={24} />, category: "technical" },
    { name: "MATLAB", icon: <Code size={24} />, category: "technical" },
    { name: "sql", icon: <Cpu size={24} />, category: "technical" },
    { name: "PowerBI", icon: <Cpu size={24} />, category: "technical" },
    { name: "HTML", icon: <Code size={24} />, category: "technical" },
    { name: "CSS", icon: <Code size={24} />, category: "technical" },
   // { name: "C (Basics)", icon: <Code size={24} />, category: "technical" },
    { name: "Teamwork", icon: <Brain size={24} />, category: "soft" },
    { name: "Problem Solving", icon: <Brain size={24} />, category: "soft" },
    { name: "Critical Thinking", icon: <Brain size={24} />, category: "soft" },
    { name: "Communication", icon: <Brain size={24} />, category: "soft" },
    
  ];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code size={24} className="text-pink-400" />
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.filter(skill => skill.category === "technical").map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <div className="mt-1 w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${70 + Math.random() * 30}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Brain size={24} className="text-pink-400" />
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.filter(skill => skill.category === "soft").map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <div className="mt-1 w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${70 + Math.random() * 30}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Experience" />
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <Briefcase size={80} className="text-pink-400" />
                <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-2xl -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold mt-4">Youngminds Technology Solutions Pvt Ltd</h3>
              <p className="text-gray-400">MATLAB Image Processing - Intern</p>
              <p className="text-gray-400">May 2024 - July 2024</p>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Responsibilities & Achievements</h3>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 min-w-6 h-6 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Worked on MATLAB Image Processing, meeting project objectives.</p>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 min-w-6 h-6 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Explored various image processing techniques and real-world applications.</p>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 min-w-6 h-6 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Recognized for curiosity, problem-solving, and a strong learning attitude.</p>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Student Management System",
      technologies: "Python",
      description: [
        "Developed a Python-based Student Management System for efficient student data handling.",
        "Implemented CRUD operations to manage student records, including registration, updates, and deletions.",
        "Enhanced data retrieval and organization with structured storage and user-friendly interfaces."
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Autonomous Car (Voice Control) Using Arduino",
      technologies: "IOT-Sensors and Device",
      description: [
        "Designed and developed a voice-controlled autonomous car using Arduino and IoT sensors.",
        "Integrated speech recognition modules to enable hands-free navigation.",
        "Implemented sensor-based obstacle detection for real-time path correction and safety."
      ],
      image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
    {
      title: "Weed Detection in Crops Using MATLAB",
      technologies: "Image Processing, Machine Learning, MATLAB",
      description: [
        "Developed an image-processing-based system for detecting weeds in agricultural fields using MATLAB.",
        "Implemented advanced segmentation techniques to differentiate weeds from crops efficiently.",
        "Utilized machine learning algorithms for precise classification and identification of weed-infested areas."
      ],
      image: "https://media.istockphoto.com/id/1307187874/photo/rows-of-winter-wheat-in-the-foundation-stage-of-growth-taken-in-the-uk-in-march-on-a-sunny.jpg?s=612x612&w=0&k=20&c=EBMwlqLmG50q3MX630uLEFuwBedA1Z4Ivo7j55bbfUc="
    }    
  ];
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black/30 to-transparent">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <div className="mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full text-sm">
            {project.technologies}
          </span>
        </div>
        
        <ul className="space-y-2 mb-4">
          {project.description.map((item: string, i: number) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-2 text-gray-300 text-sm"
            >
              <div className="mt-1 min-w-4 h-4 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                <span className="text-[10px]">✓</span>
              </div>
              <p>{item}</p>
            </motion.li>
          ))}
        </ul>
        
       <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const education = [
    {
      institution: "Kalasalingam Academy of Research and Education",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      year: "Pursuing",
      score: "CGPA: 7.88",
      location: "Tamil Nadu"
    },
    {
      institution: "Deepthi Junior College",
      degree: "12th std (HSC)",
      year: "2020-2022",
      score: "Percentage: 73%",
      location: "Proddatur"
    },
    {
      institution: "Sarada High School",
      degree: "10th std (SSC)",
      year: "2019-2020",
      score: "CGPA: 10.0",
      location: "Proddatur"
    }
  ];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Education" />
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-violet-500 rounded-full"></div>
          
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl max-w-md">
                  <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full z-10 
                    ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}"></div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-lg">
                      <GraduationCap size={24} className="text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                  </div>
                  
                  <div className="ml-14">
                    <p className="text-gray-300 mb-1">{edu.degree}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                    <p className="text-pink-400 font-medium">{edu.score}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certifications = ["NPTEL", "MATLAB", "PYTHON"];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-6">
        <SectionTitle title="Certifications" />
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <Award size={100} className="text-pink-400" />
                <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-6">Professional Certifications</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 bg-gradient-to-br from-pink-500/10 to-violet-500/10 rounded-xl border border-white/10 hover:border-pink-500/30 transition-colors text-center"
                  >
                    <Award size={32} className="text-pink-400 mx-auto mb-2" />
                    <h4 className="font-medium">{cert}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const contactInfo = [
    { icon: <Phone size={24} />, text: "+91 8309900520", href: "tel:+918309900520" },
    { icon: <Mail size={24} />, text: "jillellaraghunath@gmail.com", href: "mailto:jillellaraghunath@gmail.com" },
    { icon: <Linkedin size={24} />, text: "LinkedIn", href: "https://www.linkedin.com/in/jillella-raghunath-ece-a69555268" },
    { icon: <Github size={24} />, text: "Github", href: "https://github.com/JILLELLARAGHUNATH" }
  ];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Contact Me" />
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out to me for any opportunities, collaborations, or just to say hello!
                I'm always open to discussing new projects and ideas.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a 
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg">
                      {contact.icon}
                    </div>
                    <span>{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-black/50 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400">© 2025 Raghunath Jillella. All rights reserved.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a href="https://github.com/JILLELLARAGHUNATH" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jillella-raghunath-ece-a69555268" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jillellaraghunath@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default App;