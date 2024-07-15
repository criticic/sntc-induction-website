import { Link, Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-orange-50">
      <header className="sticky left-0 right-0 top-0 bg-orange-50 bg-opacity-50 p-4 backdrop-blur-md">
        <Link to="/" className="text-lg md:text-xl lg:text-2xl font-bold text-orange-600">
          Induction Programme 2024
        </Link>
      </header>
      <main className="container p-4">
        <Outlet />
      </main>
    </div>
  );
}
