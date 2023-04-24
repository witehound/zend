import type { Metadata } from "next";
import { RegisterForm } from "../components";

export const metadata: Metadata = {
  title: "Zend | Register",
  description: "How paymnets should be made",
};

export default function Register() {
  return <RegisterForm style={"flex flex-col gap-5  w-[400px]"} />;
}
