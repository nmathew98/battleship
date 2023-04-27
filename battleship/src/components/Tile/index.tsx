import type { MouseEventHandler } from "react";
import { useSelector } from "react-redux";

import type { Point } from "../../utilities/cartesian-grid";
import { makeSelectShip } from "../../state/hits";
import hitIcon from "../../assets/hit-144.png";
import hitIconSmall from "../../assets/hit-64.png";
import missIcon from "../../assets/miss-144.png";
import missIconSmall from "../../assets/miss-64.png";
import { makeSelectMissedHit } from "../../state/miss";

export const Tile = ({ coordinates, id, onClick }: TileProps) => {
  if (typeof id !== typeof 0) throw new Error("Tiles must have an identifier");

  const [x, y] = coordinates;
  const isHit = useSelector(makeSelectShip(id as number));
  const isMiss = useSelector(makeSelectMissedHit(id as number));

  return (
    <button
      data-testid={`tile-${id}`}
      onClick={onClick}
      className={joinClasses(
        !isHit && !isMiss,
        "aspect-square flex items-center relative cursor-default hover:shadow-sm",
        "border hover:border-emerald-500 cursor-pointer",
        x === 0 && y === 0 ? "border-t-2 border-l-2" : "",
        x === 9 && y === 9 ? "border-b-2 border-r-2" : ""
      )}
    >
      {!!isHit && (
        <picture>
          <source
            className="w-full h-auto"
            media="(min-width: 600px)"
            srcSet={hitIcon}
          />
          <img
            className="w-full h-auto border-[0.5px] border-black sm:border-0"
            src={hitIconSmall}
          />
        </picture>
      )}
      {!!isMiss && (
        <picture>
          <source
            className="w-full h-auto"
            media="(min-width: 600px)"
            srcSet={missIcon}
          />
          <img
            className="w-full h-auto border-[0.5px] border-black sm:border-0"
            src={missIconSmall}
          />
        </picture>
      )}
      {!!import.meta.env.DEV && (
        <>
          <span className="absolute bottom-0 right-0 text-emerald-500 text-xs">
            {JSON.stringify(coordinates)}
          </span>
        </>
      )}
    </button>
  );
};

export interface TileProps {
  coordinates: Point;
  id?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
