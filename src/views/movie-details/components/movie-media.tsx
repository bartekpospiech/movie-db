import { Error } from '@/components'
import { labels } from '@/labels'
import { useGetMovieImagesQuery, useGetMovieTrailerQuery } from '@/services'
import { Stack, Divider, EmptyState, Flex, Grid, GridItem, Image, Skeleton, Text } from '@/ui'
import YouTube from 'react-youtube'

type MovieImagesProps = {
  id: number
}

export const MovieMedia = ({ id }: MovieImagesProps) => {
  const {
    data: images,
    isLoading: imagesLoading,
    isError: imagesError,
  } = useGetMovieImagesQuery(id, {
    skip: !id,
  })
  const {
    data: trailer,
    isLoading: trailerLoading,
    isError: trailerError,
  } = useGetMovieTrailerQuery(id, {
    skip: !id,
  })

  if (imagesLoading) {
    return (
      <Flex gap="4">
        {[...Array(3).keys()].map(item => (
          <Skeleton key={item} height="240px" width="1/3" boxShadow="sm" borderRadius="md" />
        ))}
      </Flex>
    )
  }

  if (trailerLoading) {
    return (
      <Flex gap="4">
        <Skeleton height="640px" width="full" boxShadow="sm" borderRadius="md" />
      </Flex>
    )
  }

  if (imagesError || trailerError) {
    return <Error />
  }

  if (!images || images?.length === 0 || !trailer || !trailer.key) {
    return <EmptyState title={labels.movie_no_media} description={labels.movie_no_media_description} />
  }

  return (
    <Stack gap="8" mt="6">
      <Divider>
        <Text fontWeight="black" textStyle="2xl">
          {labels.common.movie_gallery}
        </Text>
      </Divider>
      <Grid templateColumns="repeat(auto-fill, minmax(360px, 1fr))" gap="4" justifyContent="center" alignItems="center">
        {images?.map(image => (
          <GridItem key={image.file_path}>
            <Image
              key={image.file_path}
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt={image.file_path}
              w="100%"
              h="auto"
              borderRadius="md"
              boxShadow="sm"
              objectFit="cover"
            />
          </GridItem>
        ))}
      </Grid>
      <Divider>
        <Text fontWeight="black" textStyle="2xl">
          {labels.common.movie_trailer}
        </Text>
      </Divider>
      <YouTube
        id={trailer?.key || ''}
        videoId={trailer?.key || ''}
        opts={{
          width: '100%',
          height: '640px',
          playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0,
            modestbranding: 0,
          },
        }}
      />
    </Stack>
  )
}
