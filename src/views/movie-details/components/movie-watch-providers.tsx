import { useTranslation } from 'react-i18next'

import { Error, Title } from '@/components'
import { useGetMovieServicesQuery } from '@/services'
import { Avatar, Flex, Grid, Spinner, Stack, Text } from '@/ui'

type MovieWatchProvidersProps = {
  id: number
}

export const MovieWatchProviders = ({ id }: MovieWatchProvidersProps) => {
  const { i18n } = useTranslation()
  const { data: providers, isLoading: providersLoading, error: providersError } = useGetMovieServicesQuery(id)

  if (providersError) {
    return <Error />
  }

  if (providersLoading) {
    return <Spinner />
  }

  const countryCode = i18n.language === 'en' ? 'US' : i18n.language.toLocaleUpperCase()
  const filteredProviders = providers && providers[countryCode as keyof typeof providers]

  return (
    <Stack>
      {filteredProviders?.buy && (
        <>
          <Title headline="Buy" size="md" />
          <Grid columns={{ base: 2, lg: 2 }} gap="4" my="4" flexWrap="wrap">
            {filteredProviders.buy.map(provider => (
              <Flex gap="3" align="center" flex="1 0 fit-content" key={provider.provider_id}>
                <Avatar
                  name={provider.provider_name}
                  src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                  size="lg"
                  borderColor="colorPalette.600"
                  borderWidth="1px"
                  filter="grayscale(1)"
                />
                <Stack gap="0">
                  <Text fontWeight="black" textStyle="sm">
                    {provider.provider_name}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </Grid>
        </>
      )}

      {filteredProviders?.rent && (
        <>
          <Title headline="Rent" size="md" />
          <Grid columns={{ base: 2, lg: 2 }} gap="4" my="4" flexWrap="wrap">
            {filteredProviders.rent.map(provider => (
              <Flex gap="3" align="center" flex="1 0 fit-content" key={provider.provider_id}>
                <Avatar
                  name={provider.provider_name}
                  src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                  size="lg"
                  borderColor="colorPalette.600"
                  borderWidth="1px"
                  filter="grayscale(1)"
                />
                <Stack gap="0">
                  <Text fontWeight="black" textStyle="sm">
                    {provider.provider_name}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </Grid>
        </>
      )}

      {filteredProviders?.flatrate && (
        <>
          <Title headline="Stream" size="md" />
          <Grid columns={{ base: 2, lg: 2 }} gap="4" my="4" flexWrap="wrap">
            {filteredProviders.flatrate.map(provider => (
              <Flex gap="3" align="center" flex="1 0 fit-content" key={provider.provider_id}>
                <Avatar
                  name={provider.provider_name}
                  src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                  size="lg"
                  borderColor="colorPalette.600"
                  borderWidth="1px"
                  filter="grayscale(1)"
                />
                <Stack gap="0">
                  <Text fontWeight="black" textStyle="sm">
                    {provider.provider_name}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </Grid>
        </>
      )}
    </Stack>
  )
}
