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
  Code
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const tagline = "Multidisciplinary Developer | Data Science • Front-End • AI • Cybersecurity";

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

  const projects = [
    {
      title: "Weed Identification (YOLOv9)",
      description: "AI solution to detect weeds in crops using high-resolution images. Built using PyTorch and deep learning.",
      live: "https://weedprediction.netlify.app/",
      github: "https://github.com/sudheerprasannakumarvasetty",
      image: "https://images.pexels.com/photos/1666813/pexels-photo-1666813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      icon: Leaf
    },
    {
      title: "Background Remover Tool",
      description: "A web tool using Flask and Remove.bg API for background removal.",
      github: "https://github.com/sudheerprasannakumarvasetty/background-remover.git",
      image: " https://images.pexels.com/photos/9488230/pexels-photo-9488230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      icon: Image
    },
    {
      title: "Image Steganography Tool",
      description: "Built with Next.js & TypeScript to hide and extract messages from images.",
      live: "https://imagesteganography7.netlify.app/",
      github: "https://github.com/sudheerprasannakumarvasetty/Image-Steganography.git",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Lock
    },
    {
      title: "Seekify",
      description: "A powerful search application built with modern web technologies for enhanced user experience.",
      live: "https://seekify.netlify.app/",
      github: "https://github.com/sudheerprasannakumarvasetty/Seekify.git",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Search
    }
  ];

  const skills = {
    "Data Science & AI": ["Python", "Pandas", "Matplotlib", "PyTorch", "TensorFlow (Beginner)", "Keras"],
    "Front-End": ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Next.js"],
    "Cybersecurity": ["Penetration Testing", "SQL Injection", "VAPT", "Maltigo", "Ngrok"],
    "Tools & Others": ["Git", "Linux", "DaVinci Resolve", "Adobe Lightroom"]
  };

  const skillIcons = {
    "Data Science & AI": Database,
    "Front-End": Code,
    "Cybersecurity": Shield,
    "Tools & Others": Wrench
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Vasetty Sudheer Prasanna Kumar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'hobbies', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-white hover:scale-105 ${
                    activeSection === section ? 'text-white font-semibold' : 'text-gray-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-gray-800/50">
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
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <img
                src="/Psp.JPG"
                alt="Vasetty Sudheer Prasanna Kumar"
                className="w-48 h-100 rounded-full mx-auto mb-8 object-cover border-4 border-white/20 shadow-2xl backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              />
              <div className="absolute inset-0 w-48 h-48 rounded-full mx-auto mb-8 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Vasetty Sudheer Prasanna Kumar
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-white animate-pulse">
              {displayedText}
            </span>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 shadow-2xl backdrop-blur-sm"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div 
            className="rounded-2xl p-8 shadow-2xl border border-gray-800/50 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <p className="text-lg leading-relaxed text-gray-300">
              I am a multidisciplinary developer with a keen interest in data science, front-end development, artificial intelligence, and cybersecurity.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              My work involves transforming complex data into actionable insights using tools such as Python, Pandas, and Matplotlib. On the front end, I specialize in developing clean, responsive interfaces using React.js, with a strong emphasis on user experience and thoughtful design.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              I am currently deepening my knowledge in artificial intelligence, particularly in building agent-based systems, while also gaining hands-on experience with Linux environments and core cybersecurity practices.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              Beyond technology, I am passionate about photography and post-production, where I apply a creative and detail-oriented mindset to visual storytelling.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              I am actively seeking full-time opportunities where I can contribute my skills in a collaborative environment, continue growing as a developer, and work on projects that combine innovation, usability, and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-800/50 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm">
                  <project.icon className="text-white" size={20} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
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
                        className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => {
              const IconComponent = skillIcons[category as keyof typeof skillIcons];
              return (
                <div 
                  key={category} 
                  className="rounded-2xl p-6 shadow-2xl border border-gray-800/50 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-white mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm text-gray-300 hover:text-white transition-colors border border-gray-700/50"
                        style={{
                          background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-4 bg-gradient-to-br from-gray-900/30 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hobbies
          </h2>
          <div 
            className="rounded-2xl p-8 shadow-2xl border border-gray-800/50 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <Camera className="text-white mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Photography & Post-Production</h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              I'm passionate about photography and post-production, where I apply a creative and detail-oriented mindset to visual storytelling.
            </p>
            <a
              href="https://www.instagram.com/sudheer.photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-gray-700/50"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <Instagram className="mr-2" size={20} />
              View Photography
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div 
            className="rounded-2xl p-8 shadow-2xl border border-gray-800/50 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:sudheerprasannakumarv@gmail.com"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="mr-3" size={20} />
                    sudheerprasannakumarv@gmail.com
                  </a>
                  <a
                    href="tel:+917075193211"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="mr-3" size={20} />
                    +91 7075193211
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800/50 py-8 px-4 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex space-x-6">
              <a
                href="https://github.com/sudheerprasannakumarvasetty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sudheerprasannakumarvasetty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/sudheerv_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/SudheerVasetty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;