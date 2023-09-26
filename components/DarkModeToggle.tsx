import { useEffect, useState } from 'react';
import styles from './DarkModeToggle.module.css';
import Image from 'next/image';

const DarkModeToggle = () => {
	const isLocalStorageAvailable =
		typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

	const localStorageDarkMode = isLocalStorageAvailable
		? window.localStorage.getItem('darkMode')
		: null;
	const initialDarkMode = localStorageDarkMode === 'enabled' || false;
	const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

	const toggleDarkMode = () => {
		const newMode = !isDarkMode;
		setIsDarkMode(newMode);

		if (isLocalStorageAvailable) {
			window.localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled');
		}
	};

	useEffect(() => {
		if (isLocalStorageAvailable) {
			document.body.classList.toggle('dark-mode', isDarkMode);
		}
	}, [isDarkMode, isLocalStorageAvailable]);

	return (
		<>
			<button
				onClick={toggleDarkMode}
				className={'darkButton ' + styles.btnStyle}
			>
				{isDarkMode ? (
					<Image
						className={styles.moon + ' ' + styles.marginRight}
						src={'/images/sun.png'}
						alt="Light Mode"
						width={16}
						height={16}
					/>
				) : (
					<Image
						className={styles.marginRight}
						src={'/images/moon.png'}
						alt="Light Mode"
						width={16}
						height={16}
					/>
				)}
				{isDarkMode ? 'Light Mode' : 'Dark Mode'}
			</button>
		</>
	);
};

export default DarkModeToggle;
