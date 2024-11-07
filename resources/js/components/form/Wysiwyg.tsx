import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import DragHandle from '@tiptap-pro/extension-drag-handle-react'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Placeholder from '@tiptap/extension-placeholder'
import { cn, Button, Divider } from '@nextui-org/react'
import { t } from '@/i18n'

interface Props {
	charactersLimit?: number
	code?: boolean
	blockquote?: boolean
	headings?: boolean
	separator?: boolean
	lists?: boolean
	colorSelector?: boolean
	minHeight?: number
	placeholder?: string
	initialContent?: string
}

export const Wysiwyg = ({
	charactersLimit,
	headings = true,
	separator,
	blockquote,
	code,
	lists,
	colorSelector,
	minHeight = 170,
	placeholder = '',
	initialContent = '',
}: Props) => {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				heading: { levels: [2, 3, 4] },
			}),
			CharacterCount.configure({
				limit: charactersLimit,
			}),
			Color,
			TextStyle,
			Placeholder.configure({ placeholder }),
		],
		content: initialContent,
	})

	if (!editor) return null

	const percentage =
		editor && charactersLimit
			? Math.round(
					(100 / charactersLimit) * editor.storage.characterCount.characters()
			  )
			: 0

	return (
		<div>
			<div className="bg-default-100 rounded-medium">
				<div className="px-3 py-2">
					<div className="flex h-10">
						<Button
							isIconOnly
							variant="light"
							onClick={() => editor.chain().focus().toggleBold().run()}
							color={editor.isActive('bold') ? 'primary' : 'default'}
						>
							<i className="ri-bold ri-lg" />
						</Button>

						<Button
							isIconOnly
							variant="light"
							onClick={() => editor.chain().focus().toggleItalic().run()}
							color={editor.isActive('italic') ? 'primary' : 'default'}
						>
							<i className="ri-italic ri-lg" />
						</Button>

						<Button
							isIconOnly
							variant="light"
							onClick={() => editor.chain().focus().toggleStrike().run()}
							color={editor.isActive('strike') ? 'primary' : 'default'}
						>
							<i className="ri-strikethrough ri-lg" />
						</Button>

						{headings && (
							<>
								<Button
									isIconOnly
									variant="light"
									onClick={() =>
										editor.chain().focus().toggleHeading({ level: 2 }).run()
									}
									color={
										editor.isActive('heading', { level: 2 })
											? 'primary'
											: 'default'
									}
								>
									<i className="ri-h-2 ri-lg" />
								</Button>

								<Button
									isIconOnly
									variant="light"
									onClick={() =>
										editor.chain().focus().toggleHeading({ level: 3 }).run()
									}
									color={
										editor.isActive('heading', { level: 3 })
											? 'primary'
											: 'default'
									}
								>
									<i className="ri-h-3 ri-lg" />
								</Button>

								<Button
									isIconOnly
									variant="light"
									onClick={() =>
										editor.chain().focus().toggleHeading({ level: 4 }).run()
									}
									color={
										editor.isActive('heading', { level: 4 })
											? 'primary'
											: 'default'
									}
								>
									<i className="ri-h-4 ri-lg" />
								</Button>
								{/* <Dropdown>
									<DropdownTrigger>
										<Button isIconOnly variant="light">
											<i className="ri-heading" />
										</Button>
									</DropdownTrigger>
									<DropdownMenu aria-label="Headings">
										<DropdownItem key="new">
											<i className="ri-h-2" />
										</DropdownItem>
									</DropdownMenu>
								</Dropdown> */}
							</>
						)}

						{blockquote && (
							<Button
								isIconOnly
								variant="light"
								onClick={() => editor.chain().focus().toggleBlockquote().run()}
								color={editor.isActive('blockquote') ? 'primary' : 'default'}
							>
								<i className="ri-double-quotes-l ri-lg" />
							</Button>
						)}

						{code && (
							<>
								<Divider orientation="vertical" />

								<Button
									isIconOnly
									variant="light"
									onClick={() => editor.chain().focus().toggleCode().run()}
									color={editor.isActive('code') ? 'primary' : 'default'}
								>
									<i className="ri-code-s-slash-line ri-lg" />
								</Button>

								<Button
									isIconOnly
									variant="light"
									onClick={() => editor.chain().focus().toggleCodeBlock().run()}
									color={editor.isActive('codeBlock') ? 'primary' : 'default'}
								>
									<i className="ri-code-box-line ri-lg" />
								</Button>
							</>
						)}

						{separator && (
							<>
								<Divider orientation="vertical" />

								<Button
									isIconOnly
									variant="light"
									onClick={() =>
										editor.chain().focus().setHorizontalRule().run()
									}
									color={
										editor.isActive('horizontalRule') ? 'primary' : 'default'
									}
								>
									<i className="ri-separator ri-lg" />
								</Button>
							</>
						)}

						{lists && (
							<>
								<Divider orientation="vertical" />

								<Button
									isIconOnly
									variant="light"
									onClick={() =>
										editor.chain().focus().toggleBulletList().run()
									}
									color={editor.isActive('bulletList') ? 'primary' : 'default'}
								>
									<i className="ri-list-unordered ri-lg" />
								</Button>

								<Button
									isIconOnly
									variant="light"
									onClick={() =>
										editor.chain().focus().toggleOrderedList().run()
									}
									color={editor.isActive('orderedList') ? 'primary' : 'default'}
								>
									<i className="ri-list-ordered ri-lg" />
								</Button>
							</>
						)}

						{colorSelector && (
							<>
								<Divider orientation="vertical" />

								<Button
									isIconOnly
									variant="light"
									onClick={() =>
										editor.chain().focus().setColor('#958DF1').run()
									}
									color={
										editor.isActive('textStyle', { color: '#958DF1' })
											? 'primary'
											: 'default'
									}
									data-testid="setPrimary"
								>
									<i className="bg-primary w-6 h-6 rounded-full block" />
								</Button>
							</>
						)}
					</div>
				</div>

				<DragHandle
					editor={editor}
					className={cn(
						'bg-default-400 text-default-foreground w-5 h-5 grid place-content-center rounded-md',
						'cursor-grab'
					)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-4"
					>
						<path d="M8.5 7C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4C7.67157 4 7 4.67157 7 5.5C7 6.32843 7.67157 7 8.5 7ZM8.5 13.5C9.32843 13.5 10 12.8284 10 12C10 11.1716 9.32843 10.5 8.5 10.5C7.67157 10.5 7 11.1716 7 12C7 12.8284 7.67157 13.5 8.5 13.5ZM10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17C9.32843 17 10 17.6716 10 18.5ZM15.5 7C16.3284 7 17 6.32843 17 5.5C17 4.67157 16.3284 4 15.5 4C14.6716 4 14 4.67157 14 5.5C14 6.32843 14.6716 7 15.5 7ZM17 12C17 12.8284 16.3284 13.5 15.5 13.5C14.6716 13.5 14 12.8284 14 12C14 11.1716 14.6716 10.5 15.5 10.5C16.3284 10.5 17 11.1716 17 12ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z"></path>
					</svg>
				</DragHandle>

				<EditorContent
					editor={editor}
					className="pt-0 pb-6 flex flex-col"
					style={{ minHeight: minHeight + 'px' }}
				/>
			</div>

			{charactersLimit && (
				<div className="px-3 py-2">
					<div
						className={cn(
							'flex items-center gap-2 justify-end',
							editor.storage.characterCount.characters() === charactersLimit
								? 'character-count--warning'
								: ''
						)}
					>
						<svg height="20" width="20" viewBox="0 0 20 20">
							<circle r="10" cx="10" cy="10" fill="#e9ecef" />
							<circle
								r="5"
								cx="10"
								cy="10"
								fill="transparent"
								stroke="currentColor"
								strokeWidth="10"
								strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
								transform="rotate(-90) translate(-20)"
							/>
							<circle r="6" cx="10" cy="10" fill="white" />
						</svg>

						<span className="text-xs font-medium">
							{editor.storage.characterCount.characters()} / {charactersLimit}{' '}
							{t('characters')} /{editor.storage.characterCount.words()}{' '}
							{t('words')}
						</span>
					</div>
				</div>
			)}
		</div>
	)
}
