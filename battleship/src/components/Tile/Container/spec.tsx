import { fireEvent, render, screen } from "../../../tests/spec";
import { TileContainer } from ".";
import { Tile } from "..";

describe("<TileContainer />", () => {
  it("should assign an id and event handlers to its children", () => {
    render(
      <TileContainer
        shipPositions={[{ coordinates: [0, 0], ship: "cruiser", id: 1 }]}
      >
        <Tile coordinates={[0, 0]} />
      </TileContainer>
    );

    const tile = screen.getByTestId("tile-1");

    fireEvent.click(tile);

    const hitTile = screen.getByAltText("Hit");

    expect(hitTile).toBeTruthy();
  });
});
