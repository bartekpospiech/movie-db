import type { GenresEntity, ProductionCompaniesEntity } from '@/types'

import { Stack, Tag } from '@/ui'

type MovieTagsProps = {
  genres: GenresEntity[]
  production_companies: ProductionCompaniesEntity[]
}

export const MovieTags = ({ genres, production_companies }: MovieTagsProps) => {
  return (
    <Stack gap="3">
      <Stack gap="2" direction="row" flexWrap="wrap">
        {genres?.map(genre => (
          <Tag h="3" key={genre.id} colorScheme="green" size="sm">
            {genre.name}
          </Tag>
        ))}
      </Stack>
      <Stack direction="row" gap="2" flexWrap="wrap">
        {production_companies?.map(company => (
          <Tag key={company.id} size="sm" variant="solid">
            {company.name}
          </Tag>
        ))}
      </Stack>
    </Stack>
  )
}
