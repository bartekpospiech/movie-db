import { defineConfig, defineSemanticTokens, defineTokens } from '@chakra-ui/react'

import { inputRecipe } from './components'

export const config = defineConfig({
  globalCss: {
    body: {
      colorPalette: 'green',
    },
  },
  theme: {
    tokens: defineTokens({
      fonts: {
        body: { value: 'var(--font-outfit)' },
        heading: { value: 'var(--font-outfit)' },
      },
    }),
    semanticTokens: defineSemanticTokens({
      radii: {
        l1: { value: '0.25rem' },
        l2: { value: '0.375rem' },
        l3: { value: '0.5rem' },
      },
      sizes: {
        small: { value: '240px' },
        large: { value: '400px' },
        video: { value: '640px' },
      },
    }),
    recipes: {
      input: inputRecipe,
    },
  },
})
