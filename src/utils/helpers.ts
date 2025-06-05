import { genres } from './constants'

export function getGenreNamesByIds(ids: number[]): string[] {
  const genreMap = new Map(genres.map(genre => [genre.id, genre.name]))
  return ids.map(id => genreMap.get(id)).filter((name): name is string => !!name)
}

export function formatTimeToHoursAndMinutes(time: string): string {
  return new Date(time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
}
