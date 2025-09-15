import { useTranslation } from 'react-i18next'
import { PiArrowBendUpLeftLight } from 'react-icons/pi'
import { Link } from 'react-router'

import { PageHeader } from '@/components'
import { APP_PATHS } from '@/routes'
import { Flex, Image } from '@/ui'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Flex justify="center" align="center" direction="column" gap="6" mt="12">
      <PageHeader
        headline={t('common.page_not_found')}
        description={t('common.page_not_found_description')}
        textAlign="center"
        alignItems="center"
      />
      <Image src="/404.png" alt="404 Not Found" width="300px" height="300px" />
      <Flex justify="flex-start">
        <Link to={APP_PATHS.HOME}>
          <PiArrowBendUpLeftLight fill="green" size="32" />
        </Link>
      </Flex>
    </Flex>
  )
}
