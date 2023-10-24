import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarRegular } from '@fortawesome/sharp-regular-svg-icons'
import { faStar, faStarHalfStroke } from '@fortawesome/sharp-solid-svg-icons'
import type { FC } from 'react'

import type { RatingProps } from './Rating.interface'
import { calculateRating } from './Rating.utility'

const Rating: FC<RatingProps> = ({ subtitle, rating, maxRating = 5 }) => {
  const fontAwesomeClasses = 'h-8 w-8 text-amber-300'
  const { stars, halfStars, emptyStars } = calculateRating(rating, maxRating)
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 flex items-center gap-1">
        {stars.map((star) => (
          <FontAwesomeIcon key={`half-star-${star}`} icon={faStar} className={fontAwesomeClasses} />
        ))}
        {halfStars.map((halfStar) => (
          <FontAwesomeIcon key={`half-star-${halfStar}`} icon={faStarHalfStroke} className={fontAwesomeClasses} />
        ))}
        {emptyStars.map((emptyStar) => (
          <FontAwesomeIcon key={`half-star-${emptyStar}`} icon={faStarRegular} className={fontAwesomeClasses} />
        ))}
        <span className="text-lg">
          {rating}/{maxRating}
        </span>
      </div>
      <span className="text-lg text-zinc-100">{subtitle}</span>
    </div>
  )
}

export default Rating
