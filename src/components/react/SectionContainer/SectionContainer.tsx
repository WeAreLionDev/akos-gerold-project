import classNames from 'classnames'
import type { FC } from 'react'

import type { SectionContainerProps } from './SectionContainer.interface'

const SectionContainer: FC<SectionContainerProps> = ({ children, className, containerClass, fullWidth, ...props }) => {
  const containerClasses = 'w-full'
  if (fullWidth)
    return (
      <section {...props} className={classNames(containerClasses, className)}>
        {children}
      </section>
    )
  return (
    <section {...props} className={classNames('w-full', className)}>
      <div className={classNames('container mx-auto', containerClasses, containerClass)}>{children}</div>
    </section>
  )
}
export default SectionContainer
