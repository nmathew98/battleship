import type { ReactNode } from "react";
import type { ShipTypes } from "../../../types/ship-layout";
import { Ship } from "../../Ship";

export const HitContainer = ({ ship, children }: HitContainerProps) => (
	<div className="grid grid-cols-2 items-center gap-x-2 md:mx-4 md:mt-4 md:gap-x-0">
		<Ship className="md:-ml-4 md:h-[3.86rem] md:w-auto" type={ship} />
		<div className="flex items-center md:my-2 md:space-x-6">{children}</div>
	</div>
);

interface HitContainerProps {
	ship: ShipTypes;
	children?: ReactNode;
}
