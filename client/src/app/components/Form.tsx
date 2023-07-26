"use client";

import { useForm } from "react-hook-form";
import { IForm } from "../Types";

export default function Form({ style, children }: IForm) {
  const { handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <form className={style} onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}
