import type {
  BackdropsEntityOrPostersEntity,
  ImagesResponse,
  MovieByActorResponse,
  MovieResponse,
  MovieResultsEntity,
  MoviesResponse,
  ResultsEntity,
  TrailersResponse,
} from '@/types'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const movieApi = createApi({
  reducerPath: 'MOVIE_API',
  tagTypes: ['Movie'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${TMDB_API_KEY}`)
      return headers
    },
  }),
  endpoints: builder => ({
    getMovieDetails: builder.query<MovieResponse, string, MovieResponse>({
      query: id => `/movie/${id}`,
      transformResponse: response => response,
    }),
    getTrendingMovies: builder.query<MovieResultsEntity[], unknown, MoviesResponse>({
      query: () => '/trending/movie/week',
      transformResponse: response => response.results?.slice(0, 4) ?? [],
    }),
    getMovieImages: builder.query<BackdropsEntityOrPostersEntity[], number, ImagesResponse>({
      query: id => `/movie/${id}/images`,
      transformResponse: response => response.backdrops?.slice(0, 9) ?? [],
    }),
    getMovieTrailer: builder.query<ResultsEntity, number, TrailersResponse>({
      query: id => `/movie/${id}/videos`,
      transformResponse: ({ results }) => {
        const trailer = results?.find(video => video.type === 'Trailer' && video.site === 'YouTube')
        return (
          trailer || {
            iso_639_1: '',
            iso_3166_1: '',
            name: '',
            key: '',
            site: '',
            size: 0,
            type: '',
            official: false,
            published_at: '',
            id: '',
          }
        )
      },
    }),
    getMovieActor: builder.query({
      query: id => `/person/${id}`,
      transformResponse: response => response,
    }),
    getMovieByActor: builder.query<MovieByActorResponse, string, MovieByActorResponse>({
      query: id => `/person/${id}/combined_credits`,
      transformResponse: response => response,
    }),
    getMovieCredits: builder.query({
      query: id => `/movie/${id}/credits`,
      transformResponse: response => response,
    }),
    getMovieFavorites: builder.query<MoviesResponse, unknown, MoviesResponse>({
      query: ({ page = 1, createdAtSort }) => `/account/22040515/favorite/movies?page=${page}&sort_by=${createdAtSort}`,
      transformResponse: response => response,
    }),
    getSimilarMovies: builder.query({
      query: ({ id, page = 1 }) => `/movie/${id}/similar?page=${page}`,
      transformResponse: response => response,
    }),
    searchMovies: builder.query<MoviesResponse, { query: string; page: number }, MoviesResponse>({
      query: ({ query, page = 1 }) => `/search/movie?query=${query}&page=${page}`,
      transformResponse: response => response,
    }),
    addMovieToFavorites: builder.mutation<unknown, { id: number }>({
      query: movie => ({
        url: `/account/22040515/favorite`,
        method: 'POST',
        body: {
          media_type: 'movie',
          media_id: movie.id,
          favorite: true,
        },
      }),
    }),
  }),
})

export const {
  useGetMovieDetailsQuery,
  useGetMovieImagesQuery,
  useGetMovieTrailerQuery,
  useGetTrendingMoviesQuery,
  useGetMovieActorQuery,
  useGetMovieByActorQuery,
  useGetMovieCreditsQuery,
  useGetSimilarMoviesQuery,
  useGetMovieFavoritesQuery,
  useSearchMoviesQuery,
  useAddMovieToFavoritesMutation,
} = movieApi
