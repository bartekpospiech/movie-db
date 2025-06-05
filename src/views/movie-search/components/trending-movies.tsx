import { Error, MoviePreviewCard } from '@/components'
import { labels } from '@/labels'
import { useGetTrendingMoviesQuery } from '@/services'
import { Divider, Flex, Grid, Skeleton, Text } from '@/ui'

export const TrendingMovies = ({ query }: { query: string }) => {
  const { data, isLoading, isError } = useGetTrendingMoviesQuery({
    skip: query.length < 2,
  })

  if (isLoading) {
    return (
      <Flex gap="4">
        {[...Array(4).keys()].map(item => (
          <Skeleton key={item} height="400px" width="1/4" boxShadow="sm" borderRadius="md" />
        ))}
      </Flex>
    )
  }

  if (isError) {
    return <Error />
  }

  return (
    <>
      <Divider>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          {labels.movie_trending_headline}
        </Text>
      </Divider>
      <Grid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={{ base: '12', lg: '8' }}>
        {data?.map(movie => <MoviePreviewCard key={movie.id} movie={movie} />) || []}
      </Grid>
    </>
  )
}
