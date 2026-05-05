"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  fluid?: boolean; // optional full width
};

export default function Container({
  children,
  className,
  fluid = false,
}: Props) {
  return (
    <div
      className={clsx(
        "w-full mx-auto",
        fluid ? "px-4 sm:px-6 lg:px-12" : "max-w-[1280px] px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
