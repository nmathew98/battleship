import type { Coordinate } from "../cartesian-grid";

export const sortCoordinates = (a: Coordinate, b: Coordinate) => {
  if (a[0] === b[0]) return a[1] - b[1];

  return a[0] - b[0];
};
