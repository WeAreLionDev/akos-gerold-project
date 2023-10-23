import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/sharp-light-svg-icons'
import classNames from 'classnames'
import type { FC } from 'react'

import { IconContainer } from 'src/components/react'

import type { IconLinkProps } from './IconLink.interface'

const IconLink: FC<IconLinkProps> = ({ label, icon, className, ...props }) => {
  return (
    <a {...props} className={classNames('group relative flex items-center', className)}>
      <IconContainer className="relative px-2">
        <FontAwesomeIcon
          icon={icon}
          className="transition-color text-primary group-hover:text-secondary h-8 w-8 duration-300 ease-in-out group-hover:scale-90"
        />
      </IconContainer>
      <span className="transition-color group-hover:text-secondary relative whitespace-nowrap p-2 pr-8 text-white underline decoration-white underline-offset-8 duration-300 ease-in-out">
        {label}
      </span>
      <IconContainer className="absolute bottom-2 right-[-10px] px-2 opacity-0 transition-all duration-300 ease-in-out group-hover:right-0 group-hover:opacity-100">
        <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 text-white" />
      </IconContainer>
    </a>
  )
}

export default IconLink
