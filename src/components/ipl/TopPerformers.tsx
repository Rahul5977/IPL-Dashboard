export default function TopPerformers() {
  const performers = {
    batsmen: [
      { name: "Virat Kohli", team: "RCB", runs: 385, strikeRate: 148.2 },
      { name: "KL Rahul", team: "LSG", runs: 350, strikeRate: 142.8 },
      { name: "Rohit Sharma", team: "MI", runs: 328, strikeRate: 145.5 },
    ],
    bowlers: [
      { name: "Jasprit Bumrah", team: "MI", wickets: 15, economy: 6.8 },
      { name: "Yuzvendra Chahal", team: "RR", wickets: 14, economy: 7.2 },
      { name: "Mohammed Shami", team: "GT", wickets: 13, economy: 7.5 },
    ],
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
        Top Performers
      </h3>
      
      {/* Top Batsmen */}
      <div className="mb-6">
        <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-200">
          Leading Run Scorers
        </h4>
        <div className="space-y-3">
          {performers.batsmen.map((player, index) => (
            <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-800/50">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {player.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {player.team}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800 dark:text-white">
                  {player.runs} runs
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  SR: {player.strikeRate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Bowlers */}
      <div>
        <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-200">
          Leading Wicket Takers
        </h4>
        <div className="space-y-3">
          {performers.bowlers.map((player, index) => (
            <div key={player.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-800/50">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {player.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {player.team}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800 dark:text-white">
                  {player.wickets} wickets
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Eco: {player.economy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}