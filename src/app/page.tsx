'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { details } from 'framer-motion/client'

const Marquee = ({ text, direction = 1, className = "" }: { text: string, direction?: number, className?: string }) => {
  return (
    <div className={`overflow-hidden py-4 border-y-4 border-black bg-brutal-yellow ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl font-bold font-mono mx-4 uppercase tracking-tighter text-black">
            {text} {' /// '}
          </span>
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ title, description, tech, type, color, index, onClick }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, x: -8, boxShadow: '8px 8px 0px 0px #000' }}
      onClick={onClick}
      className={`border-4 border-black p-6 md:p-8 ${color} text-black transition-all relative group h-full flex flex-col justify-between cursor-pointer`}
      style={{ boxShadow: '4px 4px 0px 0px #000' }}
    >
      <div>
        <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-2">
          <span className="font-mono font-bold text-sm bg-black text-white px-2 py-1">{type}</span>
          <span className="font-mono font-bold text-xl">0{index + 1}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-none uppercase">{title}</h3>
        <p className="font-mono text-sm md:text-base mb-6 opacity-90 font-medium line-clamp-3">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t: string, i: number) => (
          <span key={i} className="border-2 border-black px-2 py-1 text-xs md:text-sm font-bold bg-white text-black hover:bg-black hover:text-white transition-colors cursor-default" onClick={e => e.stopPropagation()}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const technologies = [
    { title: 'React/Vue', icon: '⚛️' },
    { title: 'Node.js', icon: '🚀' },
    { title: 'Python', icon: '🐍' },
    { title: 'PostgreSQL', icon: '🐘' },
    { title: 'MongoDB', icon: '🍃' },
    { title: 'Web3', icon: '⛓️' },
    { title: 'AWS/Azure', icon: '☁️' },
    { title: 'Docker', icon: '🐳' },
    { title: 'TypeScript', icon: '📘' },
    { title: 'REST APIs', icon: '🔌' },
  ]

  /* Project Modal Component */
  /* Project Modal Component */
  const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    if (!project) return null
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-[#F4F4F0] border-4 border-black p-6 md:p-12 max-w-2xl w-full relative shadow-[16px_16px_0px_0px_#000] max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-end mb-4 sticky top-0 z-20 md:absolute md:top-4 md:right-4 md:mb-0">
            <button
              onClick={onClose}
              className="bg-brutal-red text-white border-2 border-black p-2 font-bold hover:bg-black transition-colors shadow-[4px_4px_0px_0px_#000]"
            >
              CLOSE [X]
            </button>
          </div>

          <div className="mb-8 mt-2 md:mt-0">
            <span className="bg-black text-white px-3 py-1 font-mono font-bold text-sm tracking-wider">{project.type}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 uppercase leading-none">{project.title}</h2>
          </div>

          <div className="prose font-mono border-y-4 border-black py-8 mb-8">
            <p className="text-base md:text-lg leading-relaxed">
              {project.details || project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="border-2 border-black px-3 py-1 font-bold bg-white text-black">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }



  const projects = [
    {
      title: 'Trendly',
      description: 'Built automation workflows and internal dashboards to streamline social-media content operations end-to-end, integrating APIs and cloud services with reliable logging, retries, and monitoring.',
      details: 'Developed automation workflows and internal tools that power social-media content operations end-to-end. Built API integrations, cloud functions, and data pipelines (e.g., BigQuery logging + dashboards) to ingest, validate, track, and optimize publishing workflows. Focused on robustness (retries/backoff, error handling), operational visibility, and building fast, scalable tools for the team.',
      tech: ['Python', 'Automation', 'APIs', 'Cloud'],
      type: 'Work',
      color: 'bg-brutal-yellow'
    },
    {
      title: 'Raiffeisen Bank',
      description: 'Secure banking API infrastructure using .NET Core',
      details: 'Built and maintained secure integration services in a regulated banking environment. Worked on REST APIs with ASP.NET Core and Entity Framework, supported process automation with Appian (low-code), and integrated with the Temenos T24 core banking ecosystem. Focused on reliability, clean architecture, and compliance (RBAC, auditability, encryption, and monitoring).',
      tech: ['C#', '.NET', 'SQL Server'],
      type: 'Work',
      color: 'bg-white'
    },
    {
      title: 'NFT Platform',
      description: 'Decentralized asset tokenization marketplace',
      details: 'Built a full-stack dApp for digital asset tokenization, enabling users to generate, describe, and mint NFTs with AI integration and IPFS-backed metadata. Integrated with Web3.js and smart contracts to deliver secure, transparent ownership — mimicking end-to-end product delivery in SaaS environments. Designed and deployed a Solidity smart contract in Remix to enable NFT minting and metadata management. Utilized IPFS for decentralized storage, ensuring that NFT metadata and images are securely hashed and stored.',
      tech: ['React', 'Solidity', 'Web3'],
      type: 'Project',
      color: 'bg-brutal-blue text-white'
    },
    {
      title: 'Job Scheduler using Greedy Algorithm',
      description: 'Complex algorithmic simulator for OS efficiency',
      details: 'Created a real-time scheduling simulator using greedy algorithms. Visualized how task weight, duration, and deadlines affected queue prioritization. Impact: Replicated logic behind automated workload tools and job dispatch systems.',
      tech: ['Python', 'Django', 'React'],
      type: 'Project',
      color: 'bg-brutal-red text-white'
    },
    {
      title: 'Social Media Web Application',
      description: 'Full-stack social network with real-time features',
      details: 'University Project - Developed a scalable mini-social media platform with authentication and image uploads. Used React frontend with Flask backend and PostgreSQL database. Emphasized responsive UI/UX and clean REST API separation.',
      tech: ['MERN', 'Socket.io', 'Redis'],
      type: 'Project',
      color: 'bg-brutal-yellow'
    },
    {
      title: 'Construction Company Website - EDMA GmBH',
      description: 'Corporate identity and management portal',
      details: 'Developed a web application using React.js, bootstrapped with Create React App. Implemented interactive UI components and managed state effectively. Utilized npm scripts for development and production builds.',
      tech: ['React', 'UX/UI'],
      type: 'Project',
      color: 'bg-white'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-black overflow-x-hidden selection:bg-brutal-red selection:text-white">
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}


      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b-4 border-black bg-[#F4F4F0]">
        <div className="max-w-[1920px] mx-auto flex justify-between items-stretch">
          <div className="border-r-4 border-black p-4 md:p-6 bg-brutal-red hover:bg-black transition-colors group">
            <span className="font-bold text-xl md:text-2xl tracking-tighter group-hover:text-white">MQ.25</span>
          </div>
          <div className="hidden md:flex">
            {['WORK', 'TECH', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="flex items-center px-8 border-l-4 border-black font-mono font-bold hover:bg-black hover:text-white transition-colors text-sm uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
          <div
            className="md:hidden flex items-center border-l-4 border-black px-6 bg-brutal-yellow font-bold cursor-pointer hover:bg-black hover:text-white transition-colors z-50 relative"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-[#F4F4F0] pt-24 px-6 md:hidden flex flex-col gap-8 h-screen"
        >
          {['WORK', 'TECH', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="text-6xl font-bold uppercase tracking-tighter hover:text-brutal-red transition-colors border-b-4 border-black pb-4"
            >
              {item}
            </a>
          ))}
          <div className="mt-auto mb-12 pt-8">
            <p className="font-mono text-sm opacity-50">MILOT QORROLLI<br />FULL STACK DEVELOPER</p>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <header className="min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden border-b-4 border-black">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-pattern opacity-10 border-l-4 border-black hidden lg:block"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.8] tracking-tighter mb-8">
              MILOT
              <span className="block text-stroke-black text-transparent hover:text-brutal-blue transition-colors duration-300">QORROLLI</span>
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start max-w-4xl">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-black text-white p-6 md:p-8 shadow-[8px_8px_0px_0px_#FF4500] border-2 border-transparent"
            >
              <h2 className="text-2xl md:text-4xl font-bold font-mono mb-4">FULL STACK<br />DEVELOPER</h2>
              <p className="font-mono text-sm md:text-base text-gray-300">
                Building robust applications with raw power and precision.
                Based in Europe.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <a
                href="#work"
                className="bg-brutal-yellow border-4 border-black px-8 py-4 font-bold text-xl uppercase tracking-wider hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0px_0px_#000]"
              >
                View Projects
              </a>
              <a
                href="/CV_Milot_Qorrolli.pdf"
                target="_blank"
                className="bg-white border-4 border-black px-8 py-4 font-bold text-xl uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                download="Milot_Qorrolli_CV.pdf"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      <Marquee text="AVAILABLE FOR COLLABORATION • FRONTEND • BACKEND • WEB3 • CLOUD •" />

      {/* Technologies Section */}
      <section id="tech" className="py-20 border-b-4 border-black relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 uppercase tracking-tighter">
            Stack <span className="text-brutal-red text-2xl md:text-4xl align-top font-mono">01</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                className="border-4 border-black bg-white px-6 py-4 flex items-center gap-3 shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#2A52BE] transition-all cursor-crosshair"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-bold font-mono text-lg uppercase">{tech.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 border-b-4 border-black bg-brutal-bg">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter relative z-10">
              Selected Work
              <span className="block text-xl font-mono text-brutal-blue mt-2">/// RECENT DEPLOYS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 uppercase tracking-tight">Let's Build Something<br /><span className="text-brutal-yellow">Aggressive</span></h2>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:milotq1@gmail.com"
              className="bg-white text-black border-4 border-white hover:bg-black hover:text-white px-10 py-5 font-bold text-2xl uppercase transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/milotqorrolli"
              target="_blank"
              className="bg-transparent text-white border-4 border-white px-10 py-5 font-bold text-2xl uppercase hover:bg-white hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/milotqorrolli"
              target="_blank"
              className="bg-brutal-blue text-white border-4 border-brutal-blue px-10 py-5 font-bold text-2xl uppercase hover:bg-white hover:text-brutal-blue hover:border-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <footer className="mt-24 font-mono text-sm text-gray-500">
            © 2025 MILOT QORROLLI. BUILT WITH NEXT.JS & PURE CSS VIOLENCE.
          </footer>
        </div>
      </section>
    </div>
  )
}