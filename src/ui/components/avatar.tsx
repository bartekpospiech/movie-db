import { Avatar as ChakraAvatar, AvatarGroup as ChakraAvatarGroup } from '@chakra-ui/react'
import * as React from 'react'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export type AvatarProps = {
  name?: string
  src?: string
  srcSet?: string
  loading?: ImageProps['loading']
  icon?: React.ReactElement
  fallback?: React.ReactNode
} & ChakraAvatar.RootProps

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props
  return (
    <ChakraAvatar.Root ref={ref} {...rest}>
      <ChakraAvatar.Fallback name={name}>{icon || fallback}</ChakraAvatar.Fallback>
      <ChakraAvatar.Image src={src} srcSet={srcSet} loading={loading} />
      {children}
    </ChakraAvatar.Root>
  )
})

export const AvatarGroup = ChakraAvatarGroup
