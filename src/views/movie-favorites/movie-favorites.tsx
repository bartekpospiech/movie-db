import { Error, MoviePreviewCard, PageHeader } from '@/components'
import { labels } from '@/labels'
import {
  Flex,
  Grid,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
  Spinner,
} from '@/ui'
import { useGetMovieFavoritesQuery } from '@/services'

import { useState } from 'react'
import { PiArrowBendUpLeftLight } from 'react-icons/pi'
import { Link } from 'react-router'
import { APP_PATHS } from '@/routes'

export const MovieFavorites = () => {
  const [page, setPage] = useState(1)
  const { data, isError, isLoading } = useGetMovieFavoritesQuery({ page })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error />
  }

  return (
    <>
      <Link to={APP_PATHS.HOME}>
        <PiArrowBendUpLeftLight fill="green" size="32" />
      </Link>
      <PageHeader
        headline={labels.movie_favorites_headline}
        description={labels.movie_favorites_description}
        textAlign="center"
        alignItems="center"
      />
      {
        <Grid columns={{ base: 2, lg: 3, xl: 4 }} gap={{ base: '12', lg: '8' }}>
          {data?.results?.map(movie => <MoviePreviewCard key={movie.id} movie={movie} />) || []}
        </Grid>
      }
      <Flex justifyContent="center" alignItems="center">
        {data && data.total_pages > 1 && (
          <PaginationRoot
            page={page}
            pageSize={20}
            size="md"
            count={data?.total_results}
            onPageChange={e => setPage(e.page)}
            variant="subtle"
          >
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </PaginationRoot>
        )}
      </Flex>
    </>
  )
}
