import { Link, useLocation, useNavigate } from "react-router";
import { use, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import GoogleLogIn from "../components/GoogleLogIn";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInUser, forgetPassword, setLoading } = use(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then(() => {
        event.target.reset();
        navigate(state || "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid email or password.");
        } else {
          toast.error(error.code || "An unexpected error occurred.");
        }
      });
    setLoading(false);
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    forgetPassword(email)
      .then(() => {
        toast.success("Check your email to reset password");
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((error) => {
        if (error.code === "auth/missing-email") {
          toast.error("Email address required");
        } else {
          toast.error(error.code || "An unexpected error occurred.");
        }
      });
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-b from-[#e8f5e9] to-[#c8e6c9] px-4">
      <div className="card w-full max-w-sm bg-[#ffffff] shadow-xl rounded-2xl border border-[#a5d6a7]">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-[#1b5e20] text-center mb-4">
            Welcome Back 🌿
          </h1>
          <p className="text-center text-sm text-[#2e7d32] mb-6">
            Please log in to continue to{" "}
            <span className="font-semibold">Green Nest</span>
          </p>

          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset space-y-4">
              <div>
                <label className="label text-[#2e7d32] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input input-bordered w-full rounded-xl border-[#a5d6a7] focus:border-[#66bb6a] focus:ring-[#66bb6a]"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="relative">
                <label className="label text-[#2e7d32] font-semibold">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full rounded-xl border-[#a5d6a7] focus:border-[#66bb6a] focus:ring-[#66bb6a]"
                  placeholder="••••••"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-8 text-[#2e7d32] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <div className="flex justify-end">
                <a
                  onClick={handleForgetPassword}
                  className="text-sm text-[#1b5e20] hover:underline cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>

              <button className="btn w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-semibold rounded-xl mt-2 border-none">
                Login
              </button>
            </fieldset>
          </form>

          <div className="divider text-[#2e7d32]">OR</div>

          <GoogleLogIn />

          <p className="text-center text-sm text-[#2e7d32] mt-4">
            New to Green Nest?{" "}
            <Link
              className="font-semibold text-[#388e3c] hover:text-[#66bb6a] transition-colors"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
