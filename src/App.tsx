import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/home-page";
import VerifyAttendancePage from "./routes/verify-attendance";
import RootPage from "./routes/root";
import ErrorPage from "./routes/error-page";
import SignInPage from "./routes/signin-page";

export default function App() {
  return (
    <Router>
      <header>
        <SignedOut>
          <SignInPage />
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
