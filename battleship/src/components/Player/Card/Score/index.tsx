import { useSelector } from "react-redux";

import { selectAllHits } from "../../../../state/hits";

export const PlayerCardScore = ({ type }: PlayerCardScoreProps) => {
	const selector = selectors[type];
	const hits = useSelector(selector);

	return (
		<span className="text-center text-3xl font-bold text-[#4a4a4a] md:text-8xl">
			{formatScore(Object.keys(hits).length)}
		</span>
	);
};

export interface PlayerCardScoreProps {
	type: "local" | "external";
}

const formatScore = (score: number) => (score < 10 ? `0${score}` : `${score}`);
const selectors = {
	local: selectAllHits,
	external: () => ({}),
};
