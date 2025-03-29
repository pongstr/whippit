declare module 'https://cdn.jsdelivr.net/npm/cowsay@1.6.0/+esm' {
  type Params = {
    text: string
    e?: string
    T?: string
  }

  export function say(_params: Params): string
  export function think(_params: Params): string
}
