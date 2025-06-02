import { Box, Flex } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box as="footer" mt="auto" bg="colorPalette.600" borderTopRadius="2xl">
      <Flex justifyContent="center" alignItems="center" p="4">
        <Box color="white" fontSize="sm">
          © {new Date().getFullYear()} Made with ❤️ by Bartek.
        </Box>
      </Flex>
    </Box>
  )
}
