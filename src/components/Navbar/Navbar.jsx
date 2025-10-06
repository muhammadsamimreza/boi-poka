import React from "react";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router";
import './Navbar.css'
const Navbar = () => {
  
  return (
    <div className="pageFont">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
               <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/booklist">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/read">Pages to Read</NavLink>
              </li>
              </ul>
            </div>
            <Link to="/" className="text-2xl font-bold">
              {" "}
              BoiPoka
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/booklist">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/read">Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <a className="btn bg-green-500 text-white font-medium">Log In</a>
            <a className="btn bg-teal-400 text-white font-medium">Sign Up</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
