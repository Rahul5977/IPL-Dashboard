import Chart from "react-apexcharts";

export default function TeamStandingsChart() {
  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    colors: ['#4F46E5', '#10B981', '#EF4444'],
    xaxis: {
      categories: ['CSK', 'MI', 'RCB', 'KKR', 'DC', 'PBKS', 'RR', 'SRH', 'LSG', 'GT'],
      labels: {
        style: {
          colors: '#64748b',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Matches',
        style: {
          color: '#64748b',
        },
      },
      labels: {
        style: {
          colors: '#64748b',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val: number) {
          return val + " matches";
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      labels: {
        colors: '#64748b',
      },
    },
  };

  const series = [
    {
      name: 'Wins',
      data: [6, 5, 4, 4, 3, 3, 3, 2, 2, 2],
    },
    {
      name: 'Draws/NR',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: 'Losses',
      data: [2, 3, 4, 4, 5, 5, 5, 6, 6, 6],
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Team Performance
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Win/Loss ratio for all teams
          </p>
        </div>
      </div>
      <div className="h-[350px]">
        <Chart
          options={options}
          series={series}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
}