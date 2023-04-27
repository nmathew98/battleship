import { useDispatch } from "react-redux";

import { render, screen } from "../../../tests/spec";
import { HitMarker } from ".";
import { hit } from "../../../state/hits";

describe("<HitMarker />", () => {
	it("should show 'Not Hit!' when the ship is not hit", () => {
		render(<HitMarker id={1} />);
	});

	it("should show 'Hit! when the ship is hit", () => {
		const HitMarkerTest = () => {
			const dispatch = useDispatch();

			useEffect(() => {
				dispatch(hit(2));
			}, []);

			return <HitMarker id={2} />;
		};

		render(<HitMarkerTest />);

		const marker = screen.getByText("Hit");

		expect(marker).toBeTruthy();
	});
});
