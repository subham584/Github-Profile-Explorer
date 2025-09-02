export default function ErrorBox({ message }) {
  return (
    <div className="bg-red-500/10 border border-red-400 text-red-400 rounded-xl p-4 text-center mb-4 animate-fadeIn">
      <h3 className="font-semibold">⚠ Error</h3>
      <p className="text-sm">{message}</p>
    </div>
  );
}