declare global {
  type CustomMessageType = 'greet' | 'say' | 'think'
  type CowsayParamsType = {
    text: string
    e?: string
    T?: string
  }

  interface CustomMessage<T = unknown> {
    type: CustomMessageType
    content: T
  }
}

export {}
