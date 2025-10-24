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
                  className="h-[40px] w-[40px] rounded-full"
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
            <div className="flex gap-3">
              <NavLink to="/login" className="btn btn-primary text-base-100">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn btn-primary text-base-100">
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
