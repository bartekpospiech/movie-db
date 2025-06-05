import { defineRecipe } from '@chakra-ui/react'

export const inputRecipe = defineRecipe({
  base: {
    fontSize: 'md',
    lineHeight: 'base',
    borderRadius: 'l2',
    color: 'fg.muted',
  },
  variants: {
    variant: {
      outline: {
        borderColor: 'gray.200',
        _focus: {
          borderColor: 'colorPalette.600',
          boxShadow: 'none',
        },
      },
    },
    size: {
      lg: {
        h: '14',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'lg',
  },
})
