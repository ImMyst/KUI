import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className="rounded-lg border-2 border-gray-400 px-4 py-2 text-xl">
      {props.children}
    </button>
  );
}
