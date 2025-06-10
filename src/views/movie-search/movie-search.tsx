import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PiHeartLight } from 'react-icons/pi'
import { Link } from 'react-router'

import { MovieGrid, SearchForm, TrendingMovies } from './components'

import { Error, ScrollToTop } from '@/components'
import { PageHeader } from '@/components'
import { APP_PATHS } from '@/routes'
import { useSearchMoviesQuery } from '@/services'
import { Flex } from '@/ui'

export const MovieSearch = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const { data, isError } = useSearchMoviesQuery({ query, page }, { skip: query.length < 2 })

  useEffect(() => {
    setPage(1)
  }, [query])

  if (isError) {
    return <Error />
  }

  return (
    <>
      <Flex justify="flex-end">
        <Link to={APP_PATHS.FAV}>
          <PiHeartLight fill="green" size="32" />
        </Link>
      </Flex>
      <PageHeader
        headline={t('page_header_headline')}
        description={t('page_header_description')}
        alignItems="center"
        textAlign="center"
      />
      <SearchForm setQuery={setQuery} />
      {data && <MovieGrid data={data} query={query} page={page} setPage={setPage} />}
      {query.length < 2 && <TrendingMovies query={query} />}
      <ScrollToTop page={page} />
    </>
  )
}
