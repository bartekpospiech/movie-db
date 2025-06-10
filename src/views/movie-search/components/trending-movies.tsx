import { useTranslation } from 'react-i18next'

import { Error, MoviePreviewCard, Title } from '@/components'
import { useGetTrendingMoviesQuery } from '@/services'
import { Flex, Grid, Skeleton, Stack, useBreakpointValue } from '@/ui'

export const TrendingMovies = ({ query }: { query: string }) => {
  const { t, i18n } = useTranslation()
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 })
  const { data, isLoading, isError } = useGetTrendingMoviesQuery(i18n.language, {
    skip: query.length > 2,
  })

  if (isLoading) {
    return (
      <Stack gap="8">
        <Skeleton height="10" width="full" borderRadius="sm" />
        <Flex justifyContent="space-evenly" gap="4">
          {[...Array(columns).keys()].map(item => (
            <Skeleton key={item} height="large" flex="1" boxShadow="sm" borderRadius="md" />
          ))}
        </Flex>
      </Stack>
    )
  }

  if (isError) {
    return <Error />
  }

  return (
    <>
      <Title headline={t('movie_trending_headline')} />
      <Grid columns={columns} gap={{ base: '12', lg: '8' }}>
        {data?.map(movie => <MoviePreviewCard key={movie.id} movie={movie} />) || []}
      </Grid>
    </>
  )
}
