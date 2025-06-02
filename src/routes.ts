import { createBrowserRouter } from 'react-router'

import { MovieActor, MovieDetails, MovieFavorites, MovieSearch, NotFound } from '@/views'

export const APP_PATHS = {
  HOME: '/',
  MOVIE_DETAILS: '/movie/:id',
  MOVIE_ACTOR: '/movie/actor/:id',
  FAV: '/favorites',
}

export const router = createBrowserRouter([
  { index: true, path: APP_PATHS.HOME, Component: MovieSearch },
  {
    path: APP_PATHS.MOVIE_DETAILS,
    Component: MovieDetails,
  },
  {
    path: APP_PATHS.FAV,
    Component: MovieFavorites,
  },
  {
    path: APP_PATHS.MOVIE_ACTOR,
    Component: MovieActor,
  },
  {
    path: '*',
    Component: NotFound,
  },
])
