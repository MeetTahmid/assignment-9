import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-base-100 border-r rtl:border-r-0 rtl:border-l">
        <h3 className="text-lg">You Have Unlocked For Sign in</h3>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <Link
              to="/addjob"
              className="flex items-center px-4 py-2 mt-5   transition-colors duration-300 transform rounded-md   hover: dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              Add A Job
            </Link>
            <Link
              to="/myjobs"
              className="flex items-center px-4 py-2 mt-5   transition-colors duration-300 transform rounded-md   hover: dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              My Posted Jobs
            </Link>
            <Link
              to="/applied"
              className="flex items-center px-4 py-2 mt-5   transition-colors duration-300 transform rounded-md   hover: dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              Applied Jobs
            </Link>
          </nav>
        </div>
      </aside>
      <aside className="mt-32 container mx-auto flex justify-center">
        <div className="text-center">
          <img
          className="mx-auto w-[150px] rounded-full"
            referrerPolicy="no-referrer"
            alt="User Profile Photo"
            src={user?.photoURL}
          />
          <h1 className="text-4xl font-bold"> {user?.displayName}</h1>
          {user?.email}
        </div>
      </aside>
    </div>
  );
};

export default Profile;
