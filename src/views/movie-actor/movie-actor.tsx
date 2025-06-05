import { PiArrowBendUpLeftLight, PiImageBrokenThin } from 'react-icons/pi'
import { SiImdb } from 'react-icons/si'
import { Link, useParams } from 'react-router'

import { Error, MoviePreviewCard, ScrollToTop } from '@/components'
import { labels } from '@/labels'
import { APP_PATHS } from '@/routes'
import { useGetMovieActorQuery, useGetMovieByActorQuery } from '@/services'
import { AspectRatio, Center, Divider, Flex, Grid, Image, Spinner, Stack, Text } from '@/ui'

export const MovieActor = () => {
  const { id } = useParams()
  const {
    data: actor,
    isLoading: actorLoading,
    isError: actorError,
  } = useGetMovieActorQuery(id, {
    skip: !id,
  })
  const {
    data: movies,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useGetMovieByActorQuery(id, {
    skip: !id,
  })

  console.log(id)

  if (actorError || moviesError) {
    return <Error />
  }

  if (actorLoading || moviesLoading) {
    return <Spinner />
  }

  return (
    <Stack gap="6" px={{ base: '4', md: '12', xl: '24' }} py="6">
      <Flex justify="space-between" align="center" px="2">
        <Link to={APP_PATHS.HOME}>
          <PiArrowBendUpLeftLight fill="green" size="32" />
        </Link>
        {actor.imdb_id && (
          <Link
            to={`https://www.imdb.com/name/${actor.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IMDb Profile"
          >
            <SiImdb fill="green" size="32" />
          </Link>
        )}
      </Flex>
      <Flex gap="8" direction={{ base: 'column-reverse', md: 'row' }}>
        <Stack flex="1" gap="4">
          <Stack gap="1">
            <Text fontSize="5xl" fontWeight="black">
              {actor.name}
            </Text>
            <Text color="fg.muted">{actor.place_of_birth}</Text>
          </Stack>
          <Stack mt="2" gap="2">
            <Stack gap="1" direction="row" flexWrap="wrap">
              <Text fontWeight="semibold">Birthday:</Text>
              <Text color="fg.muted">
                {actor?.birthday
                  ? new Date(actor?.birthday).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    })
                  : 'No information available'}
              </Text>
            </Stack>
          </Stack>
          <Text fontSize="sm" _firstLetter={{ fontWeight: 'black' }} color="fg.muted">
            {actor.biography}
          </Text>
        </Stack>

        {actor.profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}.jpg`}
            objectFit="cover"
            aspectRatio={1 / 1}
            borderRadius="xl"
            shadow="md"
            alt={actor.name}
            maxH="480px"
          />
        ) : (
          <AspectRatio ratio={1 / 1} w="480px" h="full" maxH="480px">
            <Center w="full" h="full" bg="bg.muted" color="fg.subtle">
              <PiImageBrokenThin size="48px" />
            </Center>
          </AspectRatio>
        )}
      </Flex>
      <Divider>
        <Text fontSize="2xl" fontWeight="bold" color="fg.muted">
          {labels.movies_appares_in}
        </Text>
      </Divider>
      <Grid columns={{ base: 1, lg: 2, xl: 3 }} gap={{ base: '12', lg: '8' }} px={{ base: '0', md: '12', xl: '24' }}>
        {movies?.cast?.map(movie => <MoviePreviewCard key={movie.id} movie={movie} />) || []}
      </Grid>
      <ScrollToTop />
    </Stack>
  )
}
