import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from "../api_call/auth_api";
import { setUser } from "../redux/slice/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { access_token, user } = useSelector((state) => state.auth);
  const getUserLoggedIn = async () => {
    const getUser = await getCurrentUser(access_token);
    dispatch(setUser(getUser));
    console.log("User", user);
  };
  useEffect(() => {
    getUserLoggedIn();
  }, []);
  return (
    <div className="bg-zinc-900 rounded-t-lg e-full h-14 flex items-center">
      <nav className="flex items-center w-full justify-between px-4 mr-10">
        <div className="flex gap-4 text-2xl ml-[1rem]">
          <Link to={""}>
            <FaChevronLeft className="bg-zinc-800 rounded-full w-7 h-7 p-1 cursor-pointer" />
          </Link>
          <Link to={""}>
            <FaChevronRight className="bg-zinc-800 rounded-full w-7 h-7 p-1 cursor-pointer" />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <h2 className="text-gray-300 font-bold font-sans duration-200 hover:text-white hover:scale-110 cursor-pointer">
            {user?.display_name}
          </h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
