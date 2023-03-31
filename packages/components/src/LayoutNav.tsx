import { forwardRef } from "react";

export const LayoutNav = forwardRef<HTMLElement, JSX.IntrinsicElements["nav"]>(
  function LayoutNav(props, ref) {
    return (
      <nav {...props} ref={ref}>
        this be the nav
      </nav>
    );
  }
);
