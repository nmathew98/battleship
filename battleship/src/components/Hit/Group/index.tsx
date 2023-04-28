import type { ReactNode } from "react";

export const HitGroup = ({ children }: HitGroupProps) => (
	<div className="mt-2 grid grid-cols-2 gap-y-2 lg:mt-0 lg:grid-cols-1 lg:gap-x-0 lg:gap-y-0">
		{children}
	</div>
);

interface HitGroupProps {
	children?: ReactNode;
}
