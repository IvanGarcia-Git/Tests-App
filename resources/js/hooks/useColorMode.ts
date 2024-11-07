import { useEffect } from 'react'
import { usePage } from '@inertiajs/react'

import type { PageProps } from '@/types'

export const useColorMode = () => {
	const { auth, colorMode } = usePage().props as unknown as PageProps

	if (!auth) return { colorMode }

	const { user, preferences } = auth

	const mode = user ? preferences.colorMode ?? 'light' : colorMode

	useEffect(() => {
		document.querySelector('html')?.classList.add(mode)
	}, [colorMode])

	return { colorMode }
}
