import type { FC } from 'react'

import Image from 'src/components/sanity/Image.tsx'

import './Testimonial.css'
import type { TestimonialProps } from './Testimonial.interface'

const Testimonal: FC<TestimonialProps> = ({ author, image, position, body }) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial">
        <Image containerClass="mb-5 flex max-h-[100px] max-w-[100px] flex-col overflow-hidden rounded-full" image={image} />
        <h3 className="mb-2 font-poppins text-xl font-semibold">{author}</h3>
        <h4 className="mb-5 font-poppins text-base">{position}</h4>
        <p className="font-base text-center">“{body}”</p>
      </div>
    </div>
  )
}

export default Testimonal
