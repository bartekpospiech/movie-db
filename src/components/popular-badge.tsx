import { labels } from '@/labels'
import { Flex } from '@/ui'

export const PopularBadge = () => (
  <Flex
    alignItems="center"
    justify="center"
    position="absolute"
    top="5"
    right="-10"
    bg="colorPalette.solid"
    color="colorPalette.100"
    minW="36"
    py="1"
    fontWeight="medium"
    textStyle="xs"
    letterSpacing="wide"
    transform="rotate(45deg)"
  >
    {labels.common.popular}
  </Flex>
)
