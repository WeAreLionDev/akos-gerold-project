import type { HTMLAttributes, PropsWithChildren } from 'react'

export type SectionContainerProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & { containerClass?: string; fullWidth?: boolean }
