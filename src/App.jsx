import { useState } from "react"
import MobileMenu from "./components/assignment-1/MobileMenu.jsx"
import Navbar from "./components/assignment-1/Navbar.jsx"
import Sidebar from "./components/assignment-1/Sidebar.jsx"
import Assignment1 from "./components/shared/Assignment1.jsx"
import Assignment2 from "./components/shared/Assignment2.jsx"
import { useAssignment } from "./context/AssignmentContext.jsx"

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { assignment } = useAssignment()

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className="bg-black">
      <Navbar handleOpenSidebar={handleOpenSidebar} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        {!assignment ? <Assignment1 /> : <Assignment2 />}
      </Sidebar>
      <MobileMenu />
    </main>
  )
}
export default App
