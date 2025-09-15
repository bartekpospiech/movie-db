import type { MovieResponse } from '@/types'

import { useTranslation } from 'react-i18next'
import { PiCalendarDotsThin, PiTimerThin } from 'react-icons/pi'

import { MovieTags } from './'

import { Stack, Text } from '@/ui'
import { formatTimeToHoursAndMinutes } from '@/utils'

type MovieDescriptionProps = {
  movie?: MovieResponse
}

export const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  const { t } = useTranslation()
  return (
    <Stack flex="1" gap="3">
      <Stack color="fg.muted" textStyle="sm" direction="row" alignItems="center">
        <PiCalendarDotsThin size="16" />
        <Text>
          {movie?.release_date ? formatTimeToHoursAndMinutes(movie.release_date) : `${t('movie_no_premiere_date')}`}
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
  )
}
