import { useState } from 'react'
import { PiArrowBendUpLeftLight, PiPopcorn, PiSortAscending, PiSortDescending } from 'react-icons/pi'
import { Link } from 'react-router'

import { Error, MoviePreviewCard, PageHeader } from '@/components'
import { labels } from '@/labels'
import { APP_PATHS } from '@/routes'
import { useGetMovieFavoritesQuery } from '@/services'
import {
  Box,
  EmptyState,
  Flex,
  Grid,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
  SegmentField,
  Spinner,
} from '@/ui'

export const MovieFavorites = () => {
  const [createdAtSort, setCreatedAtSort] = useState<string>('created_at.desc')
  const [page, setPage] = useState(1)
  const { data, isError, isLoading } = useGetMovieFavoritesQuery(
    { page, createdAtSort },
    {
      skip: !createdAtSort,
    }
  )

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
      {data && data?.results?.length ? (
        <>
          <Box w="full">
            <Flex ml="auto" maxW="48">
              <SegmentField
                name="direction"
                onChange={value => setCreatedAtSort(value)}
                defaultValue="created_at.desc"
                options={[
                  { label: <PiSortAscending />, value: 'created_at.asc' },
                  { label: <PiSortDescending />, value: 'created_at.desc' },
                ]}
              />
            </Flex>
          </Box>
          <Grid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={{ base: '12', lg: '8' }}>
            {data?.results?.map(movie => <MoviePreviewCard key={movie.id} movie={movie} />) || []}
          </Grid>
        </>
      ) : (
        <EmptyState
          title={labels.movie_no_favorites}
          description={labels.movie_no_favorites_description}
          icon={<PiPopcorn fill="colorPalette.green" />}
        />
      )}
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
