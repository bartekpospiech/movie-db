import { useState } from 'react'

import { Image } from '@/ui'
import { one_pixel_placeholder } from '@/utils'

type LazyImageProps = {
  alt: string
  src: string
  aspectRatio?: number
}

export const LazyImage = ({ alt, aspectRatio, src }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      src={loaded ? src : one_pixel_placeholder}
      alt={alt}
      borderRadius="lg"
      loading="lazy"
      aspectRatio={aspectRatio || 3 / 4}
      onLoad={() => {
        setLoaded(true)
      }}
    />
  )
}
