import { BsBell, BsGlobe } from "react-icons/bs";
import { CiGrid42 } from "react-icons/ci";
import { FiBarChart2, FiBriefcase } from "react-icons/fi";

const MobileMenu = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white py-3 shadow-lg lg:hidden">
      <ul className="flex justify-around items-center">
        <li className="flex flex-col items-center gap-1 cursor-pointer">
          <CiGrid42 size={24} />
          <span className="text-xs">Dashboard</span>
        </li>
        <li className="flex flex-col items-center gap-1 cursor-pointer">
          <FiBarChart2 size={24} />
          <span className="text-xs">Analytics</span>
        </li>
        <li className="flex flex-col items-center gap-1 cursor-pointer">
          <BsGlobe size={24} />
          <span className="text-xs">Connect</span>
        </li>
        <li className="flex flex-col items-center gap-1 cursor-pointer">
          <BsBell size={24} />
          <span className="text-xs">Activity</span>
        </li>
        <li className="flex flex-col items-center gap-1 cursor-pointer">
          <FiBriefcase size={24} />
          <span className="text-xs">Dealroom</span>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
