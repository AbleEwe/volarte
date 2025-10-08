'use client'

import { useEffect } from 'react'

export default function TidioChat() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//code.tidio.co/xrysvzti7q9p3jqfq6x0iwsymtmd6w2e.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}