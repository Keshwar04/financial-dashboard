import { ArrowUp, ArrowDown, Wallet, DollarSign } from "lucide-react";
import OperationsDashboard from "./operations/components/dashboard";

const stats = [
  {
    title: "Total Wallets",
    value: "89,234",
    change: "+8.2% from last month",
    changeType: "up",
    subLabel: "Active: 85,123",
    subValue: "95.4%",
    icon: <Wallet size={18} />,
  },
  {
    title: "Total Balance",
    value: "₹45.2M",
    change: "+12.3% from last week",
    changeType: "up",
    subLabel: "Avg Balance",
    subValue: "₹506",
    icon: <DollarSign size={18} />,
  },
  {
    title: "Daily Load",
    value: "₹5.9M",
    change: "+15.7% vs yesterday",
    changeType: "up",
    subLabel: "Transactions: 12,847",
    subValue: "Avg: ₹459",
    icon: <ArrowUp size={18} />,
  },
  {
    title: "Daily Spend",
    value: "₹5.9M",
    change: "-2.1% vs yesterday",
    changeType: "down",
    subLabel: "Transactions: 15,623",
    subValue: "Avg: ₹378",
    icon: <ArrowDown size={18} />,
  },
];

export default function App() {
  return (
    // wallet operations
    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    //   {stats.map((item, index) => (
    //     <div
    //       key={index}
    //       className="bg-black/90 border border-green-500/40 rounded-2xl p-4 shadow-md flex flex-col justify-between"
    //     >
    //       {/* Header */}
    //       <div className="flex justify-between items-center mb-3">
    //         <h3 className="text-gray-300 text-sm">{item.title}</h3>
    //         <span className="text-green-400">{item.icon}</span>
    //       </div>

    //       {/* Main Value */}
    //       <div className="text-2xl font-bold text-green-400">{item.value}</div>
    //       <div
    //         className={`text-sm mt-1 ${
    //           item.changeType === "up" ? "text-green-500" : "text-red-500"
    //         }`}
    //       >
    //         {item.change}
    //       </div>

    //       {/* Footer */}
    //       <div className="mt-3 text-sm text-gray-400 flex justify-between">
    //         <span>{item.subLabel}</span>
    //         <span className="text-gray-200 font-semibold">{item.subValue}</span>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      <OperationsDashboard />
    </div>
  );
}
