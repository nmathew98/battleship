export const groupShipsForMobile = (
	grouped: ReturnType<typeof groupByPosition>,
) => ({
	carrier: grouped.carrier,
	submarine: grouped.submarine,
	battleship: grouped.battleship,
	destroyer: grouped.destroyer,
	cruiser: grouped.cruiser,
});
