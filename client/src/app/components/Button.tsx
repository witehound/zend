import { ButtonHTMLAttributes, FC } from "react";
import { IButton } from "../Types";

export default function Button({ type, style, text }: IButton) {
  return (
    <button type={type} className={`${style} font-semibold`}>
      {text}
    </button>
  );
}
