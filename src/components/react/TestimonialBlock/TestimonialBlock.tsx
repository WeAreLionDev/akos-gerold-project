import classNames from 'classnames'
import type { FC } from 'react'

import type { TestimonialBlockProps } from './TestimonialBlock.interface'

const TestimonialBlock: FC<TestimonialBlockProps> = ({ body, author, className, ...props }) => {
  return (
    <div {...props} className={classNames(className, 'flex max-w-xs flex-col border p-3')}>
      <p className="mb-5 text-sm font-medium">“{body}”</p>
      <h3 className="font-poppins text-base font-semibold">{author}</h3>
    </div>
  )
}

export default TestimonialBlock
