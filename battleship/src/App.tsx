import { Provider } from "react-redux";

import "./App.css";
import type { Point } from "./utilities/cartesian-grid";
import { TileContainer } from "./components/Tile/Container";
import { globalStore } from "./state";
import { Tile } from "./components/Tile";
import { HitContainer } from "./components/Hit/Container";
import { HitMarker } from "./components/Hit/Marker";

function App() {
  const ROWS = 10;
  const COLUMNS = 10;

  const grid = new CartesianGrid(ROWS, COLUMNS);

  const points = new Array(ROWS * COLUMNS).fill(null).map(() => grid.next);
  const positions = getShipPositions(SHIP_LAYOUT);

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
      <HitContainer>
        {positions.map((position) => (
          <HitMarker key={position.id} id={position.id} />
        ))}
      </HitContainer>
    </Provider>
  );
}

export default App;
