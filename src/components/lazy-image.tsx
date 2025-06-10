import type { ImageProps } from '@/ui'

import { useState } from 'react'

import { Image } from '@/ui'
import { one_pixel_placeholder } from '@/utils'

type LazyImageProps = {
  alt: string
  src: string
  aspectRatio?: number
} & ImageProps

export const LazyImage = ({ alt, aspectRatio, src, ...ImageProps }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      {...ImageProps}
      src={loaded ? src : one_pixel_placeholder}
      alt={alt}
      borderRadius="md"
      loading="lazy"
      aspectRatio={aspectRatio || 3 / 4}
      onLoad={() => {
        setLoaded(true)
      }}
    />
  )
}
