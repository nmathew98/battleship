export const Layout = ({ children }: LayoutProps) => (
	<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div className="my-4 my-8 grid grid-cols-1 sm:my-6 md:grid-cols-2">
			<div className="w-full">{children?.[1]}</div>

			<div className="w-full">{children?.[0]}</div>
		</div>
	</div>
);

interface LayoutProps {
	children?: any;
}
