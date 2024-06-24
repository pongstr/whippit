import { Profiler } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

function App() {
  function onRender(
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
  ) {
    console.table({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
    })
  }

  return (
    <Profiler id="app" onRender={onRender}>
      <Header />
      <main className="container py-8">
        <Outlet />
      </main>
      <Footer />
    </Profiler>
  )
}

export default App
