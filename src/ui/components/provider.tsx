import type { PropsWithChildren } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { system } from '../design-system/system'

import { Container } from './container'
import { Footer } from './footer'
import { Stack } from './stack'
import { Toaster } from './toaster'

export function UiProvider({ children }: PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <Container py={{ base: '16', md: '24' }} minH="calc(100vh - 53px)">
        <Stack gap={{ base: '12', md: '16' }}>{children}</Stack>
      </Container>
      <Footer />
      <Toaster />
    </ChakraProvider>
  )
}
