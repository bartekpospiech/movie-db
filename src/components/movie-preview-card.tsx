import type { MovieResultsEntity } from '@/types'

import { Link } from 'react-router'

import { MovieCardImage } from './movie-card-image'
import { PopularBadge } from './popular-badge'

import { Card, Rating, Stack, Tag, Text, Tooltip } from '@/ui'
import { getGenreNamesByIds } from '@/utils'

type MoviePreviewCard = {
  movie: Pick<
    MovieResultsEntity,
    'id' | 'title' | 'name' | 'overview' | 'vote_average' | 'genre_ids' | 'poster_path' | 'vote_count'
  >
}

export const MoviePreviewCard = ({ movie }: MoviePreviewCard) => {
  const genreNames = movie.genre_ids ? getGenreNamesByIds(movie.genre_ids as number[]) : []
  const titleVisible = movie.vote_count >= 1000 && movie.vote_average >= 7

  return (
    <Card
      footer={<Rating value={movie.vote_average} readOnly />}
      title={titleVisible && <PopularBadge />}
      header={<MovieCardImage movie={movie} />}
    >
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
            <Tooltip
              content={movie.title || movie.name}
              positioning={{ offset: { mainAxis: 2, crossAxis: 2 } }}
              lazyMount
            >
              <Text textStyle="3xl" fontWeight="black" lineClamp={1}>
                {movie.title || movie.name}
              </Text>
            </Tooltip>
          </Link>
        </Stack>
        <Text color="fg.muted" lineClamp={3}>
          {movie.overview}
        </Text>
      </Stack>
    </Card>
  )
}
