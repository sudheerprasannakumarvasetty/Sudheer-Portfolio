import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  Download,
  ExternalLink,
  Leaf,
  Image,
  Lock,
  Search,
  Database,
  Shield,
  Wrench,
  Camera,
  Menu,
  X,
  Code,
  Sun,
  Moon,
  ChevronRight,
  Star
} from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  role: string;
  process: string;
  lessonsLearned: string;
  techStack: string[];
  live?: string;
  github?: string;
  image: string;
  icon: React.ComponentType<any>;
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const tagline = "Full-Stack Developer | AI & Data Science Enthusiast | Cybersecurity Explorer ";

  useEffect(() => {
    if (activeSection === 'home' && currentIndex < tagline.length) {
      const timer = setTimeout(() => {
        setDisplayedText(tagline.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, activeSection, tagline]);

  useEffect(() => {
    if (activeSection === 'home') {
      setDisplayedText('');
      setCurrentIndex(0);
    }
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects: Project[] = [
    {
      title: "Weed Identification System",
      subtitle: "AI-Powered Agricultural Solution",
      description: "AI solution to detect weeds in crops using high-resolution images and deep learning for precision agriculture.",
      problem: "Farmers struggle with manual weed identification, leading to inefficient herbicide use and reduced crop yields.",
      role: "Full-Stack Developer & ML Engineer",
      process: "Collected and labeled agricultural image datasets, implemented YOLOv9 architecture, trained the model with PyTorch, and deployed a web interface for real-time predictions.",
      lessonsLearned: "Gained expertise in computer vision, data preprocessing, and deploying ML models in production environments.",
      techStack: ["Python", "PyTorch", "YOLOv9", "OpenCV", "Flask", "HTML/CSS"],
      live: "https://weedprediction.netlify.app/",
      github: "https://github.com/sudheerprasannakumarvasetty",
      image: "https://images.pexels.com/photos/1666813/pexels-photo-1666813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      icon: Leaf
    },
    {
      title: "Background Remover Tool",
      subtitle: "Automated Image Processing",
      description: "A web application using Flask and Remove.bg API for seamless background removal with batch processing capabilities.",
      problem: "Manual background removal is time-consuming and requires advanced photo editing skills.",
      role: "Backend Developer & API Integrator",
      process: "Integrated Remove.bg API, built Flask backend with file upload handling, implemented batch processing, and created an intuitive user interface.",
      lessonsLearned: "Learned API integration best practices, file handling in web applications, and user experience optimization.",
      techStack: ["Python", "Flask", "Remove.bg API", "JavaScript", "Bootstrap"],
      github: "https://github.com/sudheerprasannakumarvasetty/background-remover.git",
      image: "https://images.pexels.com/photos/9488230/pexels-photo-9488230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      icon: Image
    },
    {
      title: "Image Steganography Tool",
      subtitle: "Secure Data Hiding Solution",
      description: "Advanced steganography application built with Next.js & TypeScript to securely hide and extract messages from images.",
      problem: "Need for secure communication methods that don't raise suspicion or require complex encryption tools.",
      role: "Frontend Developer & Security Researcher",
      process: "Researched steganography algorithms, implemented LSB (Least Significant Bit) technique, built responsive UI with Next.js, and added TypeScript for type safety.",
      lessonsLearned: "Deepened understanding of digital image processing, cryptography concepts, and modern React frameworks.",
      techStack: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS", "Vercel"],
      live: "https://imagesteganography7.netlify.app/",
      github: "https://github.com/sudheerprasannakumarvasetty/Image-Steganography.git",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Lock
    },
    {
      title: "Seekify Search Engine",
      subtitle: "Enhanced Search Experience",
      description: "A powerful search application with advanced filtering, real-time suggestions, and modern UI for enhanced user experience.",
      problem: "Traditional search interfaces lack modern UX patterns and advanced filtering capabilities.",
      role: "Full-Stack Developer & UX Designer",
      process: "Designed user-centric interface, implemented search algorithms, added real-time filtering, and optimized for performance and accessibility.",
      lessonsLearned: "Improved skills in search optimization, user interface design, and performance optimization techniques.",
      techStack: ["React", "JavaScript", "CSS3", "REST APIs", "Netlify"],
      live: "https://seekify.netlify.app/",
      github: "https://github.com/sudheerprasannakumarvasetty/Seekify.git",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Search
    }
  ];

  const skills = {
    "Data Science & AI": {
      skills: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch"],
      proficiency: ["Advanced", "Advanced", "Advanced", "Intermediate", "Familiar", "Intermediate"]
    },
    "Front-End Development": {
      skills: ["JavaScript", "Bootstrap", "TypeScript", "React.js", "Next.js"],
      proficiency: ["Advanced", "Advanced", "Advanced", "Intermediate", "Intermediate"]
    },
    "Cybersecurity": {
      skills: ["Penetration Testing", "SQL Injection", "VAPT", "Maltigo", "Ngrok"],
      proficiency: ["Intermediate", "Intermediate", "Intermediate", "Intermediate", "Intermediate"]
    },
    "Tools & Others": {
      skills: ["Git", "Linux", "DaVinci Resolve", "Adobe Lightroom"],
      proficiency: ["Intermediate", "Advanced", "Intermediate", "Advanced"]
    }
  };

  const skillIcons = {
    "Data Science & AI": Database,
    "Front-End Development": Code,
    "Cybersecurity": Shield,
    "Tools & Others": Wrench
  };

  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Familiar': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const photographyGallery = [
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];

  const themeClasses = 'bg-black text-white';
  const cardClasses = 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50';

  return (
    <div className={`min-h-screen ${themeClasses}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b shadow-2xl bg-black/90 border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-300">
              Sudheer's portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['home', 'about', 'projects', 'skills', 'hobbies', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:scale-105 text-sm lg:text-base ${
                    activeSection === section 
                      ? 'font-semibold text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 backdrop-blur-md rounded-lg mt-2 border bg-black/95 border-gray-800/50">
              {['home', 'about', 'projects', 'skills', 'hobbies', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-4 capitalize transition-all duration-300 hover:text-white hover:bg-gray-900/50"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <div className="relative">
              <img
                src="/Psp.JPG"
                alt="Vasetty Sudheer Prasanna Kumar"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto mb-8 object-cover border-4 shadow-2xl backdrop-blur-sm border-white/20"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              />
              <div className="absolute inset-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto mb-8 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent"></div>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 animate-slide-up px-4">
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-white via-gray-200 to-gray-400 break-words">
              Vasetty Sudheer Prasanna Kumar
            </span>
          </h1>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12 h-12 sm:h-16 flex items-center justify-center text-gray-300 px-4">
            <span className="border-r-2 animate-pulse border-white text-center">
              {displayedText}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 border shadow-2xl backdrop-blur-sm bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border-gray-700/50 text-sm sm:text-base w-full sm:w-auto justify-center"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <Download className="mr-2" size={18} />
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/sudheerprasannakumarvasetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 border shadow-2xl backdrop-blur-sm bg-blue-600/20 hover:bg-blue-600/30 border-blue-500/30 text-blue-300 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Linkedin className="mr-2" size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-300">
            About Me
          </h2>
          <div className="space-y-8">
            <div 
              className={`rounded-2xl p-6 sm:p-8 shadow-2xl border backdrop-blur-sm ${cardClasses}`}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <p className="text-lg sm:text-xl leading-relaxed font-medium text-white">
                I'm a Front-End Developer skilled in data science, dedicated to building intelligent systems that merge functionality with clean, purposeful design.
              </p>
            </div>

            <div 
              className={`rounded-2xl p-6 sm:p-8 shadow-2xl border backdrop-blur-sm ${cardClasses}`}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                My expertise spans data science, where I transform complex datasets into actionable insights using Python, Pandas, and PyTorch, and front-end development, where I craft responsive, user-centric interfaces with React.js and modern web technologies. I'm currently expanding my knowledge in artificial intelligence and cybersecurity, with hands-on experience in penetration testing and secure application development.
              </p>
            </div>

            <div 
              className={`rounded-2xl p-6 sm:p-8 shadow-2xl border backdrop-blur-sm ${cardClasses}`}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                Beyond coding, I'm passionate about photography, graphic design, and visual storytelling, which enhance my eye for design and attention to detail in development. I'm actively seeking full-time opportunities where I can contribute to innovative projects that make a meaningful impact.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700/30">
                <p className="text-base sm:text-lg font-medium text-white">
                  Feel free to explore my projects or{' '}
                  <a 
                    href="https://www.linkedin.com/in/sudheerprasannakumarvasetty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-colors text-blue-400 hover:text-blue-300"
                  >
                    connect with me on LinkedIn
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gradient-to-br from-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-300">
            Projects
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border backdrop-blur-sm cursor-pointer ${cardClasses}`}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm bg-black/50">
                    <project.icon className="text-white" size={20} />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium mb-3 text-blue-400">
                    {project.subtitle}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-gray-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded-md text-xs font-medium border bg-gray-800/50 text-gray-300 border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center transition-colors text-white hover:text-gray-300 text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} className="mr-1" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center transition-colors text-gray-400 hover:text-gray-300 text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} className="mr-1" />
                          GitHub
                        </a>
                      )}
                    </div>
                    <button 
                      className="text-sm font-medium transition-colors text-blue-400 hover:text-blue-300"
                    >
                      View Case Study →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-gray-900">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-700/30 bg-inherit">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg transition-colors hover:bg-gray-800"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
              />
              
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-white">
                    Problem
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {selectedProject.problem}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3 text-white">
                    My Role
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {selectedProject.role}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3 text-white">
                  Process
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {selectedProject.process}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3 text-white">
                  Lessons Learned
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {selectedProject.lessonsLearned}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3 text-white">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium border bg-gray-800/50 text-gray-300 border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    View Live Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border transition-all duration-300 transform hover:scale-105 border-gray-700 hover:bg-gray-800 text-gray-300"
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-300">
            Skills & Expertise
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, data]) => {
              const IconComponent = skillIcons[category as keyof typeof skillIcons];
              return (
                <div 
                  key={category} 
                  className={`rounded-xl p-4 sm:p-5 shadow-2xl border backdrop-blur-sm ${cardClasses}`}
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="mr-3 text-white" size={20} />
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {data.skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-sm sm:text-base text-gray-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-24 px-4 bg-gradient-to-br from-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-300">
            Hobbies & Interests
          </h2>
          <div 
            className={`rounded-2xl p-6 sm:p-8 shadow-2xl border backdrop-blur-sm ${cardClasses}`}
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <Camera className="mr-4 text-white" size={28} />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Photography & Post-Production
                </h3>
              </div>
              <p className="text-base sm:text-lg mb-8 max-w-3xl mx-auto text-gray-300">
                I'm passionate about photography and post-production, where I apply a creative and detail-oriented mindset to visual storytelling. This hobby enhances my eye for design and composition in my development work.
              </p>
            </div>
            
            <div className="text-center">
              <a
                href="https://www.instagram.com/sudheer.photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:bg-gray-800"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <Instagram className="mr-2" size={20} />
                View Full Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-300">
            Let's Connect
          </h2>
          
          <div 
            className={`rounded-2xl p-6 sm:p-8 shadow-2xl border backdrop-blur-sm ${cardClasses}`}
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-6 text-white">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:sudheerprasannakumarv@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition-colors text-gray-300 hover:text-white text-sm sm:text-base"
                  >
                    <Mail className="mr-3" size={20} />
                    sudheerprasannakumarv@gmail.com
                  </a>
                  <a
                    href="tel:+917075193211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition-colors text-gray-300 hover:text-white text-sm sm:text-base"
                  >
                    <Phone className="mr-3" size={20} />
                    +91 7075193211
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-6 text-white">
                  Follow Me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <a
                    href="https://www.linkedin.com/in/sudheerprasannakumarvasetty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start p-3 rounded-lg transition-all duration-300 hover:scale-105 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300"
                  >
                    <Linkedin className="mr-2" size={20} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/sudheerprasannakumarvasetty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start p-3 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-700/50 hover:bg-gray-700/70 text-gray-300"
                  >
                    <Github className="mr-2" size={20} />
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/sudheerv_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start p-3 rounded-lg transition-all duration-300 hover:scale-105 bg-pink-600/20 hover:bg-pink-600/30 text-pink-300"
                  >
                    <Instagram className="mr-2" size={20} />
                    Instagram
                  </a>
                  <a
                    href="https://x.com/SudheerVasetty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start p-3 rounded-lg transition-all duration-300 hover:scale-105 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300"
                  >
                    <Twitter className="mr-2" size={20} />
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 shadow-2xl bg-black border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-base sm:text-lg font-medium text-white">
                Vasetty Sudheer Prasanna Kumar
              </p>
              <p className="text-sm text-gray-400">
                Full-Stack Developer | AI & Data Science Enthusiast
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:bg-gray-800 text-gray-300"
              >
                <Download className="mr-2" size={16} />
                Resume
              </a>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/sudheerprasannakumarvasetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors transform hover:scale-110 text-gray-400 hover:text-white"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sudheerprasannakumarvasetty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors transform hover:scale-110 text-gray-400 hover:text-white"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/sudheerv_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors transform hover:scale-110 text-gray-400 hover:text-white"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://x.com/SudheerVasetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors transform hover:scale-110 text-gray-400 hover:text-white"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;