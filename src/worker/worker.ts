import * as cowsay from 'https://cdn.jsdelivr.net/npm/cowsay@1.6.0/+esm'
;(function () {
  if (!cowsay) return

  function messageHandler(
    event: MessageEvent<CustomMessage<CowsayParamsType>>,
  ) {
    if (['say', 'think'].includes(event.data.type)) return

    postMessage({
      type: event.data.type,
      content: cowsay.say({
        text: "I'm a wooooorker",
        e: 'oO',
        T: 'p',
      }),
    })
  }

  self.addEventListener('message', messageHandler)
})()
