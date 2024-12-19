import '@/store'
import '@/main.css'

import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import { Route, Router, Switch } from 'wouter'

import { Toaster } from '@/components/ui/sonner'
import { UpdateContent } from '@/components/update-content'

const HomePage = lazy(() => import('@/pages/HomePage'))
const DocsPage = lazy(() => import('@/pages/DocsPage'))
const ExamplesPage = lazy(() => import('@/pages/Examples'))

if ('serviceWorker' in navigator) {
  registerSW()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense>
      <Router>
        <Switch>
          <Route path="/examples" component={ExamplesPage} />
          <Route path="/readme" component={DocsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <Toaster />
      <UpdateContent />
    </Suspense>
  </StrictMode>,
)
