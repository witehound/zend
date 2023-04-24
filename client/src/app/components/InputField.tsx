"use client";
import { IInputesField } from "../Types";
import { useForm } from "react-hook-form";

export default function InputField({
  type,
  name,
  placeholder,
  required,
  maxLength,
  register,
}: IInputesField) {
  return (
    <div className="bg-[#1A1A1A] p-1 rounded-[5px]">
      <div className="flex justify-between">
        <div>
          <label htmlFor={name} className="text-gray-500 text-[12px]">
            {placeholder}
          </label>
        </div>
        <div className=" text-red-700 text-[12px]">{}</div>
      </div>
      <input
        type={type}
        id={name}
        {...register(name, {
          required: required,
          maxLength: {
            value: maxLength,
            message: `${maxLength} characters max`,
          },
        })}
        className="bg-inherit text-white outline-none flex items-center h-7 p-1 w-full "
      />
    </div>
  );
}
