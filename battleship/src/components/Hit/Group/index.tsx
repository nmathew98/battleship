import type { ReactNode } from "react";

export const HitGroup = ({ children }: HitGroupProps) => (
	<div className="mt-2 grid grid-cols-2 gap-y-2 md:mt-0 md:grid-cols-1 md:gap-x-0 md:gap-y-0">
		{children}
	</div>
);

interface HitGroupProps {
	children?: ReactNode;
}
