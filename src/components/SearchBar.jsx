export default function SearchBar({ username, setUsername, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="mb-6 relative">
      <div className="flex items-center relative">
        <svg
          className="absolute left-4 w-5 h-5 text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5
           6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79
           l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6
           9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/>
        </svg>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full pl-12 pr-28 py-4 rounded-2xl bg-[#21262d] border-2 border-[#30363d] text-lg outline-none focus:border-[#58a6ff] transition"
        />

        <button
          onClick={onSearch}
          className="absolute right-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#f78166] to-[#58a6ff] text-white font-semibold"
        >
          Search
        </button>
      </div>
    </div>
  );
}