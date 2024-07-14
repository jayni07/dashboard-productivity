import React from "react";
import cardboard from '../assets/cardboard.png';
import man from '../assets/man.png';

const Header = () => {
  return (
    <nav className="bg-blue-950 p-6">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img src= "src/assets/cardboard.png" alt="Logo" className="h-8 w-8 mr-2" /> 
        <a href="/To-Do" className="text-white hover:text-gray-300 ml-8 mr-8">To-Do</a>
        <a href="Timer" className="text-white hover:text-gray-300 mr-2">Timer</a>
        
        <span className="text-white text-xl font-bold"></span>
      </div>
      <div className="flex space-x-4">
        <input type="text" placeholder=" Search People.." ></input>
        <img src= "src/assets/man.png" alt="Logo" className="h-8 w-8 mr-2" />
        
      </div>
    </div>
  </nav>
  );
};

export default Header;
