import { createSystem, defaultConfig } from '@chakra-ui/react'

import { theme } from './theme'

export const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      colorPalette: 'green',
    },
  },
  theme,
})
