import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import type { NicheConfig } from '../config'
import { LeadForm } from './LeadForm'

interface LeadModalContextValue {
  open: () => void
}

const LeadModalContext = createContext<LeadModalContextValue | null>(null)

export function useLeadModal(): LeadModalContextValue {
  const context = useContext(LeadModalContext)
  if (!context) throw new Error('useLeadModal must be used inside LeadModalProvider')
  return context
}

interface ProviderProps {
  niche: string
  form: NicheConfig['form']
  children: ReactNode
}

export function LeadModalProvider({ niche, form, children }: ProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const value = useMemo(() => ({ open }), [open])

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      {isOpen && <LeadModal niche={niche} form={form} onClose={close} />}
    </LeadModalContext.Provider>
  )
}

interface ModalProps {
  niche: string
  form: NicheConfig['form']
  onClose: () => void
}

function LeadModal({ niche, form, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleId = useId()

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLElement>('input, select, textarea')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [onClose])

  return createPortal(
    <div className="modal" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal__dialog" role="dialog" aria-modal="true" aria-labelledby={titleId} ref={dialogRef}>
        <button type="button" className="modal__close" aria-label="Закрыть" onClick={onClose}>
          ×
        </button>
        <LeadForm niche={niche} form={form} titleId={titleId} onClose={onClose} />
      </div>
    </div>,
    document.body,
  )
}
