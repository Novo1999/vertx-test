import { useState } from "react"
import Demographics from "./components/Demographics.jsx"
import DesktopNav from "./components/DesktopNav.jsx"
import Insights from "./components/Insights.jsx"
import MobileMenu from "./components/MobileMenu.jsx"
import Navbar from "./components/Navbar.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Tabs from "./components/Tabs.jsx"
import Visitors from "./components/Visitors.jsx"

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className="bg-black">
      <Navbar handleOpenSidebar={handleOpenSidebar} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col">
          <DesktopNav />
          <div className="container flex flex-col gap-4">
            <Tabs />
            <div className="flex flex-col gap-4 lg:flex-row xl:max-h-72">
              <Visitors />
              <Insights />
            </div>
            <Demographics />
            <MobileMenu />
          </div>
        </div>
      </Sidebar>
    </main>
  )
}
export default App
