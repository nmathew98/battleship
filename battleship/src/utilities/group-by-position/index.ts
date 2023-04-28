import type { Position, ShipTypes } from "../../types/ship-layout";

export const groupByPosition = (
	grouped: Record<ShipTypes, Position[]>,
	position: Position,
) => ({
	...grouped,
	[position.ship]: [...(grouped[position.ship] ?? []), position],
});
