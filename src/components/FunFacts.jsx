import React from 'react';

const stats = [
  { label: 'Developers', value: '100M+' },
  { label: 'Repositories', value: '400M+' },
  { label: 'Commits per year', value: '10B+' },
];

export default function FunFacts() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6 p-4 sm:p-6 bg-[#21262d]/90 backdrop-blur-md border border-[#30363d] rounded-2xl shadow-lg flex flex-col items-center justify-between gap-6">
      <div className="w-full text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          🚀 Discover the World of GitHub Instantly!
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-1">
          Track developers, explore code, and monitor GitHub stats effortlessly with our clean and modern interface.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col justify-center gap-4 mt-4 sm:mt-0 w-full">
  {stats.map((stat) => (
    <div
      key={stat.label}
      className="bg-[#161b22]/70 border border-[#30363d] rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-center hover:bg-[#30363d]/80 transition-all duration-200 flex-1 min-w-[90px] sm:basis-1/3"
    >
      <div className="text-lg sm:text-xl font-bold text-white">{stat.value}</div>
      <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
    </div>
  ))}
</div>
</div>
  );
}