import type { MovieResultsEntity } from '@/types'

import { PiPopcorn } from 'react-icons/pi'

import { MoviePreviewCard, Title } from '@/components'
import { labels } from '@/labels'
import { EmptyState, Grid, Stack } from '@/ui'

type SimilarMoviesProps = {
  similar: Pick<MovieResultsEntity, 'id' | 'title' | 'poster_path' | 'release_date' | 'overview' | 'vote_average'>[]
}

export const SimilarMovies = ({ similar }: SimilarMoviesProps) => {
  if (!similar || similar.length === 0) {
    return (
      <EmptyState
        title={labels.no_similar_movies}
        description={labels.no_similar_movies_description}
        icon={<PiPopcorn fill="colorPalette.green" />}
      />
    )
  }

  return (
    <Stack>
      <Title headline={labels.common.similar_movies} />
      <Grid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: '12', lg: '8' }}
        px={{ base: '4', md: '12', xl: '24' }}
        py="8"
      >
        {similar.map(movie => <MoviePreviewCard key={movie.id} movie={movie} />) || []}
      </Grid>
    </Stack>
  )
}
