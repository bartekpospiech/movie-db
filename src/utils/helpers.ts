import { genres } from './constants'

export function getGenreNamesByIds(ids: number[]): string[] {
  const genreMap = new Map(genres.map(genre => [genre.id, genre.name]))
  return ids.map(id => genreMap.get(id)).filter((name): name is string => !!name)
}
