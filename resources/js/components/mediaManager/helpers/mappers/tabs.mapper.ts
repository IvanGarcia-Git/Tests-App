/**
 * Maps a key to a media manager tab name.
 *
 * @param {string} key The key to map.
 *
 * @returns {string} The mapped tab name.
 */
export const tabsMapper = (key: string): string => {
	switch (key) {
		case 'TAB_UPLOAD':
			return 'uploadFiles'
		case 'TAB_LIBRARY':
			return 'mediaLibrary'
	}

	return key
}
