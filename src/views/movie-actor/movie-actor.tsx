import { useTranslation } from 'react-i18next'
import { PiArrowBendUpLeftLight, PiImageBrokenThin } from 'react-icons/pi'
import { SiImdb } from 'react-icons/si'
import { Link, useParams } from 'react-router'

import { Error, MoviePreviewCard, ScrollToTop, Title } from '@/components'
import { APP_PATHS } from '@/routes'
import { useGetMovieActorQuery, useGetMovieByActorQuery } from '@/services'
import { AspectRatio, Center, Flex, Grid, Image, Spinner, Stack, Text } from '@/ui'
import { formatTimeToHoursAndMinutes } from '@/utils'

export const MovieActor = () => {
  const { t, i18n } = useTranslation()
  const { id } = useParams()
  const {
    data: actor,
    isLoading: actorLoading,
    isError: actorError,
  } = useGetMovieActorQuery(
    { id, language: i18n.language },
    {
      skip: !id,
    }
  )
  const {
    data: movies,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useGetMovieByActorQuery(
    { id: id ? id : '0', language: i18n.language },
    {
      skip: !id,
    }
  )

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
              <Text fontWeight="semibold">{t('common.birthday')}</Text>
              <Text color="fg.muted">
                {actor?.birthday ? formatTimeToHoursAndMinutes(actor?.birthday) : 'No information available'}
              </Text>
              {actor?.deathday && (
                <>
                  <span>•</span>
                  <Text fontWeight="semibold">{t('common.deathday')}</Text>
                  <Text color="fg.muted">{formatTimeToHoursAndMinutes(actor?.deathday)}</Text>
                </>
              )}
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
      <Title headline={t('movies_appares_in')} />
      <Grid columns={{ base: 1, lg: 2, xl: 3 }} gap={{ base: '12', lg: '8' }} px={{ base: '0', md: '12', xl: '24' }}>
        {movies?.cast?.map(movie => <MoviePreviewCard key={movie.id} movie={movie} />) || []}
      </Grid>
      <ScrollToTop />
    </Stack>
  )
}
