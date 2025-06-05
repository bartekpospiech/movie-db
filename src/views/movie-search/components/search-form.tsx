import debounce from 'lodash.debounce'
import { useEffect, useMemo } from 'react'
import { LuSearch } from 'react-icons/lu'

import { labels } from '@/labels'
import { Input, InputGroup, Stack } from '@/ui'

type SearchFormProps = {
  setQuery: (query: string) => void
}

export const SearchForm = ({ setQuery }: SearchFormProps) => {
  const debouncedResults = useMemo(() => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
    }
    return debounce(handleChange, 250)
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
        <Input size="xl" placeholder={labels.movie_search_placeholder} onChange={debouncedResults} />
      </InputGroup>
    </Stack>
  )
}
