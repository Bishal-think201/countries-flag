import Image from 'next/image';
import Link from 'next/link';
import styles from './flag.module.css';

const Flag = (props: any) => {
	const { flags } = props;

	return (
		<div className={styles.container}>
			<ul className={styles.ulStyle}>
				{flags?.map((flag: any, index: number) => (
					<li key={index}>
						<Image
							src={flag.flags.png}
							alt={flag.flags.alt ? flag.flags.alt : 'Flag Image'}
							className={styles.imgStyle}
							width={600}
							height={300}
						/>
						<p className={styles.flagName}>{flag.name.common}</p>
						<p>
							<span>Population:</span> {flag.population}
						</p>
						<p>
							<span>Region:</span> {flag.region}
						</p>
						<p>
							<span>Sub Region:</span> {flag.subregion}
						</p>
						<p>
							<span>Capital:</span> {flag.capital}
						</p>
						<p>
							<span>Area:</span> {flag.area}
						</p>
						<p>
							<span>Time Zone:</span> {flag.timezones}
						</p>
						<p>
							<span>Continents:</span> {flag.continents}
						</p>
						<Link href={`/`} className={styles.btnBack}>
							Back
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Flag;
