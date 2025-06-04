import { useEffect } from 'react'
import { useLocation } from 'react-router'

export const ScrollToTop = ({ page }: { page?: number }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, page])

  return null
}
