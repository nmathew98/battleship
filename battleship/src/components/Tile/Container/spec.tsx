import { fireEvent, render, screen } from "../../../tests/spec";

import { TileContainer } from ".";
import { Tile } from "..";

describe("<TileContainer />", () => {
  it("should inject event handlers for its children", () => {
    render(
      <TileContainer>
        <Tile coordinate={[0, 0]} />
      </TileContainer>
    );

    const tile = screen.getByTestId("1");

    fireEvent.click(tile);

    const hitTile = screen.getByText("Hit!");

    expect(hitTile).toBeTruthy();
  });
});
