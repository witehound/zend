import { QuickAction } from ".";

export default function QuickActions() {
  return (
    <main className=" w-[252px] flex  flex-col p-5 gap-5 h-screen border-l border-gray-600 top-0 sticky right-0">
      Quick Actions
      <div className="p-2 flex flex-col gap-5">
        <QuickAction />
        <QuickAction />
        <QuickAction />
      </div>
    </main>
  );
}
