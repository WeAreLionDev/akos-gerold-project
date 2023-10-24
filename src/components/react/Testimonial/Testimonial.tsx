import type { FC } from 'react'

import type { TestimonialProps } from 'src/components/react/Testimonial/Testimonial.interface'

const Testimonal: FC<TestimonialProps> = ({ author, avatar, body }) => {
  return (
    <div className="flex flex-col items-center  bg-white p-10 text-stone-950 shadow">
      <div className="max-h=[100px] mb-10 flex max-w-[100px] flex-col">
        <img src={avatar} alt={author} className="block h-auto w-full" />
      </div>
      <h3 className="mb-5 font-poppins text-xl font-semibold">{author}</h3>
      <p className="font-base text-center">“{body}”</p>
    </div>
  )
}

export default Testimonal
