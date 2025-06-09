import { Box, chakra, Flex } from '@/ui'

export const Footer = () => (
  <Box as="footer" mt="auto" bg="colorPalette.600" borderTopRadius="2xl">
    <Flex justifyContent="center" alignItems="center" p="4">
      <Box color="white" fontSize="sm">
        © {new Date().getFullYear()} Made with ❤️ by
        <chakra.a href="https://github.com/bartekpospiech" target="_blank" rel="noopener noreferrer" ml="1">
          Bartek.
        </chakra.a>
      </Box>
    </Flex>
  </Box>
)
