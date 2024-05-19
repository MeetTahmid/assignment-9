import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../../src/assets/login.jpg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const signUpEvent = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return; // Stop execution if password requirements are not met
    }

    try {
      // User Registration
      const result = await createUser(email, password);

      // Update user profile
      await updateUserProfile(name, photo);

      // Update user context
      setUser({ ...result?.user, photoURL: photo, displayName: name });

      // Send email data to server
      const { data } = await axios.post(
        "/api/email",
        { email: result?.user?.email },
        { withCredentials: true }
      );

      // Show success message
      toast.success("Signup Successful");
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during signup.");
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${img})`, // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] py-12">
        <div className="flex justify-center items-center  w-full max-w-sm mx-auto overflow-hidden  lg:max-w-4xl ">
          <div
            className="w-full px-6 py-8 md:px-8 lg:w-1/2"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.247)",
            }}
          >
            <div className="flex justify-center mx-auto"></div>

            <p className="mt-3 text-xl text-center text-white ">
              Get Your Free Account Now.
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>
              <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                Registration with email
              </div>
              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <form onSubmit={signUpEvent}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-white "
                  htmlFor="name"
                >
                  Username
                </label>
                <input
                  id="name"
                  required
                  autoComplete="name"
                  name="name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>

              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-white"
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  required
                  autoComplete="photo"
                  name="photo"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>

              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-white "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  required
                  autoComplete="email"
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-white "
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                  {/* Toggle button for password visibility */}
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-400 absolute right-3 mt-3 focus:outline-none focus:text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <input
                    id="loggingPassword"
                    autoComplete="current-password"
                    name="password"
                    required
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type={showPassword ? "text" : "password"} // Toggle password visibility based on state
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#00AEEF] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>
              <Link
                to="/login"
                className="text-xs text-gray-500 uppercase  hover:underline"
              >
                or sign in
              </Link>
              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
