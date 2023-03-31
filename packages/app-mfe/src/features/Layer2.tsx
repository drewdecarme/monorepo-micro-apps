import { forwardRef } from "react";

export const Layer2 = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  function Layer2({ children, ...restProps }, ref) {
    return (
      <div
        {...restProps}
        ref={ref}
        style={{
          background: "orange",
          padding: "1rem",
        }}
      >
        <div>Layer 2</div>
        {children}
      </div>
    );
  }
);
