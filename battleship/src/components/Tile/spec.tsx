import { render, screen } from "../../tests/spec";
import { Tile } from ".";

describe("<Tile />", () => {
	it("should not show any images by default", () => {
		render(<Tile id={1} coordinates={[0, 0]} />);

		const hit = screen.getByAltText("Hit");
		const miss = screen.getByAltText("Miss");

		expect(
			hit.parentElement?.classList.contains("opacity-100"),
		).toBeFalsy();
		expect(
			miss.parentElement?.classList.contains("opacity-100"),
		).toBeFalsy();
	});
});
