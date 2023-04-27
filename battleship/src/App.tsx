import { Provider } from "react-redux";

import "./App.css";
import type { Point } from "./utilities/cartesian-grid";
import { TileContainer } from "./components/Tile/Container";
import { globalStore } from "./state";
import { Tile } from "./components/Tile";

function App() {
  const ROWS = 10;
  const COLUMNS = 10;

  const grid = new CartesianGrid(ROWS, COLUMNS);

  const points = new Array(ROWS * COLUMNS).fill(null).map(() => grid.next);

  return (
    <Provider store={globalStore}>
      <TileContainer>
        {points.map((point) => (
          <Tile
            key={TileIdentifier.instance.next(point)}
            coordinate={point as Point}
          />
        ))}
      </TileContainer>
    </Provider>
  );
}

export default App;
