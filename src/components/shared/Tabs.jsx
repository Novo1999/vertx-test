import { useEffect, useState } from "react";
import { useAssignment } from "../../context/AssignmentContext.jsx";

const Tabs = () => {
  const [selected, setSelected] = useState("overview");
  const [tabs, setTabs] = useState(["overview", "demographics"]);
  const { assignment } = useAssignment();

  useEffect(() => {
    if (assignment) setTabs(["overview", "portfolio", "experience", "media"]);
    else setTabs(["overview", "demographics"]);
  }, [assignment]);

  return (
    <>
      {/* Mobile Tabs */}
      <div className="py-4 flex justify-between text-white gap-12 *:capitalize w-full lg:hidden sticky top-16 bg-black z-[999] px-4 overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`w-1/2 text-center cursor-pointer pb-2 border-b-2 ${selected === tab ? "border-white" : "border-transparent"
              }`}
            onClick={() => setSelected(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Desktop Tabs */}
      <div className="justify-between hidden lg:flex *:text-xl sticky top-16 bg-black z-[999] **:cursor-pointer **:transition **:duration-300">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <p
              key={tab}
              className={`text-gray-500 hover:text-white px-8 capitalize font-semibold py-2 border-b-2 ${selected === tab ? "border-white text-white" : "border-transparent"
                }`}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </p>
          ))}
        </div>
        <div className="border-l border-white/40 px-[43.5px] py-3">
          <p className="text-white">More</p>
        </div>
      </div>
    </>
  );
};

export default Tabs;
