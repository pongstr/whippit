import React from 'react'

import AppLayout from '@/components/layouts/app-layout'

const ExamplesPage: React.FC = () => {
  return (
    <AppLayout>
      <main className="mx-4  min-h-[calc(100dvh_-_105px)]  py-4 md:container sm:mx-auto">
        Snippets
      </main>
    </AppLayout>
  )
}

export default ExamplesPage
