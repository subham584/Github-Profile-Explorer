export default function ProfileCard({ user }) {
  return (
    <div className="bg-[#21262d]/80 backdrop-blur-lg border border-[#30363d] rounded-2xl p-4 sm:p-6 shadow-lg mt-6 animate-fadeIn max-w-2xl mx-auto">
      
      {/* Avatar + User Info */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-[#58a6ff] shadow-lg"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-400">@{user.login}</p>
          <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
            {user.bio || "This user has no bio."}
          </p>
          {user.location && (
            <div className="flex items-center justify-center sm:justify-start text-gray-400 mt-1 sm:mt-2">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 
                13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0
                9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62
                6.5 12 6.5s2.5 1.12 2.5 2.5S13.38
                11.5 12 11.5z"/>
              </svg>
              {user.location}
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
        <Stat label="Repositories" value={user.public_repos} />
        <Stat label="Followers" value={user.followers} />
        <Stat label="Following" value={user.following} />
        <Stat label="Gists" value={user.public_gists} />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
        <a
          href={user.html_url}
          target="_blank"
          className="px-4 py-2 border border-[#58a6ff] rounded-lg text-[#58a6ff] hover:bg-[#58a6ff] hover:text-white transition text-center"
        >
          View on Github
        </a>
        {user.blog && (
          <a
            href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
            target="_blank"
            className="px-4 py-2 border border-[#58a6ff] rounded-lg text-[#58a6ff] hover:bg-[#58a6ff] hover:text-white transition text-center"
          >
            Visit Blog
          </a>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#30363d]/50 border border-[#30363d] rounded-lg p-4 text-center hover:border-[#58a6ff] transition w-full">
      <div className="text-xl sm:text-xl font-bold text-white">{value.toLocaleString()}</div>
      <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">{label}</div>
    </div>
  );
}