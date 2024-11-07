import { useContext } from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import { MediaManagerContext } from '../providers/MediaManagerProvider'
import { tabsMapper } from '../helpers/mappers/tabs.mapper'
import { MediaLibrary, FileUploader } from './'

export const TabContent = () => {
	const { tabsDisabled, selectedTab, setSelectedTab } =
		useContext(MediaManagerContext)

	return (
		<div className="h-full">
			<div className="text-gray-900 h-full flex flex-col dark:text-gray-100">
				<Tabs
					aria-label="Media manager"
					variant="light"
					color="primary"
					disabledKeys={tabsDisabled}
					defaultSelectedKey={selectedTab}
					selectedKey={selectedTab}
					onSelectionChange={(t) =>
						setSelectedTab && setSelectedTab(t.toString())
					}
					classNames={{
						base: 'bg-content2 w-full dark:bg-black/20',
						tabList: 'p-0 gap-0 rounded-none',
						tab: 'px-6 py-5 rounded-none',
						cursor: 'rounded-none',
						panel: 'p-0 flex flex-1',
					}}
				>
					{/* File uploader */}
					<Tab key={tabsMapper('TAB_UPLOAD')} title="Upload files">
						<FileUploader />
					</Tab>

					{/* Media library */}
					<Tab key={tabsMapper('TAB_LIBRARY')} title="Media library">
						<MediaLibrary />
					</Tab>
				</Tabs>
			</div>
		</div>
	)
}
