import VisitorChart from "./VisitorChart.jsx";

const Visitors = () => {
  return (
    <div className="rounded-lg p-4 bg-zinc-800 text-white flex flex-col gap-4">
      <div className="flex gap-2 justify-between items-center *:bg-black *:p-2 *:text-xs">
        <div className="rounded-2xl">Visitors</div>
        <select className="text-white px-2 py-1 rounded-2xl">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
          <option>Last Year</option>
        </select>
        <div className="rounded-2xl">+Compare</div>
      </div>
      <div className="flex gap-2 items-center tracking-wider">
        <p className="text-white font-bold text-4xl">13.49K</p>
        <div className="*:text-xs">
          <p className="text-green-500">+469%</p>
          <p className="text-gray-400">(897)</p>
        </div>
      </div>
      <div className="h-64 w-full">
        <VisitorChart />
      </div>
    </div>
  );
};

export default Visitors;
