import { LuQuote } from 'react-icons/lu'

import { Box, Flex, Prose, Square, Stack, Text } from '@/ui'
import { Carousel } from '@/ui/components/carousel'

export type TestimonialData = {
  content: string
  author: string
  title: string
  created_at: string
}

type TestimonialCardProps = {
  data: TestimonialData[]
  error: boolean
  loading: boolean
}

export const ReviewCard = ({ data }: TestimonialCardProps) => (
  <Stack align={{ base: 'flex-start', md: 'center' }} textAlign={{ base: 'start', md: 'center' }} gap="6">
    <Square size="10" layerStyle="fill.solid" rounded="l2">
      <LuQuote />
    </Square>
    <Carousel>
      {data?.map(item => (
        <Flex key={item.title} p="4" rounded="l2" direction="column" gap="2" justifyContent="center" w="full">
          <Text textStyle="md">
            <Prose>
              <Box dangerouslySetInnerHTML={{ __html: item?.content }} />
            </Prose>
          </Text>
          <Flex>
            <Text fontWeight="medium">{item.author}</Text>
            <span>•</span>
            <Text color="fg.muted">
              {item?.author}, {item?.created_at}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Carousel>
  </Stack>
)
