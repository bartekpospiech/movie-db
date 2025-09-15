import { AspectRatio, Box, Center } from '@chakra-ui/react'
import { PiImageBrokenThin } from 'react-icons/pi'

import { LazyImage } from './lazy-image'

export const MovieCardImage = ({ movie }: { movie: { poster_path?: string; title?: string; name?: string } }) => (
  <Box w="full" h="full" overflow="hidden" bg="bg.muted" borderTopRadius="lg">
    {movie.poster_path ? (
      <LazyImage
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}.jpg`}
        alt={(movie.title || movie.name) ?? 'Movie image'}
        objectFit="cover"
        w="full"
        h="full"
      />
    ) : (
      <AspectRatio ratio={3 / 4} w="full" h="full">
        <Center w="full" h="full" bg="bg.muted" color="fg.subtle">
          <PiImageBrokenThin size="48px" />
        </Center>
      </AspectRatio>
    )}
  </Box>
)
