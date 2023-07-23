import { QuickAction } from ".";

export default function QuickActions() {
  return (
    <main className=" w-[252px] flex  flex-col p-5 gap-5 h-screen border-l border-gray-600">
      quickAction
      <div className="p-2 flex flex-col gap-5">
        <QuickAction />
        <QuickAction />
        <QuickAction />
      </div>
    </main>
  );
}
