import React from 'react';
import { Link } from 'react-scroll'; 
import { User as ProfileIcon } from 'lucide-react'; 

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-30 font-[velcan] fixed backdrop-blur-sm  w-full top-0 left-0 z-50 px-10 py-8 flex justify-between items-center    ">
      <h1 className="text-[30px] text-[#333333] underline  font-bold">MyWebsite</h1>

      <ul className="flex space-x-8 text-[22px] items-end">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="ml-4 cursor-pointer">
        <ProfileIcon className="w-12 h-12 p-2 bg-gray-400 rounded-full text-white hover:text-blue-700" />
      </div>
    </nav>
  );
};

export default Navbar;
