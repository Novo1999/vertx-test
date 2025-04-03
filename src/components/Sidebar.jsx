import React, { useEffect, useState } from 'react';
import avatar from '../assets/avatar.jpg';
import vertxLogo from '../assets/vertx.png';

const Sidebar = ({ isOpen, setIsOpen, children }) => {
  const [isDesktop, setIsDesktop] = useState(true);

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
        <img src={avatar} alt="avatar" className="size-10 rounded-full mx-auto" />
      </div>
      <div
        className={`fixed lg:relative min-h-screen inset-0 lg:left-0 lg:w-1/6 w-64 z-[999] bg-black border-r border-white/40 text-white transition-transform duration-300 transform ${isOpen || isDesktop ? 'translate-x-0' : '-translate-x-full'
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
