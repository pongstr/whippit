import { AnimatePresence, motion } from 'motion/react'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

const worker = new Worker(new URL('@/worker/worker.ts', import.meta.url), {
  type: 'module',
})

export const WorkerDemo: FC = () => {
  const [greet, setGreet] = useState<string | undefined>(undefined)

  useEffect(() => {
    worker.onmessage = ({ data }: MessageEvent<CustomMessage<string>>) => {
      if (data.type !== 'greet') return
      setGreet(data.content)
      setTimeout(() => setGreet(undefined), 2000)
    }

    return () => {
      worker.onmessage = null
    }
  }, [])

  return (
    <div className=" space-y-2 py-2">
      <Button
        variant="link"
        className="flex h-auto items-center justify-start gap-2 p-0 text-slate-600 transition-colors hover:text-blue-600"
        disabled={Boolean(greet)}
        onClick={() => worker.postMessage({ type: 'greet' })}
      >
        <span>clickme.</span>
      </Button>
      <AnimatePresence>
        {greet && (
          <motion.pre
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0, transition: { duration: 3 } }}
            className="fixed bottom-2 left-48 h-32 w-72 overflow-y-auto rounded-lg text-[10px] text-muted"
          >
            {greet}
          </motion.pre>
        )}
      </AnimatePresence>
    </div>
  )
}
