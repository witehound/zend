import type { Metadata } from "next";
import { InputField } from "../components";
export const metadata: Metadata = {
  title: "Zend | Register",
  description: "How paymnets should be made",
};

export default function Login() {
  return (
    <main className=" flex items-center justify-center w-full h-screen">
      <form className="flex flex-col gap-5">
        <div className="flex flrx-row gap-5">
          <InputField type="text" name="firstName" placeholder="First name" />

          <InputField type="text" name="LastName" placeholder="Last name" />
        </div>
        <InputField type="text" name="userName" placeholder="Username" />
        <InputField type="text" name="password" placeholder="Password" />
        <button
          type="submit"
          className="bg-[#272727] flex items-center justify-center h-10 rounded-[5px"
        >
          Create account
        </button>
      </form>
    </main>
  );
}
