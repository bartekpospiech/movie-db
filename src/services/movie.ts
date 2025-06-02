import type { MovieByActorResponse, MovieResponse, MoviesResponse } from '@/types'
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
    getMovieDetails: builder.query<MovieResponse, unknown, MovieResponse>({
      query: id => `/movie/${id}`,
      transformResponse: response => response,
    }),
    getMovieActor: builder.query({
      query: id => `/person/${id}`,
      transformResponse: response => response,
    }),
    getMovieByActor: builder.query<MovieByActorResponse, unknown, MovieByActorResponse>({
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
    searchMovies: builder.query<MoviesResponse, unknown, MoviesResponse>({
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
  useGetMovieActorQuery,
  useGetMovieByActorQuery,
  useGetMovieCreditsQuery,
  useGetSimilarMoviesQuery,
  useGetMovieFavoritesQuery,
  useSearchMoviesQuery,
  useAddMovieToFavoritesMutation,
} = movieApi
