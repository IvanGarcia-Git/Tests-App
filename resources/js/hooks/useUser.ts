import { User } from '@/types'

export const useUser = (user: User) => {
	const fullName = user ? `${user.name} ${user.lastname}` : ''

	return { fullName }
}
