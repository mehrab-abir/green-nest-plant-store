import React, { use } from "react";
import Header from "../Components/Header";
import { AuthContext } from "../Authentication/AuthContext";
import Footer from "../Components/Footer";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import defaultAvatar from "../assets/images/user.png";

const Profile = () => {
  const { user, editProfile, setUser, setLoading } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;

    const displayName = form.name.value;
    const photoURL = form.photo.value;

    editProfile({displayName,photoURL})
    .then(()=>{
        setUser((prevUser)=>({
            ...prevUser,
            displayName,
            photoURL
        }));
        toast.success("Profile Updated");
    })
    .catch(error=>toast.error(error.message))
    .finally(()=>setLoading(false));
  };

  const userAvatar =
      user?.photoURL || user?.providerData?.[0]?.photoURL || defaultAvatar;

  return (
    <div>
      <title>Profile</title>
      <Header></Header>
      <div className="w-11/12 mx-auto pt-28 flex flex-col items-center justify-center mb-10">
        <h1 className="text-2xl font-semibold text-center mb-2">My Profile</h1>
        <div className="w-1/2 px-2 py-6 shadow-2xl pb-4">
          <div className="flex flex-col items-center justify-center">
            <img
              src={userAvatar}
              alt=""
              className="w-28 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-600 mt-2">{user.displayName}</h3>
          </div>

          <div className="mt-10 px-5">
            <div className="bg-gray-100 p-2 mb-5 rounded-xl">
              <span className="text-gray-500 flex items-center gap-2">
                <FaRegUser className="text-lg" />
                Name
              </span>
              <p>{user.displayName}</p>
            </div>

            <div className="bg-gray-100 p-2 mb-5 rounded-xl">
              <span className="text-gray-500 flex items-center gap-2">
                <MdOutlineMailOutline className="text-lg" />
                Email Address
              </span>
              <p>{user.email}</p>
            </div>
            <button
              onClick={() =>
                document.getElementById("update_profile_modal").showModal()
              }
              className="btn bg-green-600 text-white w-full"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* update profile modal  */}
      <dialog id="update_profile_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Update name and photo URL</h3>
          <form onSubmit={(e) => handleUpdateProfile(e)}>
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="input w-full outline-none"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-col mt-2">
              <label>Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full outline-none"
                placeholder="Photo URL"
              />
            </div>

            <button type="submit" className="btn bg-green-600 text-white mt-3">
              Save Changes
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Profile;
