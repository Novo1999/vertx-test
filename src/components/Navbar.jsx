import { BsThreeDotsVertical } from "react-icons/bs";
import avatar from '../assets/avatar.jpg';
import vertxLogo from '../assets/vertx.png';

const Navbar = () => {
  return (
    <nav className="text-white flex justify-between items-center py-4">
      <img src={avatar} alt="avatar" className="size-8 rounded-full" />
      <img src={vertxLogo} alt="avatar" className="size-8" />
      <BsThreeDotsVertical className="text-xl" />
    </nav>
  )
}
export default Navbar
