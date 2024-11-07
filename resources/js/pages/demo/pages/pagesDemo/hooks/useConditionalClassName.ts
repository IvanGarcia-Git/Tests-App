export const useConditionalClassName = (template = '') => {
	let headerClassName = ''
	let contentClassName = ''

	switch (template) {
		case 'corporate':
			headerClassName = ''
			contentClassName = 'lg:px-10'
			break
		case 'executive':
			headerClassName = 'max-w-screen-xl mx-auto px-6'
			contentClassName = 'max-w-screen-xl mx-auto'
			break
	}
	return { headerClassName, contentClassName }
}
