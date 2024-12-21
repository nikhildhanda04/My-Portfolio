import React from 'react';
import { Link } from 'react-scroll'; 
import { User as ProfileIcon } from 'lucide-react'; 

const Navbar = () => {
  return (
    <nav className="   bg-opacity-10 font-[velcan] fixed   w-full top-0 left-0 z-50 px-10 py-8 flex justify-between items-center    ">
      <h1 className="text-[30px] text-[white] underline font-[Regarn] font-bold">Nikhil Dhanda</h1>

      <ul className="flex space-x-8 text-[26px] items-end">
        <li className="relative group">
          <Link
            to="home" 
            smooth={true}
            duration={500}
            className="text-white cursor-pointer"
          >
            Home
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer"
          >
            Projects
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer"
          >
            Contact
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
      </ul>

      <div className="ml-4 cursor-pointer">
        <ProfileIcon className="w-12 h-12 p-2 bg-gray-400 rounded-full text-white hover:text-blue-700" />
      </div>
    </nav>
  );
};

export default Navbar;
