"use client";
import React, { useState } from "react";
import Fuse from "fuse.js";

const DropDown = ({ flags }: any) => {
	const filteredFlags = flags.filter(
		(flag: any, index: number, self: any) =>
			self.findIndex((p: any) => p.region === flag.region) === index,
	);
	const [results, setResults] = useState(flags);
	const fuse = new Fuse(flags, {
		keys: ["name.common", "region"],
		threshold: 0.3,
	});

	return (
		<div>
			<select
				placeholder="Region"
				onChange={async (e) => {
					const { value } = e.currentTarget;
					const selectResult = fuse.search(value).map((result) => result.item);

					const updatedResults = selectResult.length ? selectResult : flags;
					setResults(updatedResults);
				}}
			>
				<option>Select By Region</option>
				{filteredFlags.map((flag: any) => (
					<option key={flag.name.common} value={flag.region}>
						{flag.region}
					</option>
				))}
			</select>
		</div>
	);
};

export default DropDown;
