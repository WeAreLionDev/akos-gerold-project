import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarRegular } from '@fortawesome/sharp-regular-svg-icons'
import { faStar, faStarHalfStroke } from '@fortawesome/sharp-solid-svg-icons'
import classNames from 'classnames'
import type { FC } from 'react'

import type { RatingProps } from './Rating.interface'
import { calculateRating } from './Rating.utility'

const Rating: FC<RatingProps> = ({ subtitle, rating, maxRating = 5, className }) => {
  const fontAwesomeClasses = 'w-6 h-6 2xl:h-8 2xl:w-8 text-amber-300'
  const { stars, halfStars, emptyStars } = calculateRating(rating, maxRating)
  return (
    <div className={classNames('flex flex-col items-center', className)}>
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
        <span className="text-base xl:text-lg">
          {rating}/{maxRating}
        </span>
      </div>
      <span className="text-base text-zinc-100 xl:text-lg">{subtitle}</span>
    </div>
  )
}

export default Rating
