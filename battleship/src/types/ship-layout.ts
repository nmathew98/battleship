import type { Coordinate } from "../utilities/cartesian-grid";

export interface ShipLayout {
  shipTypes: {
    carrier: ShipLayoutType;
    battleship: ShipLayoutType;
    cruiser: ShipLayoutType;
    submarine: ShipLayoutType;
    destroyer: ShipLayoutType;
  };
  layout: ShipLayoutPosition[];
}

export type ShipTypes = keyof Pick<ShipLayout, "shipTypes">["shipTypes"];

export interface ShipLayoutType {
  size: number;
  count: number;
}

export interface ShipLayoutPosition {
  ship: ShipTypes;
  positions: Coordinate[];
}

export interface Position {
  coordinates: Coordinate;
  ship: ShipTypes;
  id: number;
}
