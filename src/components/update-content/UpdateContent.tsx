/* eslint-disable */
import React, { useEffect } from 'react'
import { toast } from 'sonner'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/components/utils'
import { ExternalLink, Wifi, WifiOff } from 'lucide-react'

const ChangeLog: React.FC<{ reload: () => void }> = ({ reload }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-start items-center">
        <span className="text-muted-foreground">Updates available.</span>
        <a
          className={cn(
            buttonVariants({ size: 'sm', variant: 'link' }),
            'gap-1 inline-flex px-1',
          )}
          href="https://github.com/pongstr/whippit/blob/main/CHANGELOG.md"
          target="_blank"
        >
          <span>Changelog</span>
          <ExternalLink className="size-3.5" />
        </a>
      </div>

      <Button variant="secondary" size="sm" onClick={reload}>
        <span className="text-[12px]">Reload</span>
      </Button>
    </div>
  )
}

const NetworkStatus: React.FC<{ status?: boolean; toastId: string }> = ({
  status = true,
  toastId,
}) => {
  if (status) {
    return (
      <div className="flex justify-start gap-2 items-center w-full">
        <Wifi className="size-4 text-blue-500" />
        <span>You&apos;re back online.</span>
        <Button
          size="sm"
          variant="secondary"
          className="ml-auto"
          onClick={() => toast.dismiss(toastId)}
        >
          <span className="text-[12px]">Close</span>
        </Button>
      </div>
    )
  }
  return (
    <div className="flex justify-start gap-2 items-center w-full">
      <WifiOff className="size-4 text-muted-foreground/60" />
      <span className="text-foreground/50">
        You&apos;re offline. Check your connection.
      </span>
      <Button
        size="sm"
        variant="secondary"
        className="ml-auto"
        onClick={() => toast.dismiss(toastId)}
      >
        <span className="text-[12px]">Close</span>
      </Button>
    </div>
  )
}

export const UpdateContent: React.FC = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  const close = () => {
    setNeedRefresh(false)
    updateServiceWorker(true)
    setTimeout(() => window.location.reload(), 500)
  }

  useEffect(() => {
    if (needRefresh) {
      toast(<ChangeLog reload={close} />, {
        duration: 90000,
        closeButton: true,
      })
    }

    function offline() {
      const status =
        typeof navigator !== 'undefined' &&
        typeof navigator.onLine === 'boolean'
          ? navigator.onLine
          : true

      if (!status) {
        const offlineToast = 'offline'
        toast(<NetworkStatus status={false} toastId={offlineToast} />, {
          duration: 9000,
          id: offlineToast,
        })
        return
      }

      const onlineToast = 'online'
      toast(<NetworkStatus status toastId={onlineToast} />, {
        duration: 5000,
        id: onlineToast,
      })
    }

    window.addEventListener('offline', offline)
    window.addEventListener('online', offline)
    return () => {
      window.removeEventListener('offline', offline)
      window.removeEventListener('online', offline)
    }
  }, [needRefresh])

  return null
}
