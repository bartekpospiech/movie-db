import type { CrewResponse } from '@/types'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

import { Title } from '@/components'
import { Avatar, Box, Flex, Grid, Stack, Text } from '@/ui'

type MovieCastProps = {
  crew: Pick<CrewResponse, 'id' | 'name' | 'profile_path' | 'job'>[]
}

export const MovieCrew = ({ crew }: MovieCastProps) => {
  const { t } = useTranslation()

  return (
    <Box mt="6">
      <Title headline={t('common.crew')} />
      {crew.length === 0 ? (
        <Text mt="8" textStyle="sm" color="fg.muted" textAlign="center">
          {t('no_crew')}
        </Text>
      ) : (
        <Grid columns={{ base: 2, lg: 3 }} gap="6" mt="4" flexWrap="wrap">
          {crew.map(job => (
            <Link to={`/movie/actor/${job.id}`} key={job.id}>
              <Flex key={job.id} gap="3" align="center" flex="1 0 fit-content">
                <Avatar
                  name={job.name}
                  src={`https://image.tmdb.org/t/p/w200${job.profile_path}`}
                  size="lg"
                  borderColor="colorPalette.600"
                  borderWidth="1px"
                />
                <Stack gap="0">
                  <Text fontWeight="black" textStyle="sm">
                    {job.name}
                  </Text>
                  <Text color="fg.muted" textStyle="xs">
                    {job.job}
                  </Text>
                </Stack>
              </Flex>
            </Link>
          ))}
        </Grid>
      )}
    </Box>
  )
}
