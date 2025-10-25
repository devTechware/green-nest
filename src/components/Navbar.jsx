import { NavLink, useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import userPhoto from "../assets/user.png";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signout successful");
        setTimeout(() => navigate("/"), 100);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/plants">Plants</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-base-200">
      <div className="navbar text-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-200 text-base-100 rounded-box z-9999 mt-3 w-52 p-2"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            <img className="w-[100px]" src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <PacmanLoader color="#41bf01" size={15} />
          ) : user ? (
            <div className="dropdown dropdown-end text-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <img
                  src={user?.photoURL || userPhoto}
                  className="h-10 w-10 rounded-full"
                  alt="User Avatar"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-3 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                </li>
                <li>
                  <p className="text-white/80">{user?.email}</p>
                </li>
                <br />
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn bg-[#FFF0E1] text-[#FF8811]"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
              <NavLink
                to="/login"
                className="btn bg-[#15803D] hover:bg-[#166534] text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-3xl min-w-[100px] border-none shadow-md hover:shadow-lg transition-all duration-300"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="btn bg-linear-to-r from-[#A5D6A7] to-[#81C784] hover:from-[#81C784] hover:to-[#66BB6A] text-[#0B3D02] font-semibold text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-3xl min-w-[100px] border-none shadow-md hover:shadow-lg transition-all duration-300"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
