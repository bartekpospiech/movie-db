import type { MovieResultsEntity } from '@/types'

import { PiImageBrokenThin } from 'react-icons/pi'
import { Link } from 'react-router'

import { labels } from '@/labels'
import {
  AspectRatio,
  Card,
  Center,
  Image,
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText,
  Stack,
  Tag,
  Text,
} from '@/ui'
import { getGenreNamesByIds } from '@/utils'

type MoviePreviewCard = {
  movie: Pick<MovieResultsEntity, 'id' | 'title' | 'overview' | 'vote_average' | 'genre_ids' | 'poster_path'>
}

export const MoviePreviewCard = ({ movie }: MoviePreviewCard) => {
  const movieVoteAveragePercent = movie.vote_average ? Math.round(movie.vote_average * 10) : 0
  const genreNames = movie.genre_ids ? getGenreNamesByIds(movie.genre_ids as number[]) : []

  return (
    <Card.Root overflow="hidden" boxShadow="xs" bgColor="bg.colorPalette">
      <Card.Header p="0">
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}.jpg`}
            objectFit="cover"
            aspectRatio={3 / 4}
          />
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
      <Card.Footer>
        <Stack gap="3" direction="row" alignItems="center">
          <ProgressCircleRoot size="md" color="colorPalette.primary" value={movieVoteAveragePercent}>
            <ProgressCircleRing color="colorPalette.primary" />
            <ProgressCircleValueText>{movieVoteAveragePercent.toString().replace('%', '')}</ProgressCircleValueText>
          </ProgressCircleRoot>
          <Text textStyle="sm" color="fg.muted" fontWeight="bold">
            {labels.movie_user_rating}
          </Text>
        </Stack>
      </Card.Footer>
    </Card.Root>
  )
}
