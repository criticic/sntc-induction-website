import { SignInButton } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-50">
      <div className="rounded-lg bg-[orange] p-2 font-bold">
        <SignInButton />
      </div>
    </div>
  );
}
