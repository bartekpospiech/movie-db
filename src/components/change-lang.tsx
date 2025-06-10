import { useTranslation } from 'react-i18next'

import { Box, SegmentField, Text } from '@/ui'

export const ChangeLang = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Box position="absolute" top="4" left="4">
      <SegmentField
        name="direction"
        onChange={value => changeLanguage(value)}
        defaultValue={i18n.language ?? 'en'}
        options={[
          { label: <Text>EN</Text>, value: 'en' },
          { label: <Text>PL</Text>, value: 'pl' },
          { label: <Text>DE</Text>, value: 'de' },
        ]}
      />
    </Box>
  )
}
