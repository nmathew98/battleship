import type { ReactNode } from "react";
import type { ShipTypes } from "../../../types/ship-layout";
import { Ship } from "../../Ship";

export const HitContainer = ({ ship, children }: HitContainerProps) => (
	<div className="grid grid-cols-2 items-center gap-x-2">
		<Ship type={ship} />
		<div className="my-4 flex items-center space-x-4 md:my-12 md:space-x-6">
			{children}
		</div>
	</div>
);

interface HitContainerProps {
	ship: ShipTypes;
	children?: ReactNode;
}
