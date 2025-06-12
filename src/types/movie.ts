export interface ImagesResponse {
  backdrops?: BackdropsEntityOrPostersEntity[] | null
  id: number
  logos?: LogosEntity[] | null
  posters?: BackdropsEntityOrPostersEntity[] | null
}

export interface BackdropsEntityOrPostersEntity {
  aspect_ratio: number
  height: number
  iso_639_1?: string | null
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface LogosEntity {
  aspect_ratio: number
  height: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface MovieResponse {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres?: GenresEntity[] | null
  homepage: string
  id: number
  imdb_id: string
  origin_country?: string[] | null
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: ProductionCompaniesEntity[] | null
  production_countries?: ProductionCountriesEntity[] | null
  release_date: string
  revenue: number
  runtime: number
  spoken_languages?: SpokenLanguagesEntity[] | null
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MoviesResponse {
  page: number
  results?: MovieResultsEntity[]
  total_pages: number
  total_results: number
}

export interface TrailersResponse {
  id: number
  results?: ResultsEntity[] | null
}
export interface ResultsEntity {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

export interface CreditsResponse {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface CrewResponse {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}

export interface MovieByActorResponse {
  cast?: MovieResultsEntity[]
  crew?: MovieResultsEntity[]
}

export interface MovieResultsEntity {
  adult: boolean
  backdrop_path?: string
  genre_ids?: (number | null)[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title?: string
  name?: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface GenresEntity {
  id: number
  name: string
}

export interface ProductionCompaniesEntity {
  id: number
  logo_path?: string | null
  name: string
  origin_country: string
}

export interface ProductionCountriesEntity {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguagesEntity {
  english_name: string
  iso_639_1: string
  name: string
}

export interface ProvidersResonse {
  id: number
  results: Provider
}
export interface Provider {
  AD: ProviderCountryCode
  AE: ProviderCountryCode
  AG: ProviderCountryCode
  AL: ProviderCountryCode
  AR: ProviderCountryCode
  AT: ProviderCountryCode
  AU: ProviderCountryCode
  BA: ProviderCountryCode
  BB: ProviderCountryCode
  BE: ProviderCountryCode
  BG: ProviderCountryCode
  BH: ProviderCountryCode
  BM: ProviderCountryCode
  BO: ProviderCountryCode
  BR: ProviderCountryCode
  BS: ProviderCountryCode
  CA: ProviderCountryCode
  CH: ProviderCountryCode
  CI: ProviderCountryCode
  CL: ProviderCountryCode
  CO: ProviderCountryCode
  CR: ProviderCountryCode
  CZ: ProviderCountryCode
  DE: ProviderCountryCode
  DK: ProviderCountryCode
  DO: ProviderCountryCode
  DZ: ProviderCountryCode
  EC: ProviderCountryCode
  EE: ProviderCountryCode
  EG: ProviderCountryCode
  ES: ProviderCountryCode
  FI: ProviderCountryCode
  FR: ProviderCountryCode
  GB: ProviderCountryCode
  GF: ProviderCountryCode
  GG: ProviderCountryCode
  GH: ProviderCountryCode
  GI: ProviderCountryCode
  GR: ProviderCountryCode
  GT: ProviderCountryCode
  HK: ProviderCountryCode
  HN: ProviderCountryCode
  HR: ProviderCountryCode
  HU: ProviderCountryCode
  ID: ProviderCountryCode
  IE: ProviderCountryCode
  IL: ProviderCountryCode
  IN: ProviderCountryCode
  IQ: ProviderCountryCode
  IS: ProviderCountryCode
  IT: ProviderCountryCode
  JM: ProviderCountryCode
  JO: ProviderCountryCode
  JP: ProviderCountryCode
  KE: ProviderCountryCode
  KR: ProviderCountryCode
  KW: ProviderCountryCode
  LB: ProviderCountryCode
  LC: ProviderCountryCode
  LI: ProviderCountryCode
  LT: ProviderCountryCode
  LU: ProviderCountryCode
  LV: ProviderCountryCode
  LY: ProviderCountryCode
  MA: ProviderCountryCode
  MC: ProviderCountryCode
  MD: ProviderCountryCode
  MK: ProviderCountryCode
  MT: ProviderCountryCode
  MX: ProviderCountryCode
  MY: ProviderCountryCode
  MZ: ProviderCountryCode
  NE: ProviderCountryCode
  NG: ProviderCountryCode
  NL: ProviderCountryCode
  NO: ProviderCountryCode
  NZ: ProviderCountryCode
  OM: ProviderCountryCode
  PA: ProviderCountryCode
  PE: ProviderCountryCode
  PF: ProviderCountryCode
  PH: ProviderCountryCode
  PK: ProviderCountryCode
  PL: ProviderCountryCode
  PS: ProviderCountryCode
  PT: ProviderCountryCode
  PY: ProviderCountryCode
  QA: ProviderCountryCode
  RO: ProviderCountryCode
  RS: ProviderCountryCode
  SA: ProviderCountryCode
  SE: ProviderCountryCode
  SG: ProviderCountryCode
  SI: ProviderCountryCode
  SK: ProviderCountryCode
  SM: ProviderCountryCode
  SV: ProviderCountryCode
  TC: ProviderCountryCode
  TH: ProviderCountryCode
  TN: ProviderCountryCode
  TR: ProviderCountryCode
  TT: ProviderCountryCode
  TW: ProviderCountryCode
  UG: ProviderCountryCode
  US: ProviderCountryCode
  UY: ProviderCountryCode
  VA: ProviderCountryCode
  VE: ProviderCountryCode
  YE: ProviderCountryCode
  ZA: ProviderCountryCode
  ZM: ProviderCountryCode
}
export interface ProviderCountryCode {
  link: string
  flatrate?: ProviderEntity[] | null
  buy?: ProviderEntity[] | null
  rent?: ProviderEntity[] | null
}
export interface ProviderEntity {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}
