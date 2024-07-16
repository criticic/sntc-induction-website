import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/home-page";
import VerifyAttendancePage from "./routes/verify-attendance";
import RootPage from "./routes/root";
import ErrorPage from "./routes/error-page";

export default function App() {
  return (
    <Router>
      <header>
        <SignedOut>
          <div className="flex min-h-screen items-center justify-center bg-orange-50">
            <div className="rounded-lg bg-[orange] p-2 font-bold shadow-lg">
              <SignInButton />
            </div>
          </div>
        </SignedOut>
      </header>
      <SignedIn>
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route index element={<HomePage />} />
            <Route path="verify" element={<VerifyAttendancePage />} />
          </Route>
          <Route path="" element={<ErrorPage />} />
        </Routes>
      </SignedIn>
    </Router>
  );
}
