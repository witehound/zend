"use client";
import { useForm } from "react-hook-form";
import { Button, InputField } from ".";
import { IForm, LoginFormFeilds } from "../Types";

export default function LoginForm({ style }: IForm) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<LoginFormFeilds>();

  const onSubmit = (data: LoginFormFeilds) => {
    console.log("data", data);
  };
  return (
    <main className=" flex items-center justify-center w-full h-screen">
      <form className={style} onSubmit={handleSubmit(onSubmit)}>
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
          text="Login"
        />
      </form>
    </main>
  );
}
