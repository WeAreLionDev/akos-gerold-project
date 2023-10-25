import type { FC } from 'react'

import './ClientCarousel.css'
import type { ClientCarouselProps } from './ClientCarousel.interface'

const ClientCarousel: FC<ClientCarouselProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col">
      <div {...props} className="client-section">
        {Array.from(Array(8)).map(() => (
          <>
            <div className="bg-black" />
            <div className="bg-red-500" />
            <div className="bg-blue-500" />
          </>
        ))}
      </div>
    </div>
  )
}

export default ClientCarousel
