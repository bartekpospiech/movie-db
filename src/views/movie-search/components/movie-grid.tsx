import type { MoviesResponse } from '@/types'

import { PiPopcorn } from 'react-icons/pi'

import { MoviePreviewCard } from '@/components'
import { labels } from '@/labels'
import {
  EmptyState,
  Flex,
  Grid,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@/ui'

type MovieGridProps = {
  data: MoviesResponse
  page: number
  setPage: (page: number) => void
  query: string
}

export const MovieGrid = ({ data, page, setPage, query }: MovieGridProps) => (
  <>
    {data?.results?.length === 0 ? (
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
  </>
)
