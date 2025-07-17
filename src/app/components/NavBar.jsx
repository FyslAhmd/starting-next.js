import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-around items-center text-lg p-2">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
