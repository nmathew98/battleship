import type { ReactElement, ReactNode } from "react";
import { Children, cloneElement } from "react";
import { useDispatch } from "react-redux";

import type { TileProps } from "../index";
import { hit } from "../../../state/hits";

export const TileContainer = ({ children }: TileContainerProps) => {
  const dispatch = useDispatch();

  return (
    <div>
      {Children.map<ReactNode, ReactNode>(children, (child) => {
        if (!child || typeof (child as ReactElement).type === "string")
          return child;

        const props = (child as ReactElement).props as TileProps;
        const tileId = TileIdentifier.instance.next(props.coordinate);
        const onClick = () => dispatch(hit(tileId));

        return cloneElement(child as ReactElement, {
          ...props,
          id: tileId,
          onClick,
        });
      })}
    </div>
  );
};

interface TileContainerProps {
  children?: ReactNode;
}
