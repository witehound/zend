import type { Metadata } from "next";
import { Button, InputField } from "../components";
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
        <Button
          type="submit"
          style="bg-[#636262] flex items-center justify-center h-10 rounded-[5px] hover:bg-[#7B7B7B]"
          text="Create account"
        />
      </form>
    </main>
  );
}
