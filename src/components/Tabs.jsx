import { useState } from "react";

const Tabs = () => {
  const [selected, setSelected] = useState("overview");
  const tabs = ["overview", "demographics"];
  const selectedIndex = tabs.indexOf(selected);

  return (
    <div className="relative py-4 flex justify-between text-white gap-12 *:capitalize w-full">
      {tabs.map((tab) => (
        <div
          key={tab}
          className="w-1/2 text-center cursor-pointer"
          onClick={() => setSelected(tab)}
        >
          {tab}
        </div>
      ))}
      <div
        className="absolute bottom-0 w-1/2 h-0.5 bg-white transition-transform duration-300"
        style={{ transform: `translateX(${selectedIndex * 100}%)` }}
      />
    </div>
  );
};

export default Tabs;
