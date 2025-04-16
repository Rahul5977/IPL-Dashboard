export default function PointsTable() {
  const teams = [
    { name: 'CSK', matches: 8, won: 6, lost: 2, nrr: '+0.982', points: 12 },
    { name: 'MI', matches: 8, won: 5, lost: 3, nrr: '+0.754', points: 10 },
    { name: 'RCB', matches: 8, won: 4, lost: 4, nrr: '-0.235', points: 8 },
    { name: 'KKR', matches: 8, won: 4, lost: 4, nrr: '+0.428', points: 8 },
    { name: 'DC', matches: 8, won: 3, lost: 5, nrr: '-0.324', points: 6 }
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">Points Table</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="pb-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">Team</th>
              <th className="pb-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">M</th>
              <th className="pb-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">W</th>
              <th className="pb-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">L</th>
              <th className="pb-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">NRR</th>
              <th className="pb-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">Pts</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team.name} className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 text-sm font-medium text-gray-800 dark:text-white">{team.name}</td>
                <td className="py-3 text-center text-sm text-gray-600 dark:text-gray-400">{team.matches}</td>
                <td className="py-3 text-center text-sm text-gray-600 dark:text-gray-400">{team.won}</td>
                <td className="py-3 text-center text-sm text-gray-600 dark:text-gray-400">{team.lost}</td>
                <td className="py-3 text-center text-sm text-gray-600 dark:text-gray-400">{team.nrr}</td>
                <td className="py-3 text-center text-sm font-semibold text-gray-800 dark:text-white">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}