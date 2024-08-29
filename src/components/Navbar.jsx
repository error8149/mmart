import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/ism.png";
import user from "../assets/user.png";
import { SidebarContext } from '../contexts/SidebarContext';

export default function Navbar() {
  const {isOpen, setIsOpen}=useContext(SidebarContext);
  return (
    <nav className="bg-gray-700 pt-4">
      <div className="container mx-auto flex justify-between items-center pb-2">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MMART Logo" className="h-8 pl-5 text-blue-500" />
          <span className="ml-2 text-white text-xl font-semibold">MMART</span>
        </Link>
        
        <div className="hidden md:flex space-x-10 ">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="#" className="text-white hover:text-gray-300">About</Link>
          <Link to="#" className="text-white hover:text-gray-300">Services</Link>
          <Link to="#" className="text-white hover:text-gray-300">Contact</Link>
          
        </div>
        <div className='flex space-x-3'>
          <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative'> 
        
          </div>
      <Link to="/SignIn"  className="p-3 rounded-full hover:bg-gray-950">
        <img src={user} alt="User" className='h-6 w-6'/>
      </Link>
      </div>
      </div>
      <div className=" px-7 bg-gray-800 space-x-8 md:hidden  py-3 text-white  ">
          <Link to="/" >Home</Link>
          <Link to="#" >About</Link>
          <Link to="#" >Services</Link>
          <Link to="#" >Contact</Link>
        </div>
      
    </nav>
  );
}
