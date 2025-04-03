const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex min-h-16 border-b border-white/40 sticky top-0 bg-black z-[999]">
      <ul className="text-white flex font-semibold justify-between w-full text-xl *:cursor-pointer">
        <li className="pt-4 pl-8">Analytics</li>
        <div className="flex *:border-l *:border-white/40 *:pt-4">
          <li className="px-8">Activity</li>
          <li className="px-8">Log out</li>
        </div>
      </ul>
    </nav>
  )
}
export default DesktopNav
