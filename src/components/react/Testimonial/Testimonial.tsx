import type { FC } from 'react'

import './Testimonial.css'
import type { TestimonialProps } from './Testimonial.interface'

const Testimonal: FC<TestimonialProps> = ({ author, avatar, body }) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial">
        <div className="mb-5 flex max-h-[100px] max-w-[100px] flex-col">
          <img src={avatar} alt={author} className="block h-auto w-full" />
        </div>
        <h3 className="mb-2 font-poppins text-xl font-semibold">{author}</h3>
        <h4 className="mb-5 font-poppins text-base">Vice President of Sales Team BMW 123</h4>
        <p className="font-base text-center">“{body}”</p>
      </div>
    </div>
  )
}

export default Testimonal
