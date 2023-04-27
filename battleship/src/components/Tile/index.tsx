import type { MouseEventHandler } from "react";
import { useSelector } from "react-redux";

import type { Point } from "../../utilities/cartesian-grid";
import { makeSelectShip } from "../../state/hits";

export const Tile = ({ id, onClick }: TileProps) => {
  if (typeof id !== typeof 0) throw new Error("Tiles must have an identifier");

  const isHit = useSelector(makeSelectShip(id as number));

  return (
    <button onClick={onClick}>
      {isHit ? <span>Hit!</span> : <span>Not Hit!</span>}
    </button>
  );
};

export interface TileProps {
  coordinate: Point;
  id?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
