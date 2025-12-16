import React from "react";
import { Link } from "react-router";
import SocalLogIn from "../../Components/SocalLogIn/SocalLogIn";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-[90vh]">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Your Name" />
                {/* Email */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                {/* Photo Url */}
                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral w-full mt-4">
                  Register
                </button>
              </fieldset>
              <Link to={`/logIn`}>
                <p className="text-xs font-semibold my-2">
                  Already have an account?{" "}
                  <span className="text-blue-700">Please LogIn.</span>
                </p>
              </Link>
            </form>
            <div className="divider">OR</div>
            <SocalLogIn></SocalLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
