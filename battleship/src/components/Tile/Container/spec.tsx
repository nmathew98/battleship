import { fireEvent, render, screen } from "../../../tests/spec";
import { TileContainer } from ".";
import { Tile } from "..";
import { Position } from "../../../types/ship-layout";

describe("<TileContainer />", () => {
	it("should assign an id and event handlers to its children", () => {
		const HIT_PICTURE_IDX = 0;
		const MISS_PICTURE_IDX = 1;

		const shipPositions = [
			{
				coordinates: [0, 0],
				id: 1,
				ship: "cruiser",
			},
		] as Position[];

		render(
			<TileContainer shipPositions={shipPositions}>
				<Tile coordinates={[0, 0]} />
				<Tile coordinates={[0, 1]} />
			</TileContainer>,
		);

		const tileOne = screen.getByTestId("tile-1");
		const tileTwo = screen.getByTestId("tile-2");

		fireEvent.click(tileOne);
		fireEvent.click(tileTwo);

		const hitTile = screen.getByTestId("tile-1");
		const missTile = screen.getByTestId("tile-2");

		expect(
			hitTile.children[HIT_PICTURE_IDX].classList.contains("opacity-100"),
		).toBeTruthy();
		expect(
			missTile.children[MISS_PICTURE_IDX].classList.contains(
				"opacity-100",
			),
		).toBeTruthy();

		expect(
			hitTile.children[MISS_PICTURE_IDX].classList.contains(
				"opacity-100",
			),
		).toBeFalsy();
		expect(
			missTile.children[HIT_PICTURE_IDX].classList.contains(
				"opacity-100",
			),
		).toBeFalsy();
	});
});
