import type { PropsWithChildren } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Suspense } from 'react'

import { system } from '../design-system/system'

import { Container } from './container'
import { ProgressBar, ProgressRoot } from './progress'
import { Stack } from './stack'
import { Toaster } from './toaster'

import { Footer } from '@/components'

const Progress = () => (
  <ProgressRoot value={null} size="xs" colorPalette="green">
    <ProgressBar />
  </ProgressRoot>
)

export function UiProvider({ children }: PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <Container py="16" minH="calc(100vh - 53px)">
        <Stack gap={{ base: '12', md: '16' }}>
          <Suspense fallback={<Progress />}>{children}</Suspense>
        </Stack>
      </Container>
      <Footer />
      <Toaster />
    </ChakraProvider>
  )
}
