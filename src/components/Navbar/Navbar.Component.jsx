import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavSm() {
  return (
  <>
   <div className= "text-white flex items-centers justify-between">
    <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
      <spam className=" text-gray-400 text-xs flex place-items-center cursor-pointer hover:text-white">
      Kolkata <BiChevronDown/>
      </spam>
      
    </div>
    <div className="w-8 h-8">
      <BiSearch className="w-full h-full" />

    </div>
   </div>
  
  </>
  );
}

function NavMd() {
  return <>

  <div className="w-10 h-10">
        <img src="https://asset.brandfetch.io/id4J58sqa_/idJpZkXTXC.jpeg" alt="logo" className="w-full h-full" />
      </div>
   <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
    <BiSearch/>
    <input type="search" className="w-full bg-transparent border-none focus:outline-none"/>
   </div>
  </>;
}

function NavLg() {
  return <>
    <div className="container flex mx-auto px-4 items-center justify-between">
      <div className="flex items-center w-1/2 gap-3">
      <div className="w-10 h-10">
        <img src="https://asset.brandfetch.io/id4J58sqa_/idJpZkXTXC.jpeg" alt="logo" className="w-full h-full" />
      </div>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input type="search" className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, plays, sports and activites"
        />
      </div>
      </div>
      <div className="flex items-center gap-3">
        <spam className=" text-gray-200 text-base flex items-center cursor-pointer hover:text-white">Kolkata <BiChevronDown/> 
        </spam>
        <Link
            to="/plays"
            className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
          >
            Plays
          </Link>
        <button className=" bg-red-600 text-white px-2 py-1 text-sm rounded">
          Sign In
        </button>
        <div className="w-8 h-8 text-white"><BiMenu className="w-full h-full"/></div>
      </div>
    </div>
  </>;
}

//Main Component 
const Navbar = () => {
  return <nav className=" bg-slate-700 px-4 py-3 ">
    { /* Mobile  Screen Navbar */}
    <div className="md:hidden">
      <NavSm />
    </div>
    { /* Medium/Tab Screen Navbar */}
    <div className="hidden md:flex lg:hidden">
      <NavMd />
    </div>
    { /* Large Screen Navbar */}
    <div className="hidden md:hidden lg:flex">
      <NavLg />
    </div>
  </nav>
};

export default Navbar;
