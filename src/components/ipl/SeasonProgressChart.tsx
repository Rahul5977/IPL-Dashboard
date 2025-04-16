import Chart from "react-apexcharts";

export default function SeasonProgressChart() {
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#4F46E5', '#10B981'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: '#f1f1f1',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
      labels: {
        style: {
          colors: '#64748b',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#64748b',
        },
      },
    },
    tooltip: {
      theme: 'dark',
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
      name: 'Average Score',
      data: [165, 180, 155, 178, 192, 168, 175, 185],
    },
    {
      name: 'Run Rate',
      data: [8.2, 8.8, 7.9, 8.5, 9.1, 8.4, 8.6, 8.9],
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Season Progress
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Tournament performance metrics over time
          </p>
        </div>
      </div>
      <div className="h-[350px]">
        <Chart
          options={options}
          series={series}
          type="area"
          height="100%"
        />
      </div>
    </div>
  );
}