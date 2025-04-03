import { useState } from "react";

const Tabs = () => {
  const [selected, setSelected] = useState("overview");
  const tabs = ["overview", "demographics"];
  const selectedIndex = tabs.indexOf(selected);

  return (<>
    <div className="py-4 flex justify-between text-white gap-12 *:capitalize w-full lg:hidden sticky top-16 bg-black z-[999]">
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
    <div className="justify-between hidden lg:flex *:text-xl sticky top-16 bg-black z-[999] **:cursor-pointer **:transition **:duration-300">
      <div className="flex gap-4 *:pt-3">
        <p className="text-white font-semibold border-r border-white/40 px-8">Overview</p>
        <p className="text-gray-500 hover:text-white">Demographics</p>
      </div>
      <div className="border-l border-white/40 px-[27.5px] py-3">
        <p className="text-white">More</p>
      </div>
    </div>
  </>
  );
};

export default Tabs;
