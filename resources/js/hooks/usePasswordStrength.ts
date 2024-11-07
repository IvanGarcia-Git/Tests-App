import { useState, useEffect } from 'react'

type PasswordStrength = 'Weak' | 'Medium' | 'Strong'

interface UsePasswordStrengthResult {
	strength: PasswordStrength
	score: number
}

const usePasswordStrength = (password: string): UsePasswordStrengthResult => {
	const [strength, setStrength] = useState<PasswordStrength>('Weak')
	const [score, setScore] = useState<number>(0)

	useEffect(() => {
		const calculateStrength = (password: string): UsePasswordStrengthResult => {
			let score = 0

			// Criteria for password strength
			if (password.length >= 8) score += 1
			if (/[A-Z]/.test(password)) score += 1
			if (/[a-z]/.test(password)) score += 1
			if (/[0-9]/.test(password)) score += 1
			if (/[^A-Za-z0-9]/.test(password)) score += 1

			let strength: PasswordStrength
			if (score <= 2) {
				strength = 'Weak'
			} else if (score === 3 || score === 4) {
				strength = 'Medium'
			} else {
				strength = 'Strong'
			}

			return { strength, score }
		}

		const result = calculateStrength(password)
		setStrength(result.strength)
		setScore(result.score)
	}, [password])

	return { strength, score }
}

export default usePasswordStrength
