import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import classNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'
import { useGetImageUrl } from 'src/clients/sanity'

type ImageProps = HTMLAttributes<HTMLImageElement> & { asset: SanityImageSource; containerClass?: string }

const Image: FC<ImageProps> = ({ className, containerClass, asset, ...props }) => {
  const imageUrlBuilder = useGetImageUrl(asset)
  const isSvg = imageUrlBuilder.url().includes('.svg')
  const fallbackImage = isSvg ? imageUrlBuilder.url() : imageUrlBuilder.format('png').url()
  const webpMobileUrl = imageUrlBuilder.format('webp').width(480).url()
  const webpUrl = imageUrlBuilder.format('webp').url()

  return (
    <div className={classNames('h-full w-full', containerClass)}>
      <picture>
        <source type="image/webp" srcSet={`${webpMobileUrl} 320w, ${webpUrl} 800w`} />
        <img {...props} src={fallbackImage} className={classNames('block h-auto w-full', className)} />
      </picture>
    </div>
  )
}

export default Image
