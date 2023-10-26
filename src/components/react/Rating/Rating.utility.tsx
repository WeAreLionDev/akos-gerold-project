export const calculateRating = (rating: number, maxRating: number): { stars: number[]; halfStars: number[]; emptyStars: number[] } => {
  const stars = Math.floor(rating)
  const halfStars = Math.ceil(rating - stars)
  const emptyStars = maxRating - stars - halfStars
  const arrayFromStarts = (stars: number) => Array.from(Array(stars))
  return {
    stars: arrayFromStarts(stars),
    halfStars: arrayFromStarts(halfStars),
    emptyStars: arrayFromStarts(emptyStars),
  }
}
