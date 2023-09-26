type Flags = {
	name: {
		common: String;
	};
	currencies: {
		USD: {
			name: String;
			symbol: String;
		};
	};
	capital: String;
	idd: {
		root: Number;
		suffixes: [Number];
	};
	region: String;
	population: String;
	flags: {
		png: string;
		svg: sting;
		alt: String;
	};
};
