import { IInputesField } from "../Interface";

export default function InputField({ type, name, placeholder }: IInputesField) {
  return (
    <div className="bg-[#1A1A1A] p-1 rounded-[5px]">
      <div className="flex justify-between">
        <div>
          <label htmlFor={name} className=" text-gray-500 text-[12px]">
            {placeholder}
          </label>
        </div>
        <div className=" text-red-700 text-[12px]">Error</div>
      </div>
      <input
        type={type}
        name={name}
        className="bg-inherit text-white outline-none flex items-center h-7 p-1 w-full "
      />
    </div>
  );
}
