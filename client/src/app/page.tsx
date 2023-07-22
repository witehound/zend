import { Navigation, QuickActions } from "./components";

export default function Home() {
  return (
    <main className="flex relative">
      <Navigation />
      <section className="p-5 flex-1 gap-5 flex flex-col ">
        <h2>Welcome, user !</h2>
        <div className="flex w-full gap-5">
          <div className="bg-[#181818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-gray-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
            <p className=" text-[#1FDD00] cursor-pointer">View activities</p>
          </div>
          <div className="bg-[#1818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-[#1FDD00]-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="bg-[#181818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-gray-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
            <p className=" text-[#1FDD00] cursor-pointer">View activities</p>
          </div>
          <div className="bg-[#1818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-[#1FDD00]-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="bg-[#181818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-gray-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
            <p className=" text-[#1FDD00] cursor-pointer">View activities</p>
          </div>
          <div className="bg-[#1818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-[#1FDD00]-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="bg-[#181818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-gray-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
            <p className=" text-[#1FDD00] cursor-pointer">View activities</p>
          </div>
          <div className="bg-[#1818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-[#1FDD00]-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="bg-[#181818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-gray-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
            <p className=" text-[#1FDD00] cursor-pointer">View activities</p>
          </div>
          <div className="bg-[#1818] p-10 flex-1 flex flex-col gap-5 rounded-[10px] hover:border-[#1FDD00]-600 hover:border">
            <h2 className=" text-[20px] text-[#7B7B7B]">My Balance</h2>
            <h1 className=" text-[40px]">$100,000</h1>
          </div>
        </div>
      </section>
      <QuickActions />
    </main>
  );
}
