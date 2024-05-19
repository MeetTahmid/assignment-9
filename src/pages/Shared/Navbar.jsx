import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="bg-[#004274] py-4">
      <div className="navbar container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <FaBars className="text-white" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  mt-3 z-[900] p-2 shadow bg-base-100 rounded-none w-52"
          >
            <li>
             <Link to="/"><a>Home</a></Link>
            </li>
            <li>
             <Link to="/gallery"><a>Gallery</a></Link>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/" className="navbar-center text-white">
        <a className="btn btn-ghost text-xl">Zihom</a>
      </Link>
      <div className="navbar-end">
        <ul>
          {!user && (
            <li>
              <Link to="/login">
                <button className="btn btn-outline rounded-none px-8 text-white bg-white/20 hover:bg-[#00AEEF]">Login</button>
              </Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content   z-[9999] bg-white p-2 shadow rounded-none w-52">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className=" rounded-none "
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
