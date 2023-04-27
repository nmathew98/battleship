import { render } from "../../tests/spec";

import { Tile } from ".";

describe("<Tile />", () => {
  it("should show 'Not Hit!' when the tile is not hit", () => {
    render(<Tile id={1} coordinate={[0, 0]} />);
  });
});
