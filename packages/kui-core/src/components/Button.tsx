import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="text-xl border-2 border-gray-400 px-4 py-2 rounded-lg">{props.children}</button>;
}
