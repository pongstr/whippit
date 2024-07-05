import '@/store'
import '@/main.css'

import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router, Switch } from 'wouter'

import TransitionWrapper from './components/TransitionWrapper'

const HomePage = lazy(() => import('@/pages/HomePage'))
const DocsPage = lazy(() => import('@/pages/DocsPage'))
const ExamplesPage = lazy(() => import('@/pages/Examples'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense>
      <Router>
        <Switch>
          <TransitionWrapper>
            <Route path="/examples" component={ExamplesPage} />
            <Route path="/readme" component={DocsPage} />
            <Route path="/" component={HomePage} />
          </TransitionWrapper>
        </Switch>
      </Router>
    </Suspense>
  </StrictMode>,
)
