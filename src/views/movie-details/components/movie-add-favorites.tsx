import { useTranslation } from 'react-i18next'
import { PiHeartLight } from 'react-icons/pi'
import { useNavigate } from 'react-router'

import { useAddMovieToFavoritesMutation } from '@/services'
import { toaster } from '@/ui'

type AddToFavoritesProps = {
  movie?: {
    id: number
  }
}

export const AddToFavorites = ({ movie }: AddToFavoritesProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [addMovieToFavorites] = useAddMovieToFavoritesMutation()

  return (
    <PiHeartLight
      fill="green"
      size="32"
      cursor="pointer"
      onClick={() => {
        toaster.promise(
          addMovieToFavorites({
            id: movie?.id || 0,
          }),
          {
            loading: {
              description: t('adding_to_favorites'),
            },
            success: { description: t('added_to_favorites'), onStatusChange: () => navigate('/favorites') },
            error: { description: t('error_adding_to_favorites') },
          }
        )
      }}
    />
  )
}
