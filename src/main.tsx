import '@/store'
import '@/main.css'

import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router, Switch } from 'wouter'

const HomePage = lazy(() => import('@/pages/HomePage'))
const DocsPage = lazy(() => import('@/pages/DocsPage'))
const ExamplesPage = lazy(() => import('@/pages/Examples'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense>
      <Router base="/">
        <Switch>
          <Route path="/examples" component={ExamplesPage} />
          <Route path="/readme" component={DocsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </Suspense>
  </StrictMode>,
)
