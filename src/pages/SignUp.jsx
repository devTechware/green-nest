import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import GoogleLogIn from "../components/GoogleLogIn";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, updateUser, setLoading } = use(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const photoURL = e.target.photo?.value;
    const password = e.target.password?.value;

    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regEx.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUser(displayName, photoURL)
          .then(() => {
            toast.success("Signup successful.");
            navigate("/");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database.");
        } else if (error.code === "auth/missing-email") {
          toast.error("The email field is required");
        } else if (error.code === "auth/invalid-email") {
          toast.error("The email address is badly formatted.");
        } else {
          toast.error(error.code || "An unexpected error occurred.");
        }
      });
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-b from-[#e8f5e9] to-[#c8e6c9] py-4">
      <div className="card w-full max-w-sm bg-[#ffffff] shadow-xl rounded-2xl border border-[#a5d6a7]">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-[#1b5e20] text-center mb-4">
            Join Green Nest 🌿
          </h1>
          <p className="text-center text-sm text-[#2e7d32] mb-6">
            Create your account to get started
          </p>

          <form onSubmit={handleSignup}>
            <fieldset className="fieldset space-y-4">
              <div>
                <label className="label text-[#2e7d32] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full rounded-xl border-[#a5d6a7] focus:border-[#66bb6a] focus:ring-[#66bb6a]"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div>
                <label className="label text-[#2e7d32] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full rounded-xl border-[#a5d6a7] focus:border-[#66bb6a] focus:ring-[#66bb6a]"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label className="label text-[#2e7d32] font-semibold">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered w-full rounded-xl border-[#a5d6a7] focus:border-[#66bb6a] focus:ring-[#66bb6a]"
                  placeholder="https://your-photo-link.com"
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

              <button className="btn w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-semibold rounded-xl mt-2 border-none">
                Register
              </button>
            </fieldset>
          </form>

          <div className="divider text-[#2e7d32]">OR</div>

          <GoogleLogIn />

          <p className="text-center text-sm text-[#2e7d32] mt-4">
            Already have an account?{" "}
            <Link
              className="font-semibold text-[#388e3c] hover:text-[#66bb6a] transition-colors"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
