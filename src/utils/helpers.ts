import type { ProviderCountryCode } from '@/types'

import { genres } from './constants'

import i18n from '@/i18n'

export type Provider = {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
  provider_url?: string
}

type ProviderUrlMap = {
  [provider_id: number]: string
}

export function getGenreNamesByIds(ids: number[]): string[] {
  const genreMap = new Map(genres.map(genre => [genre.id, genre.name]))
  return ids.map(id => genreMap.get(id)).filter((name): name is string => !!name)
}

export function formatTimeToHoursAndMinutes(time: string): string {
  return new Date(time).toLocaleDateString(i18n.language, {
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

export function addProviderUrls(movie: ProviderCountryCode, urlMap: ProviderUrlMap) {
  const enrich = (providers: Provider[] | undefined): Provider[] => {
    if (!providers) return []
    return providers.map(provider => ({
      ...provider,
      provider_url: urlMap[provider.provider_id],
    }))
  }

  return {
    ...movie,
    buy: enrich(movie?.buy),
    rent: enrich(movie?.rent),
    flatrate: enrich(movie?.flatrate),
  }
}
