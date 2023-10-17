import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-around p-3 borber-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300">
        <Link to="/"> <h1 className="text-3xl">Auth</h1></Link>
        <ul className="flex gap-6">
            <Link to="/login"> <li> +Login+ </li> </Link>
            <Link to="/signup"> <li> Sign Up </li> </Link>
        </ul>
    </nav>
    );
}

export default Navbar;