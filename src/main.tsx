import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'

import { UiProvider } from '@/ui'
import { router } from '@/routes'
import { store } from '@/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UiProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UiProvider>
  </StrictMode>
)
