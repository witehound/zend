export default function Login() {
  return (
    <main className=" flex items-center justify-center w-full h-screen">
      <form className="flex flex-col gap-5">
        <input
          type="text"
          name="userName"
          placeholder="username"
          className="bg-[#1A1A1A] text-white outline-none flex items-center h-12 w-[400px] p-1"
        />
        <input
          type="text"
          name="userName"
          placeholder="username"
          className="bg-[#1A1A1A] text-white outline-none flex items-center h-12 w-[400px] p-1"
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
