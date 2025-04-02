import { useState } from "react"
import Demographics from "./components/Demographics.jsx"
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
    <main className="bg-black min-h-screen">
      <Navbar handleOpenSidebar={handleOpenSidebar} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-4">
          <nav className="hidden lg:flex min-h-16 border-b border-white/40">
            <ul className="text-white flex font-semibold justify-between w-full text-xl">
              <li className="border-l border-white/40 pt-4 pl-4">Analytics</li>
              <div className="flex gap-12 *:border-l *:border-white/40 *:pt-4 *:pl-4">
                <li>Activity</li>
                <li className="pr-4">Logout</li>
              </div>
            </ul>
          </nav>
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
