const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
        <span className="absolute text-3xl">🌿</span>
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-emerald-700 animate-pulse">
        Growing your GreenNest...
      </h2>
      <p className="mt-2 text-gray-600 text-sm">
        Please wait while we nurture your plants 🌱
      </p>
    </div>
  );
};

export default Loading;
