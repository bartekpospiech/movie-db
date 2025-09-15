import { useTranslation } from 'react-i18next'

import { Flex } from '@/ui'

export const PopularBadge = () => {
  const { t } = useTranslation()
  return (
    <Flex
      alignItems="center"
      justify="center"
      position="absolute"
      top="5"
      right="-10"
      bg="colorPalette.solid"
      color="colorPalette.100"
      minW="36"
      py="1"
      fontWeight="bold"
      textStyle="xs"
      letterSpacing="wide"
      transform="rotate(45deg)"
    >
      {t('common.popular')}
    </Flex>
  )
}
