import { Link, useLocation, useNavigate } from "react-router";
import { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import GoogleLogIn from "../components/GoogleLogIn";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInUser } = use(AuthContext);
  const { state } = useLocation();
  console.log(state);
  
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        navigate(state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-10">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-base-200">Please Login!</h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input"
                placeholder="******"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute text-sm right-[25px] top-[32px] cursor-pointer z-50"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary text-base-100 mt-4">
              Login
            </button>
          </fieldset>
        </form>
        <GoogleLogIn />
        <p>
          New to our website? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/signup">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
