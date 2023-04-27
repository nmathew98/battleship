import { Provider } from "react-redux";

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-rows-2 md:grid-rows-0 md:grid-cols-2 my-12">
          <div className="max-w-md">
            <HitContainer>
              {positions.map((position) => (
                <HitMarker key={position.id} id={position.id} />
              ))}
            </HitContainer>
          </div>

          <div className="w-full">
            <TileContainer shipPositions={positions}>
              {points.map((point) => (
                <Tile
                  key={TileIdentifier.instance.next(point)}
                  coordinates={point as Point}
                />
              ))}
            </TileContainer>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
