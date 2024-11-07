import { useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { t } from '@/i18n'
import { MediaManagerContext } from '../providers/MediaManagerProvider'
import numeral from 'numeral'

import type { Image } from '../types.d'

// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		// Add the CSRF token to the request headers
		config.headers['X-CSRF-TOKEN'] = document
			.querySelector('meta[name="csrf-token"]')
			?.getAttribute('content')

		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

export const useMediaManager = () => {
	const {
		setFiles,
		setFilesTotal,
		filesSelected,
		setFilesSelected,
		selectMultiple,
	} = useContext(MediaManagerContext)

	/**
	 * Fetches the list of media files from the server and updates the state.
	 * If the request fails, an error toast is displayed.
	 *
	 * @returns {Promise<void>} A promise that resolves when the files have been fetched and state updated.
	 *
	 *
	 *
	 */
	const getFiles = async (): Promise<void> => {
		const { data, status } = await axios.get(route('media.list'))
		if (200 !== status) {
			toast.error(t('Error fetching files'))
			return
		}

		setFiles && setFiles(Object.entries(data.images).map((e) => e[1]))
		setFilesTotal && setFilesTotal(data.imagesTotal)

		/**
		if (selectMultiple && filesSelected) {
			const compare = [] as number[]
			filesSelected.forEach((file) => {
				const key = Object.keys(data.images).find(
					(k) => data.images[k].id === file.id
				)

				if (key) compare.push(parseInt(key))
			})

			setFilesSelected &&
				setFilesSelected([
					...data.images.filter((e: Image) => compare.includes(e.id)),
				])
		}
		 */
	}

	/**
	 * Deletes a media file from the server and updates the state.
	 *
	 * @param {string} uuid - The UUID of the media file to delete.
	 *
	 * @returns {Promise<void>} A promise that resolves when the file has been deleted and state updated.
	 *
	 *
	 *
	 */
	const deleteFile = async (id: number) => {
		const confirmationResult = window.confirm(
			t(
				"You are about to permanently delete this file.\nThis action cannot be undone.\nPress 'Cancel' to stop, 'OK' to delete."
			) as string
		)

		if (confirmationResult) {
			const { data, status } = await axios.delete(route('media.delete', { id }))

			if (200 !== status) {
				toast.error(t('Error fetching files'))
				return
			}

			toast.success(t(data.message))
			setFilesSelected && setFilesSelected([])
			getFiles()
		}
	}

	/**
	 * Update a media file on the server and updates the state.
	 *
	 * @param file
	 * @returns
	 *
	 *
	 *
	 */
	const updateFile = async (file: Image) => {
		const { data, status } = await axios.patch(
			route('media.update', { id: file.id }),
			file
		)

		if (200 !== status) {
			toast.error(t('Error updating file'))
			return
		}

		toast.success(t(data.message))
		getFiles()
	}

	/**
	 * Converts a size in bytes to a human-readable string with appropriate units.
	 *
	 * @param size - The size in bytes to be converted.
	 * @returns {string} A string representing the size in a human-readable format with appropriate units.
	 *
	 *
	 *
	 */
	const formatSize = (size: number): string => {
		const units = ['B', 'KB', 'MB', 'GB', 'TB']
		let value = size
		let index = 0

		while (value >= 1024 && index < units.length - 1) {
			value /= 1024
			index++
		}

		return numeral(value).format('0,0') + units[index]
	}

	return {
		getFiles,
		updateFile,
		deleteFile,
		formatSize,
	}
}
