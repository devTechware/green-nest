import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import GoogleLogIn from "../components/GoogleLogIn";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, updateUser } = use(AuthContext);
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
      .then((result) => {
        updateUser(displayName, photoURL)
          .then(() => {
            console.log(result.user);
            toast.success("Signup successful.");
            navigate("/");
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database.");
        } else {
          toast.error(error.message || "An unexpected error occurred.");
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-10">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-base-200">Please Register!</h1>
        <form onSubmit={handleSignup}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Your photo URL here"
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

            <button className="btn btn-primary text-base-100 mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <GoogleLogIn />
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
