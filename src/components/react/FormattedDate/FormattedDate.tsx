import type { FC } from 'react'

import type { FormattedDateProps } from './FormattedDate.interface'

const FormattedDate: FC<FormattedDateProps> = ({ className, date }) => {
  const dateObject = new Date(date)
  return (
    <time className={className} dateTime={dateObject.toISOString()}>
      {dateObject.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </time>
  )
}

export default FormattedDate
