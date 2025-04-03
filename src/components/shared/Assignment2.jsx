import Experiences from "../assignment-2/Experiences.jsx"
import FoundedCompanies from "../assignment-2/FoundedCompanies.jsx"
import ProfileCard from "../assignment-2/ProfileCard.jsx"
import DesktopNav from "./DesktopNav.jsx"
import Tabs from "./Tabs.jsx"


const Assignment2 = () => {
  return (
    <div>
      <DesktopNav />
      <Tabs />
      <div className="container">
        <p className="text-white font-bold text-3xl pt-2 sticky top-0 bg-black py-8 mt-2">Overview</p>
        <ProfileCard />
        <div className="flex flex-col lg:flex-row h-full gap-6">
          <FoundedCompanies />
          <Experiences />
        </div>
      </div>
    </div>
  )
}
export default Assignment2
