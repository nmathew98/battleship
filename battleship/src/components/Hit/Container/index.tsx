import type { ReactNode } from "react";
import type { ShipTypes } from "../../../types/ship-layout";
import { Ship } from "../../Ship";

export const HitContainer = ({ ship, children }: HitContainerProps) => (
	<div className="grid grid-cols-2 items-center gap-x-2 lg:mx-4 lg:mt-4 lg:gap-x-0">
		<Ship
			className="w-auto md:h-[1.4rem] lg:-ml-4 lg:h-[3.86rem]"
			type={ship}
		/>
		<div className="space-between flex items-center lg:my-2">
			{children}
		</div>
	</div>
);

interface HitContainerProps {
	ship: ShipTypes;
	children?: ReactNode;
}
