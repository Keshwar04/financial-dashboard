import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, ChartColumn } from "lucide-react";
import { useOperationStore } from "../store/operationStore";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = ["#FFD600", "#FF6D00", "#2962FF", "#7C4DFF", "#00C853"];

export default function PerformanceOverview() {
  const { productData } = useOperationStore();
  const totalTransactions = productData.reduce(
    (sum, item) => sum + item.activeWallets,
    0
  );

  const activeProducts = productData.length;

  const chartData = {
    labels: productData.map((item) => item.walletCategory),
    datasets: [
      {
        data: productData.map((item) => item.activeWallets),
        backgroundColor: COLORS,
        borderWidth: 2,
        borderColor: "#0f0f0f",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // we’ll create custom legend below
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            let value = context.raw || 0;
            return `${label}: ${value.toLocaleString()}`;
          },
        },
        backgroundColor: "#1e1e1e",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#333",
        borderWidth: 1,
        padding: 8,
      },
    },
  };

  const footerStats = [
    {
      label: "Total Transactions",
      value: totalTransactions.toLocaleString(),
    },
    {
      label: "Active Products",
      value: activeProducts,
    },
  ];

  return (
    <div>
      <h2 className="flex items-center gap-2 text-primary mb-6">
        <span>
          <ChartColumn size="18" />
        </span>{" "}
        Performance Overview
      </h2>
      <div className="glass-card">
        {/* Header */}
        <div className="flex items-center text-primary gap-2 mb-4">
          <Box size={18} />
          <h2 className="text-sm font-medium">Product Performance Analytics</h2>
        </div>

        {/* Chart */}
        <div className="h-60">
          <Pie data={chartData} options={options} />
        </div>

        {/* Custom Legend */}
        <div className="flex flex-wrap gap-4 justify-center my-4 text-sm">
          {productData.slice(0, 4).map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="text-gray-300">{item.walletCategory}</span>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="border-t border-gray-700 pt-4 flex justify-around text-center">
          {footerStats.map((stat, index) => (
            <div key={index}>
              <div className="text-green-400 font-bold text-lg">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
