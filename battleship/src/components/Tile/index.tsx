import type { MouseEventHandler } from "react";
import { useSelector } from "react-redux";

import type { Point } from "../../utilities/cartesian-grid";
import { makeSelectHit } from "../../state/hits";
import hitIcon from "../../assets/hit-144.png";
import hitIconSmall from "../../assets/hit-64.png";
import missIcon from "../../assets/miss-144.png";
import missIconSmall from "../../assets/miss-64.png";
import { makeSelectMissedHit } from "../../state/miss";

export const Tile = ({ coordinates, id, onClick }: TileProps) => {
	const [x, y] = coordinates;
	const isHit = useSelector(makeSelectHit(id as number));
	const isMiss = useSelector(makeSelectMissedHit(id as number));

	return (
		<button
			data-testid={`tile-${id}`}
			onClick={onClick}
			className={joinClasses(
				!isHit && !isMiss,
				"relative flex aspect-square cursor-default items-center hover:shadow-sm",
				"cursor-pointer border bg-white transition hover:scale-105 hover:border-2 hover:border-amber-500 hover:shadow-sm active:scale-90 lg:hover:border-4",
				y === 0 ? "border-l-2" : "",
				x === 0 ? "border-t-2" : "",
				y === 9 ? "border-r-2" : "",
				x === 9 ? "border-b-2" : "",
			)}>
			<picture
				className={joinClasses(
					isHit,
					"absolute aspect-square bg-white opacity-0",
					"opacity-100",
				)}>
				<source
					className="h-auto w-full"
					media="(min-width: 600px)"
					srcSet={hitIcon}
				/>
				<img
					className="h-auto w-full border-[0.5px] border-black sm:border-0"
					src={hitIconSmall}
					alt="Hit"
				/>
			</picture>
			<picture
				className={joinClasses(
					isMiss,
					"absolute aspect-square bg-white opacity-0",
					"opacity-100",
				)}>
				<source
					className="h-auto w-full"
					media="(min-width: 600px)"
					srcSet={missIcon}
				/>
				<img
					className="h-auto w-full border-[0.5px] border-black sm:border-0"
					src={missIconSmall}
					alt="Miss"
				/>
			</picture>
			{!!import.meta.env.DEV && (
				<>
					<span className="absolute bottom-0 right-0 text-xs text-emerald-500">
						{JSON.stringify(coordinates)}
					</span>
				</>
			)}
		</button>
	);
};

export interface TileProps {
	coordinates: Point;
	id?: number;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
