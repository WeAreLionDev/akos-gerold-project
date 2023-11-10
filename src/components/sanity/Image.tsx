import classNames from 'classnames'
import type { FC, ImgHTMLAttributes } from 'react'
import { useGetImageUrl } from 'src/clients/sanity'

import type { SanityImageWithAlt } from 'src/types'

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & { image: SanityImageWithAlt; containerClass?: string }

const Image: FC<ImageProps> = ({ className, containerClass, image, ...props }) => {
  const imageUrlBuilder = useGetImageUrl(image.asset.url)
  const isSvg = imageUrlBuilder.url().includes('.svg')
  const fallbackImage = isSvg ? imageUrlBuilder.url() : imageUrlBuilder.format('png').url()
  const webpMobileUrl = isSvg ? imageUrlBuilder.url() : imageUrlBuilder.format('webp').width(480).url()
  const webpUrl = isSvg ? imageUrlBuilder.url() : imageUrlBuilder.format('webp').url()

  return (
    <div className={classNames('h-full w-full', containerClass)}>
      <picture>
        <source type="image/webp" srcSet={`${webpMobileUrl} 320w, ${webpUrl} 800w`} />
        <img alt={image.alt} {...props} src={fallbackImage} className={classNames('block h-auto w-full', className)} />
      </picture>
    </div>
  )
}

export default Image
