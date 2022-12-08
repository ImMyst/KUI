import {
    ButtonHTMLAttributes,
    DetailedHTMLProps
} from "react";
import {
    TColorVariant,
    TShapeVariant,
    TSizeVariant
} from "../../../types/types";

export interface IKButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: TColorVariant;
    size?: TSizeVariant;
    shape?: TShapeVariant;
    hasIcon?: boolean;
    classname?: string;
}
