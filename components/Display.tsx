import React from 'react';
import Image from 'next/image';
import styles from './display.module.css';
import Link from 'next/link';

const DisplaySection = ({ flags }: any) => {
	return (
		<>
			<ul className={styles.flagList}>
				{flags.map((flag: any) => (
					<li key={flag.name.common} className={styles.flagItem}>
						<Link
							href={`/flags/${encodeURIComponent(flag.name.common)}`}
							className={styles.myLink}
						>
							<Image
								className={styles.flagImage}
								src={flag.flags.png}
								alt={flag.flags.alt ? flag.flags.alt : 'Flag Image'}
								width={150}
								height={250}
							/>
							<p className={styles.countryName}>{flag.name.common}</p>
							<p className={styles.flagDetail}>
								<span>Population:</span> {flag.population}
							</p>
							<p className={styles.flagDetail}>
								<span>Region:</span> {flag.region}
							</p>
							<p className={styles.flagDetail}>
								<span>Capital:</span> {flag.capital}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default DisplaySection;
