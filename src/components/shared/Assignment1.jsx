import Demographics from "../assignment-1/Demographics.jsx"
import Insights from "../assignment-1/Insights.jsx"
import Visitors from "../assignment-1/Visitors.jsx"
import DesktopNav from "./DesktopNav.jsx"
import Tabs from "./Tabs.jsx"

const Assignment1 = () => {
  return (
    <div className="flex flex-col">
      <DesktopNav />
      <Tabs />
      <div className="container flex flex-col gap-4">
        <p className="text-white font-bold text-3xl hidden lg:block pt-2">Overview</p>
        <div className="flex flex-col gap-4 lg:flex-row xl:max-h-72">
          <Visitors />
          <Insights />
        </div>
        <Demographics />
      </div>
    </div>
  )
}
export default Assignment1
