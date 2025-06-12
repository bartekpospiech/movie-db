import type { ChangeEvent } from 'react'

import debounce from 'lodash.debounce'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { LuSearch } from 'react-icons/lu'

import { Input, InputGroup, Stack } from '@/ui'

type SearchFormProps = {
  setQuery: (query: string) => void
}

export const SearchForm = ({ setQuery }: SearchFormProps) => {
  const { t } = useTranslation()
  const debouncedResults = useMemo(() => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
    }
    return debounce(handleChange, 300)
  }, [setQuery])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })

  return (
    <Stack
      gap="6"
      alignItems="center"
      textAlign="center"
      margin="0 auto"
      direction="row"
      w={{ base: 'full', md: '3xl' }}
      flexWrap="wrap"
    >
      <InputGroup flex="1" startElement={<LuSearch size={20} />}>
        <Input placeholder={t('movie_search_placeholder')} onChange={debouncedResults} autoFocus autoComplete="off" />
      </InputGroup>
    </Stack>
  )
}
