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
      <div className="card lg:card-side bg-base-100 shadow-sm  justify-center md:w-1/2 mx-auto">
        <figure>
          <img
            className="w-[200px] md:w-[300px] rounded-2xl p-10"
            src={user.photoURL || userPhoto}
            alt={user.displayName}
          />
        </figure>
        {showUpdateForm ? (
          <div className="card-body">
            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Your photo URL here"
                />

                <button className="btn btn-primary text-base-100 mt-4">
                  Update
                </button>
              </fieldset>
            </form>
          </div>
        ) : (
          <div className="card-body">
            <h2 className="card-title">{user.displayName}</h2>
            <p>{user.email}</p>
            <div className="card-actions">
              <button
                onClick={() => setShowUpdateForm(true)}
                className="btn btn-primary text-base-100"
              >
                Update Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
