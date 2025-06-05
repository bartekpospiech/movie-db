import { Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export const ScrollToTop = ({ page }: { page?: number }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    scroll()
  }, [pathname, page])

  return null
}

export const ScrollTopTopButton = () => {
  const handleClick = () => {
    scroll()
  }

  return (
    <Button
      onClick={handleClick}
      aria-label="Scroll to top"
      backgroundColor="green"
      position="fixed"
      bottom="4"
      right="4"
      borderRadius="full"
      h="10"
      w="10"
    >
      ↑
    </Button>
  )
}
