import type { ReactNode } from "react";

export const HitContainer = ({ children }: HitContainerProps) => (
	<div>{children}</div>
);

interface HitContainerProps {
	children?: ReactNode;
}
