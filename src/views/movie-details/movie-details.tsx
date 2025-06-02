import { AspectRatio, Box, Center, Flex, Image, Spinner, Stack, Text } from '@/ui'
import { useGetMovieDetailsQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery } from '@/services'
import { Error, ScrollToTop } from '@/components'
import { APP_PATHS } from '@/routes'

import { Link } from 'react-router'
import { PiArrowBendUpLeftLight, PiImageBrokenThin, PiTimerThin, PiCalendarDotsThin } from 'react-icons/pi'
import { useParams } from 'react-router'

import { AddToFavorites, MovieCast, MovieTags, SimilarMovies } from './components'

export const MovieDetails = () => {
  const { id } = useParams()
  const {
    data: movie,
    isLoading: movieLoading,
    isError: movieError,
  } = useGetMovieDetailsQuery(id, {
    skip: !id,
  })
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
    { id, page: 1 },
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
        {movie && movie.poster_path ? (
          <Box flex="1 0 fit-content" maxW={{ base: '100%', md: '400px' }} m="0 auto">
            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} borderRadius="lg" />
          </Box>
        ) : (
          <AspectRatio ratio={3 / 4} w="full" h="full" maxW={{ base: '100%', md: '400px' }}>
            <Center bg="bg.muted" color="fg.subtle">
              <PiImageBrokenThin size="48px" />
            </Center>
          </AspectRatio>
        )}
        <Stack>
          <Stack flex="1" gap="3">
            <Stack color="fg.muted" textStyle="sm" direction="row" alignItems="center">
              <PiCalendarDotsThin size="16" />
              <Text>
                {movie?.release_date
                  ? new Date(movie.release_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    })
                  : ''}
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
      <SimilarMovies similar={similarMovies} />
      <ScrollToTop />
    </>
  )
}
