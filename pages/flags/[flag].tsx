import Flag from '@/components/Flag';
import axios from 'axios';

export default function FlagData(props: Flags) {
	return (
		<>
			<Flag flags={props.flags} />
		</>
	);
}
export const getStaticProps = async (context: any) => {
	const { params } = context;
	const flagId = params.flag;
	const result = await axios.get(
		`https://restcountries.com/v3.1/name/${flagId}`,
	);
	return {
		props: {
			flags: result.data,
		},
	};
};

export const getStaticPaths = async () => {
	const result = await axios.get(`https://restcountries.com/v3.1/all`);
	const flags = result.data;
	const paths = flags.map((flag: any) => ({
		params: { flag: flag.name.common },
	}));
	return {
		paths,
		fallback: true,
	};
};
