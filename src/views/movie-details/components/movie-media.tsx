import { useTranslation } from 'react-i18next'
import YouTube from 'react-youtube'

import { Error, LazyImage, Title } from '@/components'
import { useGetMovieImagesQuery, useGetMovieTrailerQuery } from '@/services'
import { AspectRatio, EmptyState, Flex, Grid, GridItem, Skeleton, Stack } from '@/ui'

type MovieImagesProps = {
  id: number
}

export const MovieMedia = ({ id }: MovieImagesProps) => {
  const { t } = useTranslation()
  const {
    data: images,
    isLoading: imagesLoading,
    isError: imagesError,
  } = useGetMovieImagesQuery(id ? id : 0, {
    skip: !id,
  })
  const {
    data: trailer,
    isLoading: trailerLoading,
    isError: trailerError,
  } = useGetMovieTrailerQuery(id ? id : 0, {
    skip: !id,
  })

  if (imagesLoading) {
    return (
      <Flex gap="4">
        {[...Array(3).keys()].map(item => (
          <Skeleton key={item} height="small" width="1/3" boxShadow="sm" borderRadius="md" />
        ))}
      </Flex>
    )
  }

  if (trailerLoading) {
    return (
      <Flex gap="4">
        <Skeleton height="video" width="full" boxShadow="sm" borderRadius="md" />
      </Flex>
    )
  }

  if (imagesError || trailerError) {
    return <Error />
  }

  if (!images || images?.length === 0 || !trailer || !trailer.key) {
    return <EmptyState title={t('movie_no_media')} description={t('movie_no_media_description')} />
  }

  return (
    <Stack gap="8" mt="6">
      <Title headline={t('common.movie_gallery')} />
      <Grid templateColumns="repeat(auto-fill, minmax(360px, 1fr))" gap="4" justifyContent="center" alignItems="center">
        {images?.map(image => (
          <GridItem key={image.file_path}>
            <LazyImage
              key={image.file_path}
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt={image.file_path}
              aspectRatio={16 / 9}
            />
          </GridItem>
        ))}
      </Grid>
      <Title headline={t('common.movie_trailer')} />
      <AspectRatio ratio={16 / 6} w="full" h="full" maxW="100%" borderRadius="md" overflow="hidden">
        <YouTube id={trailer?.key || ''} videoId={trailer?.key || ''} opts={opts} />
      </AspectRatio>
    </Stack>
  )
}

const opts = {
  width: '100%',
  height: '640',
  playerVars: {
    autoplay: 0,
    controls: 0,
    rel: 0,
    modestbranding: 0,
  },
}
