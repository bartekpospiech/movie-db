import type { MovieResultsEntity } from '@/types'

import { PiImageBrokenThin } from 'react-icons/pi'
import { Link } from 'react-router'

import { LazyImage } from './lazy-image'
import { PopularBadge } from './popular-badge'

import { AspectRatio, Card, Center, Rating, Stack, Tag, Text } from '@/ui'
import { getGenreNamesByIds } from '@/utils'

type MoviePreviewCard = {
  movie: Pick<
    MovieResultsEntity,
    'id' | 'title' | 'overview' | 'vote_average' | 'genre_ids' | 'poster_path' | 'vote_count'
  >
}

export const MoviePreviewCard = ({ movie }: MoviePreviewCard) => {
  const genreNames = movie.genre_ids ? getGenreNamesByIds(movie.genre_ids as number[]) : []

  return (
    <Card.Root overflow="hidden" boxShadow="sm" bgColor="bg.colorPalette" position="relative">
      {movie.vote_count >= 1000 && movie.vote_average >= 7 && <PopularBadge />}
      <Card.Header p="0">
        {movie.poster_path ? (
          <LazyImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}.jpg`} alt={movie.title} />
        ) : (
          <AspectRatio ratio={3 / 4} w="full" h="full">
            <Center w="full" h="full" bg="bg.muted" color="fg.subtle">
              <PiImageBrokenThin size="48px" />
            </Center>
          </AspectRatio>
        )}
      </Card.Header>
      <Card.Body gap={{ base: '5', md: '6' }}>
        <Stack gap="3" flex="1">
          <Stack>
            <Stack gap="2" direction="row" flexWrap="wrap" h="8" mb="2">
              {genreNames.map((genre, index) => (
                <Tag h="3" key={index}>
                  {genre}
                </Tag>
              ))}
            </Stack>
            <Link to={`/movie/${movie.id}`}>
              <Text textStyle="3xl" fontWeight="black" lineClamp={1}>
                {movie.title}
              </Text>
            </Link>
          </Stack>
          <Text color="fg.muted" lineClamp={3}>
            {movie.overview}
          </Text>
        </Stack>
      </Card.Body>
      <Card.Footer m="0 auto">
        <Rating value={movie.vote_average} readOnly />
      </Card.Footer>
    </Card.Root>
  )
}
