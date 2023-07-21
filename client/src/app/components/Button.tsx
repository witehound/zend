import { ButtonHTMLAttributes, FC } from "react";
import { IButton } from "../Interface";

export default function Button({ type, style, text }: IButton) {
  return (
    <button type={type} className={style}>
      {text}
    </button>
  );
}
