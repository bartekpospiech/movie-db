import type { CreditsResponse } from '@/types'

import { Link } from 'react-router'

import { Title } from '@/components'
import { labels } from '@/labels'
import { Avatar, Box, Flex, Grid, Stack, Text } from '@/ui'

type MovieCastProps = {
  cast: Pick<CreditsResponse, 'id' | 'name' | 'profile_path' | 'character'>[]
}

export const MovieCast = ({ cast }: MovieCastProps) => (
  <Box mt="6">
    <Title headline={labels.common.cast} />
    {cast.length === 0 ? (
      <Text mt="8" textStyle="sm" color="fg.muted" textAlign="center">
        {labels.no_cast}
      </Text>
    ) : (
      <Grid columns={{ base: 2, lg: 3 }} gap="6" mt="4" flexWrap="wrap">
        {cast.map(actor => (
          <Link to={`/movie/actor/${actor.id}`} key={actor.id}>
            <Flex key={actor.id} gap="3" align="center" flex="1 0 fit-content">
              <Avatar
                name={actor.name}
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                size="lg"
                borderColor="colorPalette.600"
                borderWidth="1px"
              />
              <Stack gap="0">
                <Text fontWeight="black" textStyle="sm">
                  {actor.name}
                </Text>
                <Text color="fg.muted" textStyle="xs">
                  {actor.character}
                </Text>
              </Stack>
            </Flex>
          </Link>
        ))}
      </Grid>
    )}
  </Box>
)
