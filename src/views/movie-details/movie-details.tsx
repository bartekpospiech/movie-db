import { useTranslation } from 'react-i18next'
import { PiArrowBendUpLeftLight, PiCalendarDotsThin, PiTimerThin } from 'react-icons/pi'
import { Link } from 'react-router'
import { useParams } from 'react-router'

import {
  AddToFavorites,
  MovieCast,
  MovieCrew,
  MovieMedia,
  MovieTags,
  MovieWatchProviders,
  SimilarMovies,
} from './components'

import { Error, MovieCardImage, ScrollToTop } from '@/components'
import { APP_PATHS } from '@/routes'
import { useGetMovieCreditsQuery, useGetMovieDetailsQuery, useGetSimilarMoviesQuery } from '@/services'
import { Flex, Spinner, Stack, Text } from '@/ui'
import { formatTimeToHoursAndMinutes } from '@/utils'

export const MovieDetails = () => {
  const { t, i18n } = useTranslation()
  const { id } = useParams()
  const {
    data: movie,
    isLoading: movieLoading,
    isError: movieError,
  } = useGetMovieDetailsQuery(
    { id: id ? id : '0', language: i18n.language },
    {
      skip: !id,
    }
  )
  const {
    data: credits,
    isLoading: creditsLoading,
    isError: creditsError,
  } = useGetMovieCreditsQuery(
    { id, language: i18n.language },
    {
      skip: !id,
    }
  )
  const {
    data: similar,
    isLoading: similarLoading,
    isError: similarError,
  } = useGetSimilarMoviesQuery(
    { id, page: 1, language: i18n.language },
    {
      skip: !id,
    }
  )
  const recentCast = credits?.cast.slice(0, 12) ?? []
  const recentCrew = credits?.crew.slice(0, 12) ?? []
  const similarMovies = similar?.results.slice(0, 3) ?? []

  if (movieError || creditsError || similarError) {
    return <Error />
  }

  if (movieLoading || creditsLoading || similarLoading) {
    return <Spinner />
  }

  return (
    <>
      <Flex justify="space-between" align="center" px="2">
        <Link to={APP_PATHS.HOME}>
          <PiArrowBendUpLeftLight fill="green" size="32" />
        </Link>
        <AddToFavorites movie={movie} />
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} gap="12" align={{ md: 'center' }}>
        <Flex direction="column" flex="1 0 fit-content" gap="6" w="480px">
          <MovieCardImage movie={movie ?? {}} />
          <MovieWatchProviders id={movie?.id ?? 0} />
        </Flex>
        <Stack>
          <Stack flex="1" gap="3">
            <Stack color="fg.muted" textStyle="sm" direction="row" alignItems="center">
              <PiCalendarDotsThin size="16" />
              <Text>
                {movie?.release_date
                  ? formatTimeToHoursAndMinutes(movie.release_date)
                  : `${t('movie_no_premiere_date')}`}
              </Text>
              <span>•</span>
              <PiTimerThin size="16" />
              <Text>{movie?.runtime} min</Text>
            </Stack>
            <Text fontSize="4xl" fontWeight="black">
              {movie?.title}
            </Text>
            <Text color="fg.muted" textStyle="lg" fontWeight="semibold">
              {movie?.tagline}
            </Text>
            <Text color="fg.muted">{movie?.overview}</Text>
            <MovieTags genres={movie?.genres ?? []} production_companies={movie?.production_companies ?? []} />
          </Stack>
          <MovieCast cast={recentCast} />
          <MovieCrew crew={recentCrew} />
        </Stack>
      </Flex>
      <MovieMedia id={movie?.id ?? 0} />
      <SimilarMovies similar={similarMovies} />
      <ScrollToTop />
    </>
  )
}
