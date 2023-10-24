import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/sharp-solid-svg-icons'
import type { FC } from 'react'

import type { RatingProps } from './Rating.interface'

const Rating: FC<RatingProps> = ({ subtitle, rating, maxRating }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 flex items-center gap-1">
        <FontAwesomeIcon icon={faStar} className="h-8 w-8 text-yellow-400" />
        <FontAwesomeIcon icon={faStar} className="h-8 w-8 text-yellow-400" />
        <FontAwesomeIcon icon={faStar} className="h-8 w-8 text-yellow-400" />
        <FontAwesomeIcon icon={faStar} className="h-8 w-8 text-yellow-400" />
        <FontAwesomeIcon icon={faStarHalfStroke} className="h-8 w-8 text-yellow-400" />
        <span className="text-lg">
          {rating}/{maxRating}
        </span>
      </div>
      <span className="text-lg text-zinc-100">{subtitle}</span>
    </div>
  )
}

export default Rating
