import { forwardRef } from "react";

export const LayoutMain = forwardRef<
  HTMLElement,
  JSX.IntrinsicElements["main"]
>(function LayoutMain({ children, ...restProps }, ref) {
  return (
    <main {...restProps} ref={ref}>
      {children}
    </main>
  );
});
