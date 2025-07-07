import { useEffect, useState } from "react";
import { setCredentials } from "../../redux/features/auth/authSlice.js";
import { useCreateUserMutation } from "../../redux/api/user.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUser, { isLoading }] = useCreateUserMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  console.log(userInfo);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("Password not matched.");
      } else if (password.length < 8) {
        alert("Password at least 8 characters.");
      } else {
        const res = await createUser({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
      }
    } catch (error) {
      console.error(error.message);
      setPassword("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="-translate-y-[5rem]">
        <div className="mb-5">
          <h1 className="text-5xl">Welcome, </h1>
          <p className="text-xl">Sign in to your account</p>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-xl">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-[#bfbbbb] rounded-xl w-[50rem] px-3 py-2 outline-0 focus:outline-1 focus:outline-black"
            placeholder="Enter your username"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-xl">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-[#bfbbbb] rounded-xl w-[50rem] px-3 py-2 outline-0 focus:outline-1 focus:outline-black"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-xl">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-[#bfbbbb] rounded-xl w-[50rem] px-3 py-2 outline-0 focus:outline-1 focus:outline-black"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-xl">Confirm password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 border-[#bfbbbb] rounded-xl w-[50rem] px-3 py-2 outline-0 focus:outline-1 focus:outline-black"
            placeholder="Enter your password"
          />
        </div>
        <p className="text-xl mb-5">
          Already have an account?
          <Link to="/login" className="hover:underline">
            Sign in
          </Link>
        </p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[100%] py-3 bg-black font-semibold text-white rounded-xl hover:bg-gray-900 cursor-pointer"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default Register;
