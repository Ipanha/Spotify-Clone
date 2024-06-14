import { GoHomeFill } from "react-icons/go";

import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="ml-2 h-full  w-[17rem] max-w-[17rem] text-gray-400  flex flex-col gap-1.5">
      <div className="bg-zinc-900 w-[17rem] p-5 rounded-lg">
        <Link to={"/"}>
          <img
            className="w-20"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="Spotify"
          />
        </Link>
        <div className="mt-[1rem] flex flex-col gap-3">
          <Link to={"/"}>
            <div className="flex gap-5 duration-200  hover:text-white ">
              <GoHomeFill className="text-3xl" />
              <h2 className="text-1xl font-bold font-sans mt-[.2rem] ">Home</h2>
            </div>
          </Link>
          <Link to={"/search"}>
            <div className="flex gap-5 duration-200 hover:text-white ">
              <CiSearch className="text-3xl" />
              <h2 className="text-1xl font-bold font-sans">Search</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-zinc-900 w-[17rem] p-2 rounded-lg">
        <Link to={"library"}>
          <div className="flex gap-5 p-5  items-center w-full justify-between">
            <div className="flex items-center gap-1  hover:text-white duration-200">
              <VscLibrary className="text-3xl" />
              <h2 className="text-1xl font-sans font-bold">Your Library</h2>
            </div>
            <div>
              <FaPlus className=" hover:text-white duration-200" />
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-2 p-5 mt-5 bg-zinc-800 rounded-lg">
          <h2 className="font-bold font-sans text-white">
            Create your first playlist
          </h2>
          <h2 className="text-white font-sans">
            It&apos;s easy, we&apos;ll help you
          </h2>
          <Link>
            <h2 className="text-black font-sans bg-white inline-block px-5 py-1 rounded-full font-bold ">
              Create playlist
            </h2>
          </Link>
        </div>
        <div className="flex flex-col gap-2 p-5 mt-5 bg-zinc-800 rounded-lg">
          <h2 className="font-bold text-white font-sans">
            Let&apos;s find some podcasts to follow
          </h2>
          <h2 className="text-white font-sans">
            we&apos;s keep you updated on new episode
          </h2>
          <Link>
            <h2 className="text-black font-sans bg-white inline-block px-5 py-1 rounded-full font-bold">
              Browse podcasts
            </h2>
          </Link>
        </div>
        <div className="flex flex-col  mt-16 gap-3 px-5 py-4 ">
          <div className="flex gap-4">
            <Link to={""}>
              <p style={{ fontSize: ".7rem" }}>Legal</p>
            </Link>
            <Link to={""}>
              <p style={{ fontSize: ".7rem" }}>Safety & Privacy Center</p>
            </Link>
          </div>
          <div className="flex gap-2">
            <Link to={""}>
              <p style={{ fontSize: ".7rem" }}>Privacy Policy</p>
            </Link>
            <Link to={""}>
              <p style={{ fontSize: ".7rem" }}>Cookies</p>
            </Link>
            <Link to={""}>
              <p style={{ fontSize: ".7rem" }}>About Ads</p>
            </Link>
          </div>
          <Link>
            <p style={{ fontSize: ".7rem" }}>Accessibility</p>
          </Link>
          <Link>
            <p style={{ fontSize: ".7rem" }}>Cookies</p>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer border border-white w-[7rem] mt-4 h-8 px-2 rounded-full text-white hover:scale-105  ">
            <TbWorld />
            <h3 className="font-bold font-sans">English</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
