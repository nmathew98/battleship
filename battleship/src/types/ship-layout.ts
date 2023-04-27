import type { Coordinate } from "../utilities/cartesian-grid";

export interface ShipLayout {
  shipTypes: {
    carrier: ShipLayoutType;
    battleship: ShipLayoutType;
    cruiser: ShipLayoutType;
    submarine: ShipLayoutType;
    destroyer: ShipLayoutType;
  };
  layout: ShipLayoutPosition<ShipTypes<ShipLayout>>[];
}

export type ShipTypes<T extends ShipLayout> = keyof Pick<
  T,
  "shipTypes"
>["shipTypes"];

export interface ShipLayoutType {
  size: number;
  count: number;
}

export interface ShipLayoutPosition<T> {
  ship: T;
  positions: Coordinate[];
}

export interface Position {
  coordinates: Coordinate;
  ship: ShipTypes<ShipLayout>;
  id: number;
}
