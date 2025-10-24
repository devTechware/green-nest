import { Link } from "react-router";

const PlantNotFoundError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-b from-green-50 to-emerald-100 text-center px-4">
      <div className="text-6xl mb-4 animate-bounce">🪴</div>

      <h1 className="text-4xl font-bold text-emerald-700 mb-2">
        Oops! This plant isn’t in our garden.
      </h1>
      <p className="text-gray-600 max-w-md mb-6">
        It looks like the plant you’re looking for doesn’t exist or has been
        removed from our GreenNest collection.
      </p>

      <Link
        to="/plants"
        className="btn bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-full px-6"
      >
        🌿 Explore Other Plants
      </Link>

      <div className="absolute bottom-8 left-8 text-3xl opacity-50">🌱</div>
      <div className="absolute bottom-8 right-8 text-3xl opacity-50">🌾</div>
    </div>
  );
};

export default PlantNotFoundError;
