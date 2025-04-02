import Demographics from "./components/Demographics.jsx"
import Insights from "./components/Insights.jsx"
import Navbar from "./components/Navbar.jsx"
import Tabs from "./components/Tabs.jsx"
import Visitors from "./components/Visitors.jsx"

const App = () => {
  return (
    <main className="bg-black min-h-screen">
      <div className="container flex flex-col gap-4">
        <Navbar />
        <Tabs />
        <Visitors />
        <Insights />
        <Demographics />
      </div>
    </main>
  )
}
export default App
