import { Box, HStack, Separator, type StackProps } from '@chakra-ui/react'

export const Divider = ({ children, ...rootProps }: StackProps) => (
  <HStack {...rootProps}>
    <Separator flex="1" />
    <Box mx="2" flexShrink="0">
      {children}
    </Box>
    <Separator flex="1" />
  </HStack>
)
