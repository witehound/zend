"use client";
import { Button, InputField } from ".";
import { IForm, RegisterFormFeilds } from "../Types";
import { useForm } from "react-hook-form";

export default function RegisterForm({ style }: IForm) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<RegisterFormFeilds>();

  const onSubmit = (data: RegisterFormFeilds) => {
    console.log("data", data);
  };
  return (
    <main className=" flex items-center justify-center w-full h-screen">
      <form className={style} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flrx-row gap-5">
          <InputField
            type="text"
            name="firstName"
            placeholder="First name"
            required={true}
            maxLength={32}
            register={register}
          />
          <InputField
            type="text"
            name="LastName"
            placeholder="Last name"
            required={true}
            maxLength={32}
            register={register}
          />
        </div>
        <InputField
          type="text"
          name="userName"
          placeholder="Username"
          required={true}
          maxLength={32}
          register={register}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          maxLength={32}
          register={register}
        />
        <Button
          type="submit"
          style="bg-[#636262] flex items-center justify-center h-10 rounded-[5px] hover:bg-[#7B7B7B]"
          text="Create account"
        />
      </form>
    </main>
  );
}
