import { Link, Outlet } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

export default function RootPage() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-orange-50 bg-opacity-80 p-4 shadow-md backdrop-blur-md">
        <Link to="/" className="text-lg md:text-xl lg:text-2xl font-bold text-orange-600">
          Induction Programme 2024
        </Link>
        <UserButton />
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="mt-auto bg-orange-200 py-4 text-center">
        <p className="text-sm text-orange-600">&copy; 2024 Induction Programme. All rights reserved.</p>
      </footer>
    </div>
  );
}
