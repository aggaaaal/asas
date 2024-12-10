import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Furniro</h1>
      <nav>
        <a href="#" className="text-gray-600 hover:text-gray-800 mx-4">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 mx-4">
          Shop
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 mx-4">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
