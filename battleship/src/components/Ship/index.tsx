import type { ShipTypes } from "../../types/ship-layout";
import destroyer from "../../assets/destroyer.png";
import battleship from "../../assets/battleship.png";
import carrier from "../../assets/carrier.png";
import cruiser from "../../assets/cruiser.png";
import submarine from "../../assets/submarine.png";

export const Ship = ({ type, ...rest }: ShipProps) => (
	<img src={SHIP_TYPES[type]} alt={transformAltText(type)} {...rest} />
);

interface ShipProps {
	type: ShipTypes;
}

const SHIP_TYPES: { [key in ShipTypes]: string } = {
	destroyer: carrier,
	battleship: battleship,
	carrier: destroyer,
	cruiser: cruiser,
	submarine: submarine,
};

const transformAltText = (type: ShipTypes) =>
	`${type.charAt(0).toUpperCase()}${type.slice(1)}`;
