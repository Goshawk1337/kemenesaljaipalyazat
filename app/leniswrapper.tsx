'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function ClientWrapper() {
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time: any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      }, [])

    return null
}
