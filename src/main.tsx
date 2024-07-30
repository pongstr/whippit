import '@/store'
import '@/main.css'

import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import { Route, Router, Switch } from 'wouter'

import { Transition } from '@/components/transition/Transition'
import { Toaster } from '@/components/ui/sonner'
import { UpdateContent } from '@/components/update-content/UpdateContent'

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
          <Transition>
            <Route path="/examples" component={ExamplesPage} />
            <Route path="/readme" component={DocsPage} />
            <Route path="/" component={HomePage} />
          </Transition>
        </Switch>
      </Router>
      <Toaster />
      <UpdateContent />
    </Suspense>
  </StrictMode>,
)
