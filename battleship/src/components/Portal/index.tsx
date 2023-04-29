import type { ReactElement } from "react";
import { cloneElement } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ container, children }: PortalProps) => {
	const [shouldPortalContainerBeRemoved, setShouldPortalContainerBeRemoved] =
		useState(false);

	const removePortal = () => {
		setShouldPortalContainerBeRemoved(true);
	};

	const clonedElementId = useId();
	const clonedChild = cloneElement(children, {
		removePortal,
	});

	const portalContainer = <div id={clonedElementId}>{clonedChild}</div>;

	useEffect(() => {
		if (shouldPortalContainerBeRemoved) {
			const el = document.getElementById(clonedElementId);

			el?.remove();
		}
	}, [shouldPortalContainerBeRemoved]);

	return createPortal(portalContainer, container ?? document.body);
};

interface PortalProps {
	container?: Element;
	children: ReactElement;
}
