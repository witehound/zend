import type { Metadata } from "next";
import { Button, InputField, Form } from "../components";
export const metadata: Metadata = {
  title: "Zend | Login",
  description: "How paymnets should be made",
};

export default function Login() {
  return (
    <main className=" flex items-center justify-center w-full h-screen">
      <Form
        style="flex flex-col gap-5  w-[400px]"
        children={
          <>
            <InputField
              type="text"
              name="userName"
              placeholder="Username"
              required={true}
              maxLength={32}
            />
            <InputField
              type="text"
              name="password"
              placeholder="Password"
              required={true}
              maxLength={32}
            />
            <Button
              type="submit"
              style="bg-[#636262] flex items-center justify-center h-10 rounded-[5px] hover:bg-[#7B7B7B]"
              text="Login"
            />
          </>
        }
      />
      <form className=""></form>
    </main>
  );
}
