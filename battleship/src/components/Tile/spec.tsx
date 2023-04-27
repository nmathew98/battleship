import { render, screen } from "../../tests/spec";
import { Tile } from ".";

describe("<Tile />", () => {
  it("should not render any images by default", () => {
    render(<Tile id={1} coordinates={[0, 0]} />);

    expect(() => screen.getByAltText("Hit")).toThrow();
    expect(() => screen.getByAltText("Miss")).toThrow();
  });
});
