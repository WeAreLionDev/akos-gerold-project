import { useEffect, useState } from 'react'
import { useWindowDimensions } from 'src/utility'

const MEDIA_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

const useMediaBreakpoint = () => {
  const { height, width } = useWindowDimensions()

  const [mediaBreakpoint, setMediaBreakpoint] = useState<keyof typeof MEDIA_BREAKPOINTS>('sm')

  useEffect(() => {
    const breakpoint = Object.entries(MEDIA_BREAKPOINTS)
      .reverse()
      .find(([, value]) => value <= width)?.[0] as keyof typeof MEDIA_BREAKPOINTS
    if (breakpoint) {
      setMediaBreakpoint(breakpoint)
    }
    return () => {
      setMediaBreakpoint('sm')
    }
  }, [height, width])

  return { mediaBreakpoint }
}

export default useMediaBreakpoint
