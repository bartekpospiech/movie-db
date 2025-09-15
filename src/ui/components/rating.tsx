import { RatingGroup } from '@chakra-ui/react'
import * as React from 'react'

export interface RatingProps extends RatingGroup.RootProps {
  icon?: React.ReactElement
  count?: number
  label?: React.ReactNode
  value?: number
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(function Rating(
  { icon, count = 10, label, value, ...rest },
  ref
) {
  return (
    <RatingGroup.Root ref={ref} count={count} value={value} {...rest} size="sm">
      {label && <RatingGroup.Label>{label}</RatingGroup.Label>}
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        {Array.from({ length: count }).map((_, index) => (
          <RatingGroup.Item key={index} index={index + 1}>
            <RatingGroup.ItemIndicator icon={icon} />
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
})
