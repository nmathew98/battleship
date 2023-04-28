import { useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { makeSelectHit } from "../../../state/hits";
import missIconSmall from "../../../assets/miss-64.png";

export const HitMarker = ({ id }: HitMarkerProps) => {
	const isHit = useSelector(makeSelectHit(id as number));

	return (
		<>
			{!!isHit && (
				<div className="h-auto w-5 md:w-10">
					<XMarkIcon
						className="h-auto w-4 text-red-500 md:w-10"
						aria-label="Hit"
					/>
				</div>
			)}
			{!isHit && (
				<img
					className="h-auto w-4 md:w-10"
					src={missIconSmall}
					alt="Not Hit"
				/>
			)}
		</>
	);
};

export interface HitMarkerProps {
	id: number;
}
