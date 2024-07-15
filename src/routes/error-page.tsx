import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-orange-50 p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-orange-600">Oops!</h1>
        <p className="mt-4">Sorry, an unexpected error has occurred.</p>
        <p className="mt-2 text-sm italic text-gray-600">
          {error.statusText || error.message}
        </p>
        <div className="mt-4">
          <a href="/" className="rounded-lg bg-orange-600 px-4 py-2 text-white">
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
