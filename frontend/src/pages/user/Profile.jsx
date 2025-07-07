import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import {
  useGetUserProfileQuery,
  useLogoutCurrentUserMutation,
  useUpdateProfileMutation,
} from "../../redux/api/user";
import { useEffect, useState } from "react";
import { logout } from "../../redux/features/auth/authSlice";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { data: profile, isLoading } = useGetUserProfileQuery();
  const [updateProfile, { isLoading: updatingProfile }] =
    useUpdateProfileMutation();
  const [logoutCurrentUser, { isLoading: isLogout }] =
    useLogoutCurrentUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      setUsername(profile?.username || "");
      setEmail(profile?.email || "");
    }
  }, [isLoading, profile]);

  const handleLogout = async (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (!confirmLogout) return;

    try {
      const res = await logoutCurrentUser();
      dispatch(logout());
    } catch (error) {
      console.log(error?.data?.message || error.message);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("Password not matched!");
      } else if (!username || !email || !password) {
        alert("Please fill all the fields");
      } else {
        const res = await updateProfile({ username, email, password });
        console.log(res);
      }
    } catch (error) {
      console.log(error?.data.message || error.message);
    }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-10 px-4 transition">
        <div>
          <img
            src="https://picsum.photos/id/1005/500/400"
            alt="Profile Demo"
            className="rounded-xl"
          />
        </div>
        <div className="w-full md:w-[40rem]">
          <h1 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-10">
            HELLO, {userInfo?.username?.toUpperCase() || ""}
          </h1>
          <div>
            <label className="block text-lg">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-1 border-[#2f2f2f] px-3 py-4 rounded-xl w-full outline-0 focus:ring-2 focus:ring-black"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-lg">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-1 border-[#2f2f2f] px-3 py-4 rounded-xl w-full outline-0 focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-lg">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-1 border-[#2f2f2f] px-3 py-4 rounded-xl w-full outline-0 focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-lg">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-1 border-[#2f2f2f] px-3 py-4 rounded-xl w-full outline-0 focus:ring-2 focus:ring-black"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex justify-center items-center gap-5 mt-10">
            <button
              onClick={handleUpdate}
              className="text-center text-xs md:text-[1.2rem] py-4 border border-[#494949] rounded-xl w-full cursor-pointer bg-black text-white font-semibold hover:bg-[#393939]"
            >
              {updatingProfile ? "Updating..." : "Update"}
            </button>
            {userInfo ? (
              <button
                onClick={handleLogout}
                className="bg-black text-white p-4 hover:bg-[#393939] cursor-pointer w-[10rem] flex justify-center items-center gap-2 rounded-xl"
              >
                {isLogout ? (
                  "Loading..."
                ) : (
                  <>
                    <span className="text-xs font-semibold md:text-[1rem]">
                      Log Out
                    </span>
                    <FiLogOut className="text-xs md:text-lg" />
                  </>
                )}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
