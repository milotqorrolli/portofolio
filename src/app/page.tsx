'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingUp = prevScrollPos > currentScrollPos
      
      setVisible(isScrollingUp || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const technologies = [
    {
      title: 'React/Vue',
      description: 'Frontend Development',
      icon: '⚛️'
    },
    {
      title: 'Node.js',
      description: 'Backend Development',
      icon: '🚀'
    },
    {
      title: 'Python',
      description: 'Backend & Automation',
      icon: '🐍'
    },
    {
      title: 'PostgreSQL',
      description: 'Database',
      icon: '🐘'
    },
    {
      title: 'MongoDB',
      description: 'NoSQL Database',
      icon: '🍃'
    },
    {
      title: 'Web3',
      description: 'Blockchain Development',
      icon: '⛓️'
    },
    {
      title: 'AWS/Azure',
      description: 'Cloud Platforms',
      icon: '☁️'
    },
    {
      title: 'Git',
      description: 'Version Control',
      icon: '📚'
    },
    {
      title: 'Docker',
      description: 'Containerization',
      icon: '🐳'
    },
    {
      title: 'TypeScript',
      description: 'Type-Safe JavaScript',
      icon: '📘'
    },
    {
      title: 'Agile/Scrum',
      description: 'Project Management',
      icon: '🔄'
    },
    {
      title: 'REST APIs',
      description: 'API Development',
      icon: '🔌'
    },
  ]

  const projects = [
    {
      title: 'Raiffeisen Bank Kosovo',
      description: 'Secure RESTful APIs using ASP.NET Core and Entity Framework for banking services',
      tech: ['C#', '.NET', 'Entity Framework', 'SQL Server', 'Azure'],
      type: 'Work Experience'
    },
    {
      title: 'NFT Tokenization Platform',
      description: 'Full-stack dApp for digital asset tokenization with smart contracts',
      tech: ['React', 'Solidity', 'Web3.js', 'IPFS'],
      type: 'Project'
    },
    {
      title: 'Job Scheduling System',
      description: 'Real-time scheduling simulator using greedy algorithms',
      tech: ['Python', 'Django', 'React', 'PostgreSQL'],
      type: 'Project'
    },
    {
      title: 'Social Media Application',
      description: 'Full-stack social media platform with React and Vite front-end, Node.js and Express back-end. Features user authentication, MongoDB integration, and CORS support.',
      tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'SCSS', 'bcrypt'],
      type: 'Project'
    },
    {
      title: 'Construction Company Website - EDMA GmBH',
      description: 'Developed a web application using React.js, bootstrapped with Create React App. Implemented interactive UI components and managed state effectively.',
      tech: ['React.js', 'UI/UX'],
      type: 'Project'
    },
    {
      title: 'Atlas Card Website',
      description: 'Developed a web application using React.js, bootstrapped with Create React App. Implemented interactive UI components and managed state effectively.',
      tech: ['React.js', 'UI Components'],
      type: 'Project'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-y-auto">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-[8px] bg-[#0f0f0f]/90 backdrop-blur-sm p-[10px] inline-block rounded-xl transition-transform duration-300 ${!visible ? '-translate-y-full' : ''}`}>
        <div className="flex justify-center space-x-12">
          <a href="#" className="hover:text-[#C9F603] transition-colors">Home</a>
          <a href="#work" onClick={scrollToSection('work')} className="hover:text-[#C9F603] transition-colors">Work</a>
          <a href="#technologies" onClick={scrollToSection('technologies')} className="hover:text-[#C9F603] transition-colors">Technologies</a>
          <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-[#C9F603] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center relative mb-20 bg-[url('/images/output-onlinepngtools.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
          <p className="text-base md:text-lg text-gray-400 mb-6">Based in Europe</p>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C9F603]">Full Stack Developer</span>
            <br />
            <span>3+ Years of Experience</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-white-400 max-w-3xl mb-12">
            Hi, I'm Milot, a Software Developer specializing in full-stack development.
            Skilled in React, Node.js, Python, and cloud technologies.
          </p>
          <div className="flex gap-6">
            <a 
              href="#work" 
              onClick={scrollToWork}
              className="border-2 border-[#C9F603] text-[#C9F603] px-8 py-4 hover:bg-[#C9F603] hover:text-black transition-colors text-lg"
            >
              See My Work
            </a>
            <a 
              href="/cv.pdf" 
              className="border-2 border-[#C9F603] text-[#C9F603] px-8 py-4 hover:bg-[#C9F603] hover:text-black transition-colors text-lg"
              download="Milot_Qorrolli_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Rest of the content with padding */}
      <div className="px-8 md:px-16">
        {/* Technologies */}
        <section id="technologies" className="py-20">
          <h2 className="text-3xl font-bold mb-12"># Current technologies</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => {
              let boxColor = "border-white hover:bg-white";
              // First row special colors (0-based index)
              if (index === 0) boxColor = "border-[#C9F603] hover:bg-[#C9F603]"; // First box
              if (index === 4) boxColor = "border-[#C9F603] hover:bg-[#C9F603]"; // Second last box of first row
              if (index === 5) boxColor = "border-[#1894ac] hover:bg-[#1894ac]"; // Last box of first row
              // Second row special colors
              if (index === 6) boxColor = "border-[#1894ac] hover:bg-[#1894ac]"; // First box
              if (index === 7) boxColor = "border-[#C9F603] hover:bg-[#C9F603]"; // Second box
              if (index === 11) boxColor = "border-[#C9F603] hover:bg-[#C9F603]"; // Last box
              
              return (
                <motion.div
                  key={index}
                  className={`border ${boxColor} p-3 hover:text-black transition-colors`}
                  whileHover={{ scale: 0.98 }}
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <h3 className="text-sm font-bold mb-1">{tech.title}</h3>
                  <p className="text-xs text-gray-400">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="mb-20">
          <h2 className="text-3xl font-bold mb-12"># My portfolio</h2>
          <div className="space-y-12">
            {projects.map((project, index) => {
              let boxColor = "border-white";
              // Special colored boxes
              if (index === 1) boxColor = "border-[#C9F603]"; // Second box
              if (index === 3) boxColor = "border-[#1894ac]"; // Fourth box
              if (index === 5) boxColor = "border-[#C9F603]"; // Last box

              return (
                <motion.div
                  key={index}
                  className={`border-2 ${boxColor} p-8`}
                  whileHover={{ scale: 0.99 }}
                >
                  <div className="text-sm text-gray-400 mb-2">{project.type}</div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className={`border ${boxColor === "border-white" ? "border-white" : boxColor} px-3 py-1 text-sm`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Like what you see? Let's connect!</h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/milotqorrolli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/milotqorrolli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:milotq1@gmail.com"
              className="border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Email
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400">
          <p>© 2025 | All rights reserved</p>
        </footer>
      </div>
    </div>
  )
} 