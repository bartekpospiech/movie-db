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
      onClick={() =>
        addMovieToFavorites({
          id: movie ? movie.id : 0,
        }).then(() => {
          toaster.create({
            description: t('added_to_favorites'),
            type: 'success',
            action: {
              label: t('common.view_favorites'),
              onClick: () => {
                navigate('/favorites')
                window.scrollTo(0, 0)
                navigate(0)
              },
            },
            duration: 3000,
          })
        })
      }
    />
  )
}
