import '@/store'
import '@/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import Spinner from '@/components/Spinner'
import router from '@/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner className="fixed left-0 top-0" />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>,
)
