import { useState } from "react";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";

interface PlayerStats {
  id: number;
  name: string;
  team: string;
  role: string;
  matches: number;
  runs?: number;
  average?: number;
  strikeRate?: number;
  wickets?: number;
  economy?: number;
}

const players: PlayerStats[] = [
  {
    id: 1,
    name: "Virat Kohli",
    team: "RCB",
    role: "Batsman",
    matches: 15,
    runs: 385,
    average: 42.78,
    strikeRate: 148.2,
  },
  {
    id: 2,
    name: "Jasprit Bumrah",
    team: "MI",
    role: "Bowler",
    matches: 14,
    wickets: 15,
    economy: 6.8,
  },
  {
    id: 3,
    name: "Rohit Sharma",
    team: "MI",
    role: "Batsman",
    matches: 14,
    runs: 320,
    average: 35.56,
    strikeRate: 139.5,
  },
  {
    id: 4,
    name: "Ravindra Jadeja",
    team: "CSK",
    role: "Bowler",
    matches: 13,
    wickets: 12,
    economy: 7.2,
  },
  // Add more players as needed
];

export default function PlayerStats() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTeamColor = (team: string) => {
    const teamColors: { [key: string]: string } = {
      'RCB': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      'MI': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'CSK': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'KKR': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return teamColors[team] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  };

  return (
    <div className="space-y-6">
      <PageMeta
        title="IPL 2024 Player Statistics"
        description="Detailed statistics of IPL 2024 players including batting and bowling performances"
      />
      <PageBreadcrumb pageTitle="Player Statistics" />

      {/* Main Content Container */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search player by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white focus:border-primary"
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                    <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                      {player.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {player.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTeamColor(player.team)}`}>
                      {player.team}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                  {player.role}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Matches</p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    {player.matches}
                  </p>
                </div>

                {player.role === "Batsman" ? (
                  <>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Runs</p>
                      <p className="text-lg font-semibold text-gray-800 dark:text-white">
                        {player.runs}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Average</p>
                      <p className="text-lg font-semibold text-gray-800 dark:text-white">
                        {player.average}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Strike Rate</p>
                      <p className="text-lg font-semibold text-gray-800 dark:text-white">
                        {player.strikeRate}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Wickets</p>
                      <p className="text-lg font-semibold text-gray-800 dark:text-white">
                        {player.wickets}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Economy</p>
                      <p className="text-lg font-semibold text-gray-800 dark:text-white">
                        {player.economy}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
