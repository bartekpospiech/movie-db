import type { ImageProps } from '@/ui'

import { Image, useControllableState } from '@/ui'
import { ONE_PIXEL_PLACEHOLDER } from '@/utils'

type LazyImageProps = {
  alt: string
  src: string
  aspectRatio?: number
} & ImageProps

export const LazyImage = ({ alt, aspectRatio, src, ...ImageProps }: LazyImageProps) => {
  const [loaded, setLoaded] = useControllableState({
    defaultValue: false,
    value: ImageProps?.onLoad ? true : undefined,
  })

  return (
    <Image
      {...ImageProps}
      src={loaded ? src : ONE_PIXEL_PLACEHOLDER}
      alt={alt}
      loading="lazy"
      aspectRatio={aspectRatio ?? 3 / 4}
      transition="filter 0.5s ease-out"
      filter={loaded ? '0' : 'blur(5px)'}
      onLoad={() => setLoaded(true)}
    />
  )
}
