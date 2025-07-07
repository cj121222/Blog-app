import { FaPenNib } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

import { useSelector } from "react-redux";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [scrolled, setScrolled] = useState(false);

  console.log(userInfo);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white px-10 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center h-16">
        <h1 className="ml-[1rem] md:ml-[5rem] text-xl font-semibold flex justify-center items-center gap-5">
          Blog app <FaPenNib />
        </h1>
        <div className="flex justify-center items-center gap-5">
          {userInfo && (
            <Link to="/" className="cursor-pointer">
              <AiOutlineHome className="text-xl md:text-2xl" />
            </Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <>
              <Link to="/dashboard" className="cursor-pointer">
                <MdSpaceDashboard className="text-xl md:text-2xl" />
              </Link>
              <Link to="/create" className="cursor-pointer">
                <FaRegPlusSquare className="text-xl md:text-2xl" />
              </Link>
            </>
          )}
          {userInfo && (
            <Link to="/profile" className="cursor-pointer">
              <CgProfile className="text-xl md:text-2xl" />
            </Link>
          )}

          <div className={`${!userInfo ? "mr-10" : ""} cursor-pointer`}>
            <FaMoon className="text-xl md:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
