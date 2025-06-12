import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

import { Error, Title } from '@/components'
import { useGetMovieServicesQuery } from '@/services'
import { Avatar, Flex, Grid, Spinner, Stack, Text } from '@/ui'
import { addProviderUrls, movie_providers } from '@/utils'

type MovieWatchProvidersProps = {
  id: number
}

export const MovieWatchProviders = ({ id }: MovieWatchProvidersProps) => {
  const { t, i18n } = useTranslation()
  const { data: providers, isLoading: providersLoading, error: providersError } = useGetMovieServicesQuery(id)
  const countryCode = i18n.language === 'en' ? 'US' : i18n.language.toLocaleUpperCase()
  const filteredProviders = providers && providers[countryCode as keyof typeof providers]
  const movieProviders = addProviderUrls(filteredProviders!, movie_providers) || []

  if (!movieProviders || providersError) {
    return <Error />
  }

  if (providersLoading) {
    return <Spinner />
  }

  console.log('movieProviders', movieProviders)

  return (
    <Stack>
      {filteredProviders && filteredProviders.buy && (
        <>
          <Title headline={t('common.buy')} size="md" />
          <Grid columns={{ base: 2, lg: 2 }} gap="4" my="4" flexWrap="wrap">
            {movieProviders.buy?.map(provider => <AvatarProviderLogo provider={provider} />)}
          </Grid>
        </>
      )}

      {filteredProviders && filteredProviders.rent && (
        <>
          <Title headline={t('common.rent')} size="md" />
          <Grid columns={{ base: 2, lg: 2 }} gap="4" my="4" flexWrap="wrap">
            {movieProviders.rent?.map(provider => <AvatarProviderLogo provider={provider} />)}
          </Grid>
        </>
      )}

      {filteredProviders && filteredProviders.flatrate && (
        <>
          <Title headline={t('common.stream')} size="md" />
          <Grid columns={{ base: 2, lg: 2 }} gap="4" my="4" flexWrap="wrap">
            {movieProviders.flatrate?.map(provider => <AvatarProviderLogo provider={provider} />)}
          </Grid>
        </>
      )}
    </Stack>
  )
}

const AvatarProviderLogo = ({
  provider,
}: {
  provider: { provider_name: string; logo_path: string; provider_id: number; provider_url?: string }
}) => {
  return (
    <Flex gap="3" align="center" flex="1 0 fit-content" key={provider.provider_id}>
      <Avatar
        name={provider.provider_name}
        src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
        size="xs"
        borderColor="colorPalette.600"
        borderWidth="1px"
        filter="grayscale(1)"
        _hover={{ filter: 'grayscale(0)' }}
      />
      <Stack gap="0">
        <Link to={provider.provider_url || 'https://www.imdb.com/'} target="_blank" rel="noopener noreferrer">
          <Text fontWeight="black" textStyle="sm">
            {provider.provider_name}
          </Text>
        </Link>
      </Stack>
    </Flex>
  )
}
