import { IInputes } from "../Interface";

export default function Inputs({ type, name, placeholder, style }: IInputes) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style}
    />
  );
}
