import { Navigation, QuickActions } from "./components";

export default function Home() {
  return (
    <main className=" flex">
      <Navigation />
      <section className="p-5 flex-1">
        <h2>Welcome, user !</h2>
      </section>
      <QuickActions />
    </main>
  );
}
