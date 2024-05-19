import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import "react-responsive-modal/styles.css";
import { AuthContext } from "../providers/AuthProvider";
const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(user.displayName || "");
  const [newPhotoURL, setNewPhotoURL] = useState(user.photoURL || "");

  const handleUpdateProfile = () => {
    // Call the update profile function from AuthContext
    updateUserProfile(newName, newPhotoURL);
    window.location.reload(); // First reload
    setTimeout(() => {
      window.location.reload(); // Second reload after a short delay
    }, 100);
  };

  const handleReload = () => {
    window.location.reload(); // First reload
  };

  return (
    <div className="flex justify-center items-center h-[500px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
      </Helmet>
      <div className="text-center">
        <img
          className="mx-auto w-[150px] rounded-full"
          referrerPolicy="no-referrer"
          alt="User Profile Photo"
          src={user?.photoURL}
        />
        <h1 className="text-4xl font-bold">{user?.displayName}</h1>
        <p>{user?.email}</p>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn bg-[#004274] text-white hover:text-black mt-5"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Update Profile
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-[#815df2]]">
            <h3 className="font-bold  mb-5 text-lg">Apply Now</h3>

            <form>
              <label className="form-control w-full">
                <div className="label"></div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={newName}
                  className="input input-bordered w-full"
                  onChange={(e) => setNewName(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label"></div>
                <input
                  type="text"
                  placeholder="Enter profile photo URL"
                  value={newPhotoURL}
                  className="input input-bordered w-full"
                  onChange={(e) => setNewPhotoURL(e.target.value)}
                />
              </label>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
                <button
                  className="btn"
                  onClick={() => {
                    handleUpdateProfile();
                    handleUpdateProfile();
                    handleUpdateProfile();
                    handleUpdateProfile();
                  }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div className=" flex flex-col">
<h2>Edit Profile</h2>



</div> */
}
