import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-50 to-emerald-100 text-center px-4">
      {/* Leaf or Plant Emoji */}
      <div className="text-6xl mb-4 animate-bounce">🌿</div>

      {/* Error Code */}
      <h1 className="text-7xl font-extrabold text-emerald-600 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-6">
        Looks like you’ve wandered off the garden path. Don’t worry — even the
        best gardeners get lost sometimes! Let’s take you back home.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="btn bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-full px-6"
      >
        Go Back Home
      </Link>

      {/* Decorative Plants */}
      <div className="absolute bottom-8 left-8 text-4xl opacity-50">🌱</div>
      <div className="absolute bottom-8 right-8 text-4xl opacity-50">🌵</div>
    </div>
  );
};

export default ErrorPage;
