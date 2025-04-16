export default function UpcomingMatches() {
  const matches = [
    {
      id: 1,
      teams: "MI vs RCB",
      date: "Apr 25, 2024",
      time: "8:00 PM",
      venue: "Wankhede Stadium",
      status: "Next Match",
    },
    {
      id: 2,
      teams: "CSK vs KKR",
      date: "Apr 27, 2024",
      time: "7:30 PM",
      venue: "Chepauk Stadium",
      status: "Upcoming",
    },
    {
      id: 3,
      teams: "DC vs PBKS",
      date: "Apr 29, 2024",
      time: "7:30 PM",
      venue: "Arun Jaitley Stadium",
      status: "Upcoming",
    }
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">Upcoming Matches</h3>
      <div className="space-y-4">
        {matches.map((match) => (
          <div key={match.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl dark:border-gray-700">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">{match.teams}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{match.venue}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800 dark:text-white">{match.date}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{match.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}