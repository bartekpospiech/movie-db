import { useTranslation } from 'react-i18next'

import { Box, chakra, Flex, Text } from '@/ui'

const year =
  new Date().getMonth() > 11 && new Date().getDay() > 20 ? new Date().getFullYear() + 1 : new Date().getFullYear()

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box as="footer" mt="auto" bg="colorPalette.700" boxShadow="inner">
      <Flex justifyContent="center" alignItems="center" h="12">
        <Flex color="white" fontSize="sm" fontWeight="bold">
          <Text>
            {t('common.footer', {
              year,
            })}
          </Text>
          <chakra.a href="https://github.com/bartekpospiech" target="_blank" rel="noopener noreferrer" ml="1">
            {t('common.name')}
          </chakra.a>
        </Flex>
      </Flex>
    </Box>
  )
}
