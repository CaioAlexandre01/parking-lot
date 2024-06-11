import React, { useState } from 'react';
import { FaHome, FaCog, FaBars } from 'react-icons/fa';
import { TbParking } from "react-icons/tb";
import { ImHistory } from "react-icons/im";
import { RiDashboardLine } from "react-icons/ri";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <aside className={`bg-[#171818] text-white h-screen flex flex-col transition-width duration-300 ${isSidebarOpen ? 'w-52' : 'w-16'}`}>
        <div className="p-4 flex justify-between items-center mt-4">
          {isSidebarOpen && <h1 className="text-2xl font-bold">JP Dev</h1>}
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FaBars className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 mt-10">
          <ul className='flex flex-col gap-5'>
            <li className={`hover:bg-gray-700 p-2 ${activeItem === 'home' ? 'border-l-2 border-white ' : ''}`}>
              <a href="#home" className="flex items-center gap-3 pl-2" onClick={() => setActiveItem('home')}>
                <RiDashboardLine className="w-6 h-6" />
                {isSidebarOpen && <span>Dashboarding</span>}
              </a>
            </li>
            <li className={`hover:bg-gray-700 p-2 ${activeItem === 'parking' ? 'border-l-2 border-white' : ''}`}>
              <a href="#about" className="flex items-center gap-3 pl-2" onClick={() => setActiveItem('parking')}>
                <TbParking className="w-6 h-6" />
                {isSidebarOpen && <span>Parking Map</span>}
              </a>
            </li>
            <li className={`hover:bg-gray-700 p-2 ${activeItem === 'history' ? 'border-l-2 border-white' : ''}`}>
              <a href="#services" className="flex items-center gap-3 pl-2" onClick={() => setActiveItem('history')}>
                <ImHistory className="w-6 h-6" />
                {isSidebarOpen && <span>History</span>}
              </a>
            </li>
          </ul>
        </nav>
        <div className=" mt-auto">
          <a href="#settings" className={`flex items-center gap-2 hover:bg-gray-700 p-2 mb-10 pl-4 ${activeItem === 'settings' ? 'border-l-2 border-white' : ''}`} onClick={() => setActiveItem('settings')}>
            <FaCog className="w-8 h-6" />
            {isSidebarOpen && <span>Settings</span>}
          </a>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
