export const LayoutMd = ({ children }: LayoutMdProps) => (
	<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div className="my-4 grid grid-cols-1 sm:my-6 lg:my-8 lg:grid-cols-2">
			<div className="w-full px-3">{children?.[0]}</div>

			<div className="w-full">{children?.[1]}</div>
		</div>
	</div>
);

interface LayoutMdProps {
	children?: any;
}
