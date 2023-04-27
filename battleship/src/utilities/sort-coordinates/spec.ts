import type { Coordinate } from "../cartesian-grid";
import { sortCoordinates } from ".";

describe("sortCoordinates", () => {
  it("sorts coordinates by `x` values then `y` values", () => {
    const unsortedCoordinates = [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1],
      [0, 1],
      [2, 1],
    ] as Coordinate[];
    const sortedCoordinates = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 0],
      [2, 1],
    ] as Coordinate[];

    expect(unsortedCoordinates.sort(sortCoordinates)).toEqual(
      sortedCoordinates
    );
  });
});
