import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PiArrowBendUpLeftLight, PiPopcorn } from 'react-icons/pi'
import { Link } from 'react-router'

import { FavoritesSort } from './components'

import { Error, MoviePreviewCard, PageHeader } from '@/components'
import { APP_PATHS } from '@/routes'
import { useGetMovieFavoritesQuery } from '@/services'
import {
  EmptyState,
  Flex,
  Grid,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
  Spinner,
  Stack,
} from '@/ui'

export const MovieFavorites = () => {
  const { t, i18n } = useTranslation()
  const [createdAtSort, setCreatedAtSort] = useState<string>('created_at.desc')
  const [page, setPage] = useState(1)
  const { data, isError, isLoading } = useGetMovieFavoritesQuery(
    { page, createdAtSort, language: i18n.language },
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
    <Stack gap="8">
      <Link to={APP_PATHS.HOME}>
        <PiArrowBendUpLeftLight fill="green" size="32" />
      </Link>
      <PageHeader
        headline={t('movie_favorites_headline')}
        description={t('movie_favorites_description')}
        textAlign="center"
        alignItems="center"
      />
      {data && data?.results?.length ? (
        <>
          <FavoritesSort setCreatedAtSort={setCreatedAtSort} />
          <Grid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap="8">
            {data.results.map(movie => (
              <MoviePreviewCard key={movie.id} movie={movie} />
            ))}
          </Grid>
        </>
      ) : (
        <EmptyState
          title={t('movie_no_favorites')}
          description={t('movie_no_favorites_description')}
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
            siblingCount={2}
            variant="subtle"
          >
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </PaginationRoot>
        )}
      </Flex>
    </Stack>
  )
}
