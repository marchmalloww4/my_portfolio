import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  flush?: boolean
}

export default function Card({ children, className = '', flush = false }: CardProps) {
  const classes = ['card', flush ? 'card--flush' : '', className].filter(Boolean).join(' ')
  return <div className={classes}>{children}</div>
}
