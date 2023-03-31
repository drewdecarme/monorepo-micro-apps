import { forwardRef } from "react";

export const Layer1 = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  function Layer1({ children, ...restProps }, ref) {
    return (
      <div
        {...restProps}
        ref={ref}
        style={{
          background: "green",
          padding: "1rem",
          color: "white",
        }}
      >
        <div>Layer 1</div>
        {children}
      </div>
    );
  }
);
