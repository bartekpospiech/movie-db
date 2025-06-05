import { PiSortAscending, PiSortDescending } from 'react-icons/pi'

import { Box, Flex } from '@/ui'
import { SegmentField } from '@/ui'

type FavoritesSortProps = {
  setCreatedAtSort: (value: string) => void
}

export const FavoritesSort = ({ setCreatedAtSort }: FavoritesSortProps) => (
  <Box w="full">
    <Flex ml="auto" maxW="48">
      <SegmentField
        name="direction"
        onChange={value => setCreatedAtSort(value)}
        defaultValue="created_at.desc"
        options={[
          { label: <PiSortAscending />, value: 'created_at.asc' },
          { label: <PiSortDescending />, value: 'created_at.desc' },
        ]}
      />
    </Flex>
  </Box>
)
