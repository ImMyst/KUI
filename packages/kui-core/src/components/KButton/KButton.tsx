import { IKButtonProps } from "./KButton.type";
import cn from "classnames";

export function KButton(props: IKButtonProps) {
  const { children } = props;

  return (
    <button
      className={cn("rounded-lg border-2 border-gray-400 px-4 py-2 text-xl")}
    >
      {children}
    </button>
  );
}
