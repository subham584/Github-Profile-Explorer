export default function Loading() {
  return (
    <div className="text-center my-6">
      <div className="w-10 h-10 border-4 border-[#30363d] border-t-[#58a6ff] rounded-full animate-spin mx-auto mb-3"></div>
      <p className="text-gray-400">Fetching Github profile...</p>
    </div>
  );
}