import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'

import { ChangeLang } from '@/components'
import { router } from '@/routes'
import { store } from '@/store'
import { UiProvider } from '@/ui'

import '@/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UiProvider>
      <Provider store={store}>
        <ChangeLang />
        <RouterProvider router={router} />
      </Provider>
    </UiProvider>
  </StrictMode>
)
