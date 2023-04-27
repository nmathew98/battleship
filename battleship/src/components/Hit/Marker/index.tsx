import { useSelector } from "react-redux";

import { makeSelectShip } from "../../../state/hits";

export const HitMarker = ({ id }: HitMarkerProps) => {
  if (typeof id !== typeof 0)
    throw new Error("HitMarker must have an identifier");

  const isHit = useSelector(makeSelectShip(id as number));

  if (!isHit) return <span>Not Hit!</span>;

  return (
    <span data-testid={`hit-marker-${id}`}>{isHit ? "Hit" : "Not Hit!"}</span>
  );
};

export interface HitMarkerProps {
  id: number;
}
