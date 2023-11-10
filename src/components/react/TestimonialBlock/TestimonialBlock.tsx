import classNames from 'classnames'
import type { FC } from 'react'

import Image from 'src/components/sanity/Image.tsx'

import type { TestimonialBlockProps } from './TestimonialBlock.interface'

const TestimonialBlock: FC<TestimonialBlockProps> = ({ body, author, position, image, className, ...props }) => {
  return (
    <div {...props} className={classNames(className, 'flex w-full max-w-xs flex-col border p-3')}>
      <p className="mb-5 text-sm font-medium">“{body}”</p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="font-poppins text-base font-semibold">{author}</h3>
          <h4 className="font-poppins text-sm">{position}</h4>
        </div>
        <Image containerClass="flex max-h-[50px] max-w-[50px] flex-col overflow-hidden rounded-full" image={image} />
      </div>
    </div>
  )
}

export default TestimonialBlock
