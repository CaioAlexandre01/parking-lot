import React from "react";
import { CiSearch } from "react-icons/ci";

const Dashboarding = () => {
  return (
    <>
      <main className="flex w-screen rounded-2xl bg-[#F1F1F1]">
        <div className="flex bg-white w-full h-20 rounded-tl-2xl items-center p-4">
          <div className="relative flex items-center w-full">
            <CiSearch className="absolute left-3 text-gray-500" />
            <input 
              placeholder="Search here..." 
              type="text" 
              className="pl-10 pr-4 py-2 border-b-2 border-zinc-400 outline-none w-full"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboarding;
