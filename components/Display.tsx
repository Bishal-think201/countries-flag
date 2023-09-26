import React from 'react';
import Image from 'next/image';
import styles from './display.module.css';
import Link from 'next/link';

const DisplaySection = ({ flags }: any) => {
	return (
		<div className={styles.container}>
			{flags.map((flag: any) => (
				<ul key={flag.name.common} className={styles.ulStyle}>
					<Link
						href={`/flags/${encodeURIComponent(flag.name.common)}`}
						className={styles.myLink}
					>
						<li className={styles.noPadding}>
							<Image
								className={styles.imgStyle}
								src={flag.flags.png}
								alt={flag.flags.alt ? flag.flags.alt : 'Flag Image'}
								width={150}
								height={250}
							/>
						</li>
						<li>
							<p className={styles.countryName}>{flag.name.common}</p>
						</li>
						<li>
							<p>
								<span>Polpulation:</span> {flag.population}
							</p>
						</li>
						<li>
							<p>
								<span>Region:</span> {flag.region}
							</p>
						</li>
						<li>
							<p>
								<span>Capital:</span> {flag.capital}
							</p>
						</li>
					</Link>
				</ul>
			))}
		</div>
	);
};

export default DisplaySection;
