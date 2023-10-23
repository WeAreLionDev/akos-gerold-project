import { useRef } from 'react'

declare global {
  interface CSSStyleDeclaration {
    msOverflowStyle?: 'auto' | 'none' | 'scrollbar' | 'scrollbar-thin' | 'inherit' | 'initial' | 'revert' | 'unset'
  }
}

const useScrollbarWidth = (): number => {
  const didCompute = useRef(false)
  const widthRef = useRef(0)

  if (didCompute.current) return widthRef.current

  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'

  outer.style.msOverflowStyle = 'scrollbar'
  document.body.appendChild(outer)

  const inner = document.createElement('div')
  outer.appendChild(inner)

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  outer?.parentNode?.removeChild(outer)

  document?.querySelector<HTMLElement>(':root')?.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)

  didCompute.current = true
  widthRef.current = scrollbarWidth

  return scrollbarWidth
}

export default useScrollbarWidth
