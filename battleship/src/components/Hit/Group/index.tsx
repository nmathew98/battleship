import type { ReactNode } from "react";

export const HitGroup = ({ children }: HitGroupProps) => (
	<div className="grid grid-cols-2 gap-x-6 md:grid-cols-1 md:gap-x-0">
		{children}
	</div>
);

interface HitGroupProps {
	children?: ReactNode;
}
