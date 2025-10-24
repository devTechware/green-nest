import { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import userPhoto from "../assets/user.png";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value || user.displayName;
    const photoURL = e.target.photo?.value || user.photoURL;

    updateUser(displayName, photoURL)
      .then(() => {
        toast.success("User Profile Updated.");
        setShowUpdateForm(false);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="card lg:card-side bg-gradient-to-r from-green-50 to-emerald-100 shadow-md rounded-3xl border border-emerald-200 md:w-3/4 mx-auto overflow-hidden">
        {/* Profile Image Section */}
        <figure className="flex items-center justify-center bg-emerald-200/30 md:w-1/2 p-6">
          <img
            className="w-[200px] md:w-[250px] rounded-full border-4 border-emerald-400 shadow-md transition-transform duration-300 hover:scale-105"
            src={user.photoURL || userPhoto}
            alt={user.displayName}
          />
        </figure>

        {/* Profile Details / Update Form */}
        <div className="card-body md:w-1/2">
          {showUpdateForm ? (
            <form onSubmit={handleUpdateProfile} className="space-y-3">
              <h2 className="text-2xl font-semibold text-emerald-700">
                Update Profile
              </h2>

              <div className="form-control">
                <label className="label font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  className="input input-bordered focus:border-emerald-500"
                  placeholder="Your name"
                />
              </div>

              <div className="form-control">
                <label className="label font-medium">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={user.photoURL}
                  className="input input-bordered focus:border-emerald-500"
                  placeholder="Your photo URL here"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  type="submit"
                  className="btn bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setShowUpdateForm(false)}
                  className="btn btn-outline border-emerald-500 text-emerald-700 hover:bg-emerald-100"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h2 className="text-3xl font-semibold text-emerald-700 mb-2">
                {user.displayName}
              </h2>
              <p className="text-gray-700 text-lg mb-4">{user.email}</p>

              <button
                onClick={() => setShowUpdateForm(true)}
                className="btn bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>

    // <div className="w-11/12 mx-auto my-10">
    //   <div className="card lg:card-side bg-base-100 shadow-sm  justify-center md:w-1/2 mx-auto">
    //     <figure>
    //       <img
    //         className="w-[200px] md:w-[300px] rounded-2xl p-10"
    //         src={user.photoURL || userPhoto}
    //         alt={user.displayName}
    //       />
    //     </figure>
    //     {showUpdateForm ? (
    //       <div className="card-body">
    //         <form onSubmit={handleUpdateProfile}>
    //           <fieldset className="fieldset">
    //             <label className="label">Name</label>
    //             <input
    //               type="text"
    //               name="name"
    //               className="input"
    //               placeholder="Name"
    //             />

    //             <label className="label">Photo URL</label>
    //             <input
    //               type="text"
    //               name="photo"
    //               className="input"
    //               placeholder="Your photo URL here"
    //             />

    //             <div className="flex flex-col">
    //               <button className="btn btn-primary text-base-100 mt-4">
    //                 Update
    //               </button>
    //               <button
    //                 onClick={() => setShowUpdateForm(false)}
    //                 className="btn btn-primary text-base-100 mt-4"
    //               >
    //                 Cancel
    //               </button>
    //             </div>
    //           </fieldset>
    //         </form>
    //       </div>
    //     ) : (
    //       <div className="card-body">
    //         <h2 className="card-title">{user.displayName}</h2>
    //         <p>{user.email}</p>
    //         <div className="card-actions">
    //           <button
    //             onClick={() => setShowUpdateForm(true)}
    //             className="btn btn-primary text-base-100"
    //           >
    //             Update Profile
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default MyProfile;
