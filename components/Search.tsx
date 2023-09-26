import React, { useState } from 'react';
import Display from './Display';
import styles from './search.module.css';

const Search = ({ flags }: any) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedRegion, setSelectedRegion] = useState('Filter By Region');

	const filteredFlags = flags.filter((flag: any) => {
		const regionFilter =
			selectedRegion === 'Filter By Region' || flag.region === selectedRegion;
		const searchFilter =
			searchTerm === '' ||
			flag.name.common.toLowerCase().includes(searchTerm.toLowerCase());
		return regionFilter && searchFilter;
	});

	const uniqueRegions = [
		...Array.from(new Set(flags.map((flag: any) => flag.region))),
	].sort();

	const handleDropdownChange = (e: any) => {
		const selectedRegion = e.target.value;
		setSelectedRegion(selectedRegion);
	};

	return (
		<div className={styles.container}>
			<div className={styles.searchContainer}>
				<input
					type="text"
					placeholder="Search Here"
					className={styles.searchbar}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<select
					className={styles.dropDown}
					onChange={handleDropdownChange}
					value={selectedRegion}
				>
					<option>Filter By Region</option>
					{uniqueRegions.map((region: any) => (
						<option key={region} value={region}>
							{region}
						</option>
					))}
				</select>
			</div>

			<Display flags={filteredFlags} />
		</div>
	);
};

export default Search;
