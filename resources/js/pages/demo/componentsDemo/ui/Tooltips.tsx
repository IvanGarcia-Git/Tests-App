import { Button, Tooltip } from '@nextui-org/react'


export const BasicTooltip = () => {
	return (
		<div className="space-y-6" id="basicTooltip">
			<h3 className="font-semibold">Basic button</h3>
			<Button color="primary">Button</Button>

			<p className="text-xs">
				The solid button is a perfect blend of beauty, simplicity, and
				functionality. Its bold and consistent color makes it visually striking
				and easy to recognize, instantly drawing attention to the most important
				actions on the screen.
			</p>
		</div>
	)
}
