import { useTranslation } from 'react-i18next'

import { Box, chakra, Flex } from '@/ui'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box as="footer" mt="auto" bg="colorPalette.600" borderTopRadius="2xl">
      <Flex justifyContent="center" alignItems="center" p="4">
        <Box color="white" fontSize="sm">
          {t('common.footer', {
            year: new Date().getFullYear(),
          })}
          <chakra.a href="https://github.com/bartekpospiech" target="_blank" rel="noopener noreferrer" ml="1">
            {t('common.name')}
          </chakra.a>
        </Box>
      </Flex>
    </Box>
  )
}
