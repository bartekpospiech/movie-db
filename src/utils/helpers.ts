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

export function flagsToEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}
