import { IInputesField } from "../Interface";

export default function InputField({ type, name, placeholder }: IInputesField) {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <label htmlFor={name}>{placeholder}</label>
        </div>
        <div className=" text-red-700">Error</div>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-[#1A1A1A] text-white outline-none flex items-center h-12 p-1 w-full rounded-[5px]"
      />
    </div>
  );
}
