import { forwardRef } from "react";

export const Layer3 = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  function Layer3({ children, ...restProps }, ref) {
    return (
      <div
        {...restProps}
        ref={ref}
        style={{
          background: "red",
          padding: "1rem",
          color: "white",
        }}
      >
        <div>Layer 3</div>
        {children}
      </div>
    );
  }
);
