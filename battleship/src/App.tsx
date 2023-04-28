import { Provider } from "react-redux";
import { Fragment } from "react";

import type { Point } from "./utilities/cartesian-grid";
import type { ShipTypes } from "./types/ship-layout";
import { TileContainer } from "./components/Tile/Container";
import { globalStore } from "./state";
import { Tile } from "./components/Tile";
import { HitContainer } from "./components/Hit/Container";
import { HitMarker } from "./components/Hit/Marker";
import { LayoutMd } from "./layouts/Md";
import { Layout } from "./layouts";
import {
	DEFAULT_BREAKPOINTS,
	useScreenBreakpoint,
} from "./hooks/useScreenBreakpoint";

const ROWS = 10;
const COLUMNS = 10;

const grid = new CartesianGrid(ROWS, COLUMNS);

const points = new Array(ROWS * COLUMNS).fill(null).map(() => grid.next);
const positions = getShipPositions(SHIP_LAYOUT);
const groupedPositions = positions.reduce(groupByPosition, Object.create(null));

const ViewDesktop = () => (
	<LayoutMd>
		<Fragment>
			{Object.entries(groupedPositions).map(([ship, positions]) => (
				<HitContainer key={ship} ship={ship as ShipTypes}>
					{positions.map(position => (
						<HitMarker key={position.id} id={position.id} />
					))}
				</HitContainer>
			))}
		</Fragment>
		<Fragment>
			<TileContainer shipPositions={positions}>
				{points.map(point => (
					<Tile
						key={TileIdentifier.instance.next(point)}
						coordinates={point as Point}
					/>
				))}
			</TileContainer>
		</Fragment>
	</LayoutMd>
);

const ViewMobile = () => (
	<Layout>
		<Fragment>
			{Object.entries(groupedPositions).map(([ship, positions]) => (
				<HitContainer key={ship} ship={ship as ShipTypes}>
					{positions.map(position => (
						<HitMarker key={position.id} id={position.id} />
					))}
				</HitContainer>
			))}
		</Fragment>
		<Fragment>
			<TileContainer shipPositions={positions}>
				{points.map(point => (
					<Tile
						key={TileIdentifier.instance.next(point)}
						coordinates={point as Point}
					/>
				))}
			</TileContainer>
		</Fragment>
	</Layout>
);

const ResponsiveView = () => {
	const { currentBreakpoint } = useScreenBreakpoint();

	if (currentBreakpoint === DEFAULT_BREAKPOINTS.Desktop)
		return <ViewDesktop />;

	return <ViewMobile />;
};

export const App = () => (
	<Provider store={globalStore}>
		<ResponsiveView />
	</Provider>
);
