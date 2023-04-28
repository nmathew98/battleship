export const LayoutMd = ({ children }: LayoutMdProps) => (
	<>
		<div className="flex justify-center">
			<div className="mt-6">
				{children?.[2]}

				<div className="my-6 flex space-x-4">
					<div className="w-4/12">{children?.[0]}</div>

					{children?.[1]}
				</div>
			</div>
		</div>
	</>
);

interface LayoutMdProps {
	children?: any;
}
