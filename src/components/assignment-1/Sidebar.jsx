import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import avatar from '../../assets/avatar.jpg';
import vertxLogo from '../../assets/vertx.png';
import { useAssignment } from '../../context/AssignmentContext.jsx';

const Sidebar = ({ isOpen, setIsOpen, children }) => {
  const [isDesktop, setIsDesktop] = useState(true);
  const { assignment, toggleAssignment } = useAssignment()

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
        setIsOpen(true);
      } else {
        setIsDesktop(false);
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen">
      <div
        className={`fixed inset-0 bg-black/50 bg-opacity-50 z-[999] lg:hidden transition-transform duration-300  ${isOpen ? 'block' : 'hidden'
          }`}
        onClick={toggleSidebar}
      />
      {/* logo+avatar */}
      <div className='min-w-16 hidden lg:flex flex-col gap-4'>
        <div className='border-b border-white/40 min-h-16 sticky top-0 bg-black flex justify-center items-center'>
          <img src={vertxLogo} alt="avatar" className="size-10 p-2 bg-white rounded-full" />
        </div>
        <div className={`flex flex-col ${!assignment ? "justify-between" : "gap-4"} h-full max-h-[90vh] items-center`}>
          {!assignment && <img src={avatar} alt="avatar" className="size-10 rounded-full mx-auto" />}
          {assignment && (
            <div className="flex flex-col gap-4 *:hover:bg-slate-200 *:cursor-pointer">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="relative w-10 h-10 mx-auto">
                  <img src={avatar} alt="avatar" className="size-10 rounded-full" />
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${index % 2 !== 0 ? "bg-red-700" : "bg-green-700"
                      }`}
                  />
                </div>
              ))}
            </div>
          )}

          <FaPlus className='text-white fixed bottom-10' />
        </div>
      </div>
      <div
        className={`fixed lg:relative min-h-screen inset-0 lg:left-0 lg:w-1/6 w-64 z-[9999] bg-black border-r border-white/40 text-white transition-transform duration-300 transform ${isOpen || isDesktop ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
      >
        <div className='sticky top-0'>
          <h2 className="text-2xl font-bold p-[15.5px] border-b border-white/40 ">VertxLabs. </h2>
          <ul className="flex flex-col gap-8 p-4 text-xl **:hover:text-white **:transition **:duration-300">
            <li><a href="#" className="text-gray-500">Dashboard</a></li>
            <li><a href="#" className="text-white">Analytics</a></li>
            <li><a href="#" className="text-gray-500">Connect</a></li>
            <li><a href="#" className="text-gray-500">Dealroom</a></li>
            <li><a href="#" className="text-gray-500">Profile</a></li>
            <li><a href="#" className="text-gray-500">Settings</a></li>
            <li className='animate-bounce' onClick={() => {
              toggleAssignment()
              setIsOpen(false)
            }}><a href="#" className="text-red-500">Assignment {assignment ? 1 : 2}</a></li>
          </ul>
        </div>
      </div>

      <div
        className={`transition-all duration-300 lg:w-5/6 w-full mx-auto`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
