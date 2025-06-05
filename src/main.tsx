import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'

import { router } from '@/routes'
import { store } from '@/store'
import { UiProvider } from '@/ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UiProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UiProvider>
  </StrictMode>
)
