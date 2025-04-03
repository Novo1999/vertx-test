import { BsThreeDotsVertical } from "react-icons/bs";
import avatar from '../assets/avatar.jpg';
import vertxLogo from '../assets/vertx.png';

const Navbar = ({ handleOpenSidebar }) => {
  return (
    <>
      <nav className="text-white flex sticky top-0 bg-black z-50 justify-between items-center py-4 px-4 lg:hidden ">
        <img src={avatar} alt="avatar" className="size-8 rounded-full" />
        <img src={vertxLogo} alt="avatar" className="size-8" />
        <button onClick={handleOpenSidebar} className="cursor-pointer">
          <BsThreeDotsVertical className="text-xl" />
        </button>
      </nav>
    </>
  )
}
export default Navbar
