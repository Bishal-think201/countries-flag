import Image from 'next/image';
import Link from 'next/link';
import styles from './flag.module.css';

const Flag = (props: any) => {
	const { flags } = props;
	return (
		<div className={styles.container}>
			{(flags || []).map((flag: any) => (
				<ul key={flag.name.common} className={styles.ulStyle}>
					<li>
						<Image
							src={flag.flags.png}
							alt={flag.flags.alt ? flag.flags.alt : 'Flag Image'}
							className={styles.imgStyle}
							width={600}
							height={300}
						/>
					</li>
					<li className={styles.flagName}>
						<p>{flag.name.common}</p>
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
							<span>Sub Region:</span> {flag.subregion}
						</p>
					</li>
					<li>
						<p>
							<span>Capital:</span> {flag.capital}
						</p>
					</li>
					<li>
						<p>
							<span>Area:</span> {flag.area}
						</p>
					</li>
					<li>
						<p>
							<span>Time Zone:</span> {flag.timezones}
						</p>
					</li>
					<li>
						<p>
							<span>Continents:</span> {flag.continents}
						</p>
					</li>
					<Link href={`/`} className={styles.btnBack}>
						Back
					</Link>
				</ul>
			))}
		</div>
	);
};

export default Flag;
