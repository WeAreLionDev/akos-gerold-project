import classNames from 'classnames'
import type { FC } from 'react'

import type { SectionContainerProps } from './SectionContainer.interface'

const SectionContainer: FC<SectionContainerProps> = ({ children, className, containerClass, ...props }) => {
  return (
    <section {...props} className={classNames('w-full', className)}>
      <div
        className={classNames('container mx-auto flex min-h-screen w-full flex-col justify-center px-5 md:px-10 lg:px-12', containerClass)}
      >
        {children}
      </div>
    </section>
  )
}
export default SectionContainer
