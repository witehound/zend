import { IInputesField } from "../Interface";

export default function InputField({
  type,
  name,
  placeholder,
  style,
}: IInputesField) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style}
    />
  );
}
