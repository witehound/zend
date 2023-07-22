export default function Login() {
  return (
    <main className=" flex items-center justify-center w-full h-screen">
      <form className="flex flex-col gap-5 w-[500px]">
        <div className="flex flrx-row gap-5">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="bg-[#1A1A1A] text-white outline-none flex items-center h-12 p-1 flex-1"
          />
          <input
            type="text"
            name="LastName"
            placeholder="Last name"
            className="bg-[#1A1A1A] text-white outline-none flex items-center h-12  p-1 flex-1"
          />
        </div>
        <input
          type="text"
          name="userName"
          placeholder="username"
          className="bg-[#1A1A1A] text-white outline-none flex items-center h-12  p-1 w-full"
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
          Create account
        </button>
      </form>
    </main>
  );
}
