import MatchMetrics from "../../components/ipl/MatchMetrics";
import SeasonProgressChart from "../../components/ipl/SeasonProgressChart";
import TeamStandingsChart from "../../components/ipl/TeamStandingsChart";
import PointsTable from "../../components/ipl/PointsTable";
import UpcomingMatches from "../../components/ipl/UpcomingMatches";
import TopPerformers from "../../components/ipl/TopPerformers";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="IPL Dashboard 2024 | Live Scores, Stats & Analysis"
        description="IPL 2024 Dashboard - Track live matches, team standings, player stats and upcoming fixtures"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Tournament Stats Section */}
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <MatchMetrics />
          <SeasonProgressChart />
        </div>

        {/* Points Table Section */}
        <div className="col-span-12 xl:col-span-4">
          <PointsTable />
        </div>

        {/* Team Performance Section */}
        <div className="col-span-12">
          <TeamStandingsChart />
        </div>

        {/* Top Performers Card */}
        <div className="col-span-12 xl:col-span-5">
          <TopPerformers />
        </div>

        {/* Upcoming Matches Section */}
        <div className="col-span-12 xl:col-span-7">
          <UpcomingMatches />
        </div>
      </div>
    </>
  );
}
