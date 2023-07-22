import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Zend | Login",
  description: "How paymnets should be made",
};

export default function Login() {
  return (
    <main className=" flex items-center justify-center w-full h-screen">
      <form className="flex flex-col gap-5  w-[500px]">
        <input
          type="text"
          name="userName"
          placeholder="username"
          className="bg-[#1A1A1A] text-white outline-none flex items-center h-12  p-1"
        />
        <input
          type="text"
          name="userName"
          placeholder="username"
          className="bg-[#1A1A1A] text-white outline-none flex items-center h-12 p-1"
        />
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
