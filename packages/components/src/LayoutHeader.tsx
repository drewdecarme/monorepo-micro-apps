import { forwardRef } from "react";

export const LayoutHeader = forwardRef<
  HTMLElement,
  JSX.IntrinsicElements["header"]
>(function LayoutHeader(props, ref) {
  return (
    <header {...props} ref={ref}>
      this be the header
    </header>
  );
});
