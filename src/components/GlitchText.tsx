import React from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <div className={`glitch ${className}`}>
      {text}
      <span>{text}</span>
      <span>{text}</span>
    </div>
  )
} 