import { EmptyState as ChakraEmptyState, VStack } from '@chakra-ui/react'
import * as React from 'react'

export type EmptyStateProps = {
  title: string
  description?: string
  icon?: React.ReactNode
} & ChakraEmptyState.RootProps

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
  { title, description, icon, children, ...rest },
  ref
) {
  return (
    <ChakraEmptyState.Root ref={ref} {...rest}>
      <ChakraEmptyState.Content>
        {icon && <ChakraEmptyState.Indicator>{icon}</ChakraEmptyState.Indicator>}
        {description ? (
          <VStack textAlign="center">
            <ChakraEmptyState.Title>{title}</ChakraEmptyState.Title>
            <ChakraEmptyState.Description>{description}</ChakraEmptyState.Description>
          </VStack>
        ) : (
          <ChakraEmptyState.Title>{title}</ChakraEmptyState.Title>
        )}
        {children}
      </ChakraEmptyState.Content>
    </ChakraEmptyState.Root>
  )
})
