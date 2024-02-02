import { DahsboardNav } from "../components/DashboardNav";

export default function DashboardLaylout({ children }) {
  return (
    <div className="mt-10 ">
      <div className="container grid gap-12 md:grid-cols-[200px_1fr] border ">
        <aside className="w-[200px] hidden md:flex flex-col">
          <DahsboardNav />
        </aside>

        <main>{children}</main>
      </div>
    </div>
  );
}
