import { Text as ChakraText, type TextProps } from '@chakra-ui/react'

export const Text: React.FC<TextProps> = ({ color, fontWeight, ...rootProps }) => (
  <ChakraText {...rootProps} color={color ?? 'text.primary'} fontWeight={fontWeight ?? 'normal'} />
)
