'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      title: 'Docker',
      description: 'Containerization',
      icon: '🐳'
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
      title: 'Web3',
      description: 'Blockchain Development',
      icon: '⛓️'
    },
    {
      title: 'REST APIs',
      description: 'API Development',
      icon: '🔌'
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
    }
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
      tech: ['React.js', 'Create React App', 'npm', 'UI/UX'],
      type: 'Project'
    },
    {
      title: 'Atlas Card Website',
      description: 'Developed a web application using React.js, bootstrapped with Create React App. Implemented interactive UI components and managed state effectively.',
      tech: ['React.js', 'Create React App', 'State Management', 'UI Components'],
      type: 'Project'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8 md:p-16">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
        <div>
          <p className="text-sm md:text-base text-gray-400 mb-2">Based in Europe</p>
          <motion.h2 
            className="text-2xl md:text-4xl bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Software Developer with
            <span className="block text-white"> Full Stack Experience</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Hi, I'm Milot, a Software Developer specializing in full-stack development. Skilled in React, Node.js, Python, 
            and cloud technologies.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <a 
            href="#work" 
            onClick={scrollToWork}
            className="inline-block border-2 border-white px-6 py-3 mr-4 hover:bg-white hover:text-black transition-colors"
          >
            See My Work
          </a>
          <a 
            href="/cv.pdf" 
            className="inline-block border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
            download="Milot_Qorrolli_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* Technologies */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12"># Current technologies</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="border border-white p-3 hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 0.98 }}
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="text-sm font-bold mb-1">{tech.title}</h3>
              <p className="text-xs text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="mb-20">
        <h2 className="text-3xl font-bold mb-12"># My portfolio</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border-2 border-white p-8"
              whileHover={{ scale: 0.99 }}
            >
              <div className="text-sm text-gray-400 mb-2">{project.type}</div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="border border-white px-3 py-1 text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
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
        <p>© 2024 | Milot Qorrolli</p>
      </footer>
    </div>
  )
} 