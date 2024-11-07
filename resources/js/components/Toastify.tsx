import { ToastContainer, Slide } from 'react-toastify'

type Props = { colorMode: string }

export const Toastify = ({ colorMode }: Props): JSX.Element => {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={4000}
			hideProgressBar={false}
			newestOnTop={true}
			closeOnClick
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme={colorMode}
			transition={Slide}
		/>
	)
}
