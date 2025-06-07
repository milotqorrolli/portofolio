import React from 'react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  link: string
  color: string
}

export default function ProjectCard({ title, description, image, link, color }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video w-full overflow-hidden bg-gray-900"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-30"
        />
      )}
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div 
        className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20" 
        style={{ backgroundColor: color }}
      />
    </motion.a>
  )
} 