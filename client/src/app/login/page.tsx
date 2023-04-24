import type { Metadata } from "next";
import { LoginForm } from "../components";
export const metadata: Metadata = {
  title: "Zend | Login",
  description: "How paymnets should be made",
};

export default function Login() {
  return <LoginForm style="flex flex-col gap-5  w-[400px]" />;
}
