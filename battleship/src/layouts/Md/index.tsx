export const LayoutMd = ({ children }: LayoutMdProps) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 my-4 sm:my-6 my-8">
      <div className="max-w-md">{children?.[0]}</div>

      <div className="w-full">{children?.[1]}</div>
    </div>
  </div>
);

interface LayoutMdProps {
  children?: any;
}
