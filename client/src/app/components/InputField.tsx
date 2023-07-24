import { IInputesField } from "../Interface";

export default function InputField({
  type,
  name,
  placeholder,
  style,
}: IInputesField) {
  return (
    <div>
      <div>
        <div>
          <label htmlFor={name}>placeholder</label>
        </div>
        <div>Error</div>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={style}
      />
    </div>
  );
}
