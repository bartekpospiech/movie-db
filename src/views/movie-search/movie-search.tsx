import { useEffect, useState } from 'react'
import { PiHeartLight, PiPopcorn } from 'react-icons/pi'
import { Link } from 'react-router'

import { SearchForm, TrendingMovies } from './components'

import { Error, ScrollToTop } from '@/components'
import { MoviePreviewCard, PageHeader } from '@/components'
import { labels } from '@/labels'
import { APP_PATHS } from '@/routes'
import { useSearchMoviesQuery } from '@/services'
import {
  EmptyState,
  Flex,
  Grid,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@/ui'

export const MovieSearch = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const { data, isError } = useSearchMoviesQuery({ query, page }, { skip: query.length < 2 })

  useEffect(() => {
    setPage(1)
  }, [query])

  if (isError) {
    return <Error />
  }

  return (
    <>
      <Flex justify="flex-end">
        <Link to={APP_PATHS.FAV}>
          <PiHeartLight fill="green" size="32" />
        </Link>
      </Flex>
      <PageHeader
        headline={labels.page_header_headline}
        description={labels.page_header_description}
        alignItems="center"
        textAlign="center"
      />
      <SearchForm setQuery={setQuery} />
      {data && data?.results?.length === 0 ? (
        <EmptyState
          title={labels.movie_search_no_results}
          description={labels.movie_search_no_results_description}
          icon={<PiPopcorn fill="colorPalette.green" />}
        />
      ) : (
        <>
          {query.length > 1 && (
            <Grid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={{ base: '12', lg: '8' }}>
              {data?.results?.map(movie => <MoviePreviewCard key={movie.id} movie={movie} />) || []}
            </Grid>
          )}
        </>
      )}
      <Flex justifyContent="center" alignItems="center">
        {data && data.total_pages > 1 && query.length > 1 && (
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
      {query.length < 2 && <TrendingMovies query={query} />}
      <ScrollToTop page={page} />
    </>
  )
}
