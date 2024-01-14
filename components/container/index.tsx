import React from "react";

import { cn } from "@/utils/cn";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export const OuterContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={cn("sm:px-8", className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

export const InnerContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  function InnerContainer(
    { className, children, ...props }: ContainerProps,
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn("relative px-4 sm:px-8 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ children, ...props }: ContainerProps, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }
);
