import { Heading as ChakraHeading, type HeadingProps } from '@chakra-ui/react'

export const Heading: React.FC<HeadingProps> = ({ color, fontSize, fontWeight, lineHeight, ...rootProps }) => (
  <ChakraHeading
    {...rootProps}
    color={color ?? 'text.primary'}
    fontSize={fontSize ?? '3xl'}
    fontWeight={fontWeight ?? 'bold'}
    lineHeight={lineHeight ?? 'shorter'}
  />
)
