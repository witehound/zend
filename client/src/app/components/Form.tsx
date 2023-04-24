"use client";

import { useForm } from "react-hook-form";
import { IForm, RegisterFormFeilds, LoginFormFeilds } from "../Types";

export default function Form({ style, children, formType }: IForm) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<RegisterFormFeilds | LoginFormFeilds>();
  const onSubmit = (data: RegisterFormFeilds | LoginFormFeilds) => {
    console.log("data", data);
    console.log("errors", errors);
  };
  return (
    <form className={style} onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}
