import type { ReactNode } from 'react'
import { useLeadModal } from './LeadModal'

interface Props {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function CtaButton({ children, size = 'md', className = '', onClick }: Props) {
  const { open } = useLeadModal()
  const sizeClass = size === 'md' ? '' : ` btn--${size}`

  return (
    <button
      type="button"
      className={`btn btn--primary${sizeClass} ${className}`.trim()}
      onClick={() => {
        onClick?.()
        open()
      }}
    >
      {children}
    </button>
  )
}
