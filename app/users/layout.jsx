import React from "react";

const NavBar = ({ children }) => {
  return (
    <>
      <header className="w-full bg-slate-500 h-10 text-white text-center leading-10 font-bold">
        Navbar
      </header>
      {children}
    </>
  );
};

export default NavBar;
