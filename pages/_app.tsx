import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import styles from '../styles/main.module.css';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<nav className={styles['nav-container']}>
				<h1>Where in the World?</h1>
				<DarkModeToggle />
			</nav>
			<Component {...pageProps} />
		</>
	);
}
