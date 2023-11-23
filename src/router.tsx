import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import App from './App'

const IntroPage = React.lazy(() => import('./pages/DemoPage'))

const app: RouteObject = {
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: <IntroPage />,
    },
  ],
}

export default createBrowserRouter([app], { basename: '/' })
