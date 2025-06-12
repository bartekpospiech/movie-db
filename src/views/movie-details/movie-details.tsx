import { useTranslation } from 'react-i18next'
import { PiArrowBendUpLeftLight, PiCalendarDotsThin, PiImageBrokenThin, PiTimerThin } from 'react-icons/pi'
import { Link } from 'react-router'
import { useParams } from 'react-router'

import { AddToFavorites, MovieCast, MovieMedia, MovieTags, MovieWatchProviders, SimilarMovies } from './components'

import { Error, LazyImage, ScrollToTop } from '@/components'
import { APP_PATHS } from '@/routes'
import { useGetMovieCreditsQuery, useGetMovieDetailsQuery, useGetSimilarMoviesQuery } from '@/services'
import { AspectRatio, Box, Center, Flex, Spinner, Stack, Text } from '@/ui'
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
  } = useGetMovieCreditsQuery(id, {
    skip: !id,
  })
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
          {movie && movie.poster_path ? (
            <Box m="0 auto" overflow="hidden">
              <LazyImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Box>
          ) : (
            <AspectRatio ratio={3 / 4} w="full" h="full" maxW={{ base: '100%', md: '400px' }}>
              <Center bg="bg.muted" color="fg.subtle">
                <PiImageBrokenThin size="48px" />
              </Center>
            </AspectRatio>
          )}
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
        </Stack>
      </Flex>
      <MovieMedia id={movie?.id ?? 0} />
      <SimilarMovies similar={similarMovies} />
      <ScrollToTop />
    </>
  )
}
