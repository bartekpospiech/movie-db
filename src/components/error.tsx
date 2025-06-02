import { labels } from '@/labels'
import { Flex } from '@/ui'
import { PiArrowBendUpLeftLight } from 'react-icons/pi'
import { Link } from 'react-router'
import { APP_PATHS } from '@/routes'

import { PageHeader } from './page-header'

export const Error = () => {
  return (
    <Flex justify="center" align="center" direction="column" gap="6">
      <PageHeader
        headline={labels.movie_search_error_headline}
        description={labels.movie_search_error_description}
        alignItems="center"
        textAlign="center"
      />
      <Flex justify="flex-start">
        <Link to={APP_PATHS.HOME}>
          <PiArrowBendUpLeftLight fill="green" size="32" />
        </Link>
      </Flex>
    </Flex>
  )
}
