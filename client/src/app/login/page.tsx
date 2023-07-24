import type { Metadata } from "next";
import { InputField } from "../components";
export const metadata: Metadata = {
  title: "Zend | Login",
  description: "How paymnets should be made",
};

export default function Login() {
  return (
    <main className=" flex items-center justify-center w-full h-screen">
      <form className="flex flex-col gap-5  w-[400px]">
        <InputField type="text" name="userName" placeholder="Username" />
        <InputField type="text" name="password" placeholder="Password" />
        <button
          type="submit"
          className="bg-[#272727] flex items-center justify-center h-10"
        >
          Login
        </button>
      </form>
    </main>
  );
}
