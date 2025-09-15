import type { ReactNode } from 'react'

import { Card as ChakraCard } from '@chakra-ui/react'

type CardProps = {
  header: ReactNode
  title: ReactNode
  children: ReactNode
  footer: ReactNode
}

export const Card = ({ children, header, title, footer }: CardProps) => (
  <ChakraCard.Root
    overflow="hidden"
    boxShadow="none"
    bgColor="bg.subtle"
    position="relative"
    borderRadius="xl"
    border="solid 1px"
    borderColor="gray.300"
  >
    <ChakraCard.Header p="0" gap="0">
      <ChakraCard.Title>{title}</ChakraCard.Title>
      {header}
    </ChakraCard.Header>
    <ChakraCard.Body gap={{ base: '5', md: '6' }}>{children}</ChakraCard.Body>
    <ChakraCard.Footer m="0 auto">{footer}</ChakraCard.Footer>
  </ChakraCard.Root>
)
