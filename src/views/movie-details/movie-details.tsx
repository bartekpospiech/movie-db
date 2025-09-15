import { useTranslation } from 'react-i18next'
import { PiArrowBendUpLeftLight } from 'react-icons/pi'
import { Link } from 'react-router'
import { useParams } from 'react-router'

import {
  AddToFavorites,
  MovieCast,
  MovieCrew,
  MovieDescription,
  MovieMedia,
  MovieWatchProviders,
  SimilarMovies,
} from './components'

import { Error, MovieCardImage, ScrollToTop } from '@/components'
import { APP_PATHS } from '@/routes'
import { useGetMovieCreditsQuery, useGetMovieDetailsQuery, useGetSimilarMoviesQuery } from '@/services'
import { Flex, Spinner, Stack } from '@/ui'

export const MovieDetails = () => {
  const { i18n } = useTranslation()
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
        <Stack flexShrink="0" gap="6">
          <MovieCardImage movie={movie ?? {}} />
          <MovieWatchProviders id={movie?.id ?? 0} />
        </Stack>
        <Stack>
          <MovieDescription movie={movie} />
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
