import { useAddMovieToFavoritesMutation } from '@/services'
import { toaster } from '@/ui'

import { PiHeartLight } from 'react-icons/pi'
import { useNavigate } from 'react-router'

type AddToFavoritesProps = {
  movie?: {
    id: number
  }
}

export const AddToFavorites = ({ movie }: AddToFavoritesProps) => {
  const navigate = useNavigate()
  const [addMovieToFavorites] = useAddMovieToFavoritesMutation()
  return (
    <PiHeartLight
      fill="green"
      size="32"
      cursor="pointer"
      onClick={() =>
        addMovieToFavorites({
          id: movie ? movie.id : 0,
        }).then(() => {
          toaster.create({
            description: 'Movie added to favorites',
            type: 'success',
            action: {
              label: 'View Favorites',
              onClick: () => {
                navigate('/favorites')
              },
            },
            duration: 3000,
          })
        })
      }
    />
  )
}
