import { PageHeader } from '@/components'
import { APP_PATHS } from '@/routes'
import { Flex } from '@/ui'
import { PiArrowBendUpLeftLight } from 'react-icons/pi'
import { Link } from 'react-router'

export const NotFound = () => {
  return (
    <Flex justify="center" align="center" direction="column" gap="6" mt="12">
      <PageHeader
        headline="Page Not Found"
        description="The page you are looking for does not exist."
        textAlign="center"
        alignItems="center"
      />
      <Flex justify="flex-start">
        <Link to={APP_PATHS.HOME}>
          <PiArrowBendUpLeftLight fill="green" size="32" />
        </Link>
      </Flex>
    </Flex>
  )
}
