type Translations = {
	en: { [index: string]: string }
	es: { [index: string]: string }
	[key: string]: { [index: string]: string }
}

/**
 * SET LOCALE: 'en' or 'es'
 */
const locale: string = 'en'

// Write your own translations
const translations: Translations = {
	en: {
		Welcome: 'Welcome',
		'Log in': 'Log in',
		'Log out': 'Log out',
		Register: 'Register',
		Password: 'Password',
		'Remember me': 'Remember me',
		'Forgot your password?': 'Forgot your password?',
		'forgot-password-message': `No problem.
			Just let us know your email address and we will email you a 
			password reset link that will allow you to choose a new one.`,
		"Don't have an Account?": "Don't have an Account?",
		Name: 'Name',
		Lastname: 'Lastname',
		Username: 'Username',
		'Confirm password': 'Confirm password',
		'confirm-password-message':
			'Please confirm your password before continuing.',
		Confirm: 'Confirm',
		'Register me': 'Register me',
		'Already registered?': 'Already registered?',
		'Reset password': 'Reset password',
		'Verify email': 'Verify email',
		'Email Verification': 'Email Verification',
		'email-verification-message-0': `Thanks for signing up!`,
		'email-verification-message-1': `Before getting started, could you verify your email address by clicking on the link we just emailed to you?`,
		'email-verification-message-2': `If you didn't receive the email, we will gladly send you another.`,
		'Resend Verification Email': 'Resend Verification Email',
		'Email password reset link': 'Email password reset link',
		Dashboard: 'Dashboard',
		'My account': 'My account',
		'Profile information': 'Profile information',
		'profile-information-intro': `Update your account's profile information and email address.`,
		Account: 'Account',
		'Delete account': 'Delete account',
		Save: 'Save',
		'Your email address is unverified': 'Your email address is unverified.',
		'email-verify-link': 'Click here to re-send the verification email.',
		'verification-link-sent': `A new verification link has been sent to your email address.`,
		'verification-link-sent-notice': `A new verification link has been sent to your email address.`,
		'Update Password': 'Update Password',
		'Current Password': 'Current Password',
		'New Password': 'New Password',
		'password-updated-message': 'The password has been updated.',
		'delete-account-confirmation-title':
			'Are you sure you want to delete your account?',
		'delete-account-confirmation-message': `Once your account is deleted, all of its 
			resources and data will be permanently deleted. Before deleting your account,
			please download any data or information that you wish to retain.`,
		'update-password-description':
			'Ensure your account is using a long, random password to stay secure.',
		'Back to log in page': 'Back to log in page',
		Cancel: 'Cancel',
		Delete: 'Delete',
		loading: 'loading',
		'503: Service Unavailable': '503: Service Unavailable',
		'500: Server Error': '500: Server Error',
		'404: Page Not Found': '404: Page Not Found',
		'403: Forbidden': '403: Forbidden',
		'Sorry, we are doing some maintenance. Please check back soon.':
			'Sorry, we are doing some maintenance. Please check back soon.',
		'Sorry, something went wrong on our servers.':
			'Sorry, something went wrong on our servers.',
		'Sorry, the page you are looking for could not be found.':
			'Sorry, the page you are looking for could not be found.',
		'Sorry, you are forbidden from accessing this page.':
			'Sorry, you are forbidden from accessing this page.',
		'This page you are looking for does not exsist':
			'This page you are looking for does not exsist %link%',
		'Report this?': 'Report this?',
		'Showing % of': 'Showing %count% of',
		'Total users: %': 'Total users: %total%',
		'Enter dashboard': 'Enter dashboard',
		'Basic information': 'Basic information',
		Security: 'Security',
		'The password must be at least 8 characters long':
			'The password must be at least 8 characters long',
		'Confirm Password': 'Confirm Password',
		'Personal information': 'Personal information',
		Phone: 'Phone',
		'Birth date': 'Birth date',
		Address: 'Address',
		City: 'City',
		Country: 'Country',
		Zip: 'Zip',
		'Professional information': 'Professional information',
		'Job title': 'Job title',
		Company: 'Company',
		Biography: 'Biography',
	},
	es: {
		Welcome: 'Bienvenido',
		'Log in': 'Entrar',
		'Log out': 'Salir',
		Register: 'Registrarse',
		Password: 'Contraseña',
		'Remember me': 'Recordarme',
		'Forgot your password?': '¿Olvidaste tu contraseña?',
		'forgot-password-message': `No te preocupes.
			Escribe el email de tu cuenta. Recibirás un correo con un link 
			para cambiar tu contraseña.`,
		"Don't have an Account?": '¿Aún no tienes una cuenta?',
		Name: 'Nombre',
		Lastname: 'Apellidos',
		Username: 'Nombre de usuario',
		'Confirm password': 'Confirma la contraseña',
		'confirm-password-message':
			'Por favor confirma tu contraseña antes de continuar.',
		Confirm: 'Confirmar',
		'Register me': 'Registrarme',
		'Already registered?': '¿Ya tienes una cuenta?',
		'Reset password': 'Reiniciar contraseña',
		'Verify email': 'Verificar email',
		'Email Verification': 'Verificación de email',
		'email-verification-message-0': `Gracias por registrarte.`,
		'email-verification-message-1': `Antes de continuar debes verificar tu dirección de email.`,
		'email-verification-message-2': `Si no recibiste el correo de verificación, por 
			favor haz click en el botón abajo y te enviaremos un nuevo link.`,
		'Resend Verification Email': 'Reenviar link de verificación',
		'Email password reset link': 'Enviar link para reiniciar contraseña',
		Dashboard: 'Dashboard',
		'My account': 'Mi cuenta',
		'Profile information': 'Información de perfil',
		'profile-information-intro': `Actualiza los datos de tu cuenta y Email.`,
		Account: 'Mi cuenta',
		'Delete account': 'Eliminar cuenta',
		Save: 'Guardar',
		'Your email address is unverified': 'Necesitas confirmar tu email.',
		'email-verify-link':
			'Haz click aquí para enviar el correo de verificación.',
		'verification-link-sent': `Te hemos enviado un nuevo link de verificación a tu 
			dirección de correo.`,
		'verification-link-sent-notice': `Te hemos enviado un nuevo link de verificación a tu 
			dirección de correo.`,
		'Update Password': 'Actualizar contraseña',
		'Current Password': 'Contraseña actual',
		'New Password': 'Nueva contraseña',
		'password-updated-message': 'La contraseña ha sido actualizada.',
		'delete-account-confirmation-title':
			'¿Estás seguro de querer eliminar tu cuenta?',
		'delete-account-confirmation-message': `Una vez que tu cuenta haya sido borrada 
			todos los recursos y datos asociados serán eliminados permanentemente. 
			Antes de borrar tu cuenta, asegúrate de copiar o descargar toda la información 
			que quieras mantener.`,
		'update-password-description':
			'Asegúrate de que tu cuenta utiliza una contraseña larga y aleatoria para mantener la seguridad.',
		'Back to log in page': 'Volver al incio de sesión',
		Cancel: 'Cancelar',
		Delete: 'Borrar',
		loading: 'cargando',
		'503: Service Unavailable': '503: Servicio no disponible',
		'500: Server Error': '500: Error del servidor',
		'404: Page Not Found': '404: Página no encontrada',
		'403: Forbidden': '403: Prohibido',
		'Sorry, we are doing some maintenance. Please check back soon.':
			'Lo sentimos, estamos realizando mantenimiento. Por favor, vuelve a intentarlo más tarde.',
		'Sorry, something went wrong on our servers.':
			'Lo sentimos, algo salió mal en nuestros servidores.',
		'Sorry, the page you are looking for could not be found.':
			'Lo sentimos, no se pudo encontrar la página que buscas.',
		'Sorry, you are forbidden from accessing this page.':
			'Lo sentimos, no tienes permiso para acceder a esta página.',
		'This page you are looking for does not exsist':
			'La página que estás buscando no existe %link%',
		'Report this?': '¿Quieres reportarlo?',
		'Showing % of': 'Mostrando %count% de',
		'Total users: %': 'Total de usuarios: %total%',
		'Enter dashboard': 'Entrar al dashboard',
		'Basic information': 'Información básica',
		Security: 'Seguridad',
		'The password must be at least 8 characters long':
			'La contraseña debe tener al menos 8 caracteres',
		'Confirm Password': 'Confirmar contraseña',
		'Personal information': 'Información personal',
		Phone: 'Teléfono',
		'Birth date': 'Fecha de nacimiento',
		Address: 'Dirección',
		City: 'Ciudad',
		Country: 'País',
		Zip: 'Código postal',
		'Professional information': 'Información profesional',
		'Job title': 'Título',
		Company: 'Compañia',
		Biography: 'Biografía',
	},
}

/**
 * Function t() allows you to tranlate strings
 * from the translations object at i18n/translations.ts
 * @param str
 * @returns
 */
type Params = {
	[key: string]: string | React.ReactNode
}

export const t = (str: string, params: Params = {}): string | JSX.Element => {
	if (!str) return ''

	// const locale = 'en'
	const translation = translations[locale ?? 'en'][str]

	if (typeof translation === 'string' && params) {
		// @ts-ignore
		return Object.keys(params).reduce((acc, key) => {
			const value = params[key]
			if (typeof value === 'string') {
				return acc.replace(new RegExp(`%${key}%`, 'g'), value)
			} else {
				return acc
					.split(new RegExp(`%${key}%`, 'g'))
					.flatMap((item, i, arr) =>
						i < arr.length - 1 ? [item, value] : item
					)
			}
		}, translation)
	}

	return translation ?? str
}
