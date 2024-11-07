import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicInput,
	ClassicInput,
	InputSizes,
	InputRounded,
	InputRequired,
	InputValidationStyles,
	InputWithAccessories,
	HorizontalInput,
	PasswordInput,
	InputTypes,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const InputPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Input')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Elegant input fields that prioritize clarity and user interaction.
				</p>
				<p className="text-sm mt-2">
					Each input field is designed for intuitive use, ensuring quick and
					accurate data entry. These fields balance aesthetics and
					functionality, offering a smooth and efficient user experience.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicInput', label: 'Basic input' },
								{ key: 'classicInput', label: 'Classic style' },
								{ key: 'inputSizes', label: 'Sizing' },
								{ key: 'inputRounded', label: 'Border radius' },
								{ key: 'inputRequired', label: 'Required' },
								{ key: 'validationStyles', label: 'Validation styles' },
								{ key: 'inputWithAccessories', label: 'Accessories' },
								{ key: 'horizontalInput', label: 'Horizontal input' },
								{ key: 'passwordInput', label: 'Password input' },
								{ key: 'inputTypes', label: 'Input types' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicInput />
					<ClassicInput />
					<InputSizes />
					<InputRounded />
					<InputRequired />
					<InputValidationStyles />
					<InputWithAccessories />
					<HorizontalInput />
					<PasswordInput />
					<InputTypes />
				</div>
			</PageContent>
		</>
	)
}
