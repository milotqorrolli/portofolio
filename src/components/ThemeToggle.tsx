'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed bottom-6 right-6 z-50 border-4 border-black bg-white dark:bg-black dark:border-white dark:text-white p-4 font-bold font-mono shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
        >
            {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
    )
}
