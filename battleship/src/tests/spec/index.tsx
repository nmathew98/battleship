import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { render } from "@testing-library/react";

import { globalStore } from "../../state";

export const Providers = ({ children }: ProvidersProps) => (
  <ReduxProvider store={globalStore}>{children}</ReduxProvider>
);

interface ProvidersProps {
  children?: ReactNode;
}

const customRender = (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1]
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
