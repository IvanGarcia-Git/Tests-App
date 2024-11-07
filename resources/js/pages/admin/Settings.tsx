import { useRef } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Tabs,
	Tab,
} from '@nextui-org/react'
import { Head } from '@inertiajs/react'

interface Props {
	settings: any
}

const SettingsPage = ({ settings }: Props) => {
	const general = useRef(Object.entries(settings.general))

	return (
		<>
			<Head title="Settings" />

			<section className=" mx-6 mt-10 md:max-w-2xl md:mx-auto lg:max-w-4xl">
				<Tabs aria-label="Options">
					<Tab key="general" title="General">
						<Table
							aria-label="General settings"
							radius="none"
							removeWrapper
							isStriped
						>
							<TableHeader>
								<TableColumn>Key</TableColumn>
								<TableColumn>Value</TableColumn>
							</TableHeader>
							<TableBody>
								{general.current.map((row: any) => (
									<TableRow key={row[0]}>
										<TableCell className="font-semibold capitalize">
											{row[0]}
										</TableCell>
										<TableCell>{row[1]}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Tab>

					<Tab key="other" title="Other"></Tab>
				</Tabs>

				{/* <pre>{JSON.stringify(general.current, null, 2)}</pre> */}
			</section>
		</>
	)
}

export default SettingsPage
