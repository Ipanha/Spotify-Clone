import { Link } from "react-router-dom";
import { IoMdPlay } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPlaylist } from "../../redux/slice/spotifySlice";
import { getAllPlaylists } from "../../api_call/spotify_app";

const Home = () => {
  const dispatch = useDispatch();

  const getPlaylist = async () => {
    if (access_token) {
      try {
        const playlist = await getAllPlaylists(access_token);
        dispatch(setPlaylist(playlist));
      } catch (error) {
        console.error("Failed to fetch playlists", error);
      }
    }
  };

  useEffect(() => {
    getPlaylist();
  }, []);
  const { access_token } = useSelector((state) => state.auth); // Ensure this is correctly set
  const { playlists } = useSelector((state) => state.spotify);

  console.log(playlists);

  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV99ArLYNGbgKohfq_OqqytpSDqRSPYtOfuw&s";

  const popularArtist = [1, 2, 3, 4, 5, 6, 7];
  const popularAlbums = [1, 2, 3, 4, 5, 6, 7];
  const popularRadio = [1, 2, 3, 4, 5, 6, 7];
  const featuredCharts = [1, 2, 3, 4, 5, 6, 7];
  const spotifyPlaylist = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-gradient-to-t from-zinc-900 to-zinc-800 h-full py-5 px-5 overflow-auto">
      <div className="mb-4 h-auto">
        {/* Playlists */}
        <div className="flex justify-between">
          <Link to={""}>
            <h1 className="font-bold font-sans text-2xl hover:underline">
              Play Lists
            </h1>
          </Link>
          <Link to={""} className="text-gray-400  hover:underline">
            <p>Show all</p>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4  h-72 overflow-hidden  ">
          {playlists?.items.map((playlist, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center gap-5 mt-4 cursor-pointer hover:bg-zinc-800 rounded-lg p-2 w-84 group"
            >
              <img
                className=" md:w-14 md:h-14 lg:w-24 lg:h-24 rounded-lg"
                src={playlist.images[0]?.url}
                alt="pic"
              />
              <h2 className="w-40 mr-5">{playlist.name}</h2>
              <div className="lg:ml-11 md:ml-9 w-12 h-12 rounded-full bg-green-500 flex flex-row justify-center items-center transition duration-300 ease-in-out transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ">
                <IoMdPlay className="text-2xl  text-black " />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popular artist */}
      <div className="flex justify-between">
        <Link to={""}>
          <h1 className="font-bold font-sans text-2xl hover:underline">
            Popular artists
          </h1>
        </Link>
        <Link to={""} className="text-gray-400  hover:underline">
          <p>Show all</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-4 h-72 overflow-hidden ">
        {popularArtist.map((artists, index) => (
          <div
            key={index}
            className="relative mt-4 cursor-pointer hover:bg-zinc-800 rounded-lg p-2 w-52 group"
          >
            <img className="rounded-full w-56" src={img} alt="" />

            <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center transition duration-300 ease-in-out transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-16 right-2">
              <IoMdPlay className="text-2xl text-black " />
            </div>
            <h2 className="mt-2">The Weeknd</h2>
            <p style={{ fontSize: ".9rem" }} className="text-slate-400">
              Artist
            </p>
          </div>
        ))}
      </div>

      {/* Popular Albums */}
      <div className="flex justify-between mt-10">
        <Link to={""}>
          <h1 className="font-bold font-sans text-2xl hover:underline">
            Popular Albums{" "}
          </h1>
        </Link>
        <Link to={""} className="text-gray-400  hover:underline">
          <p>Show all</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4  h-72 overflow-hidden ">
        {popularAlbums.map((albume, index) => (
          <div
            key={index}
            className="relative mt-4 cursor-pointer hover:bg-zinc-800 rounded-lg p-2 w-52 group"
          >
            <img className="rounded-lg w-56" src={img} alt="" />

            <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center transition duration-300 ease-in-out transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-16 right-5">
              <IoMdPlay className="text-2xl text-black " />
            </div>
            <h2 className="mt-2">The Weekend</h2>
            <p style={{ fontSize: ".9rem" }} className="text-slate-400">
              Artist
            </p>
          </div>
        ))}
      </div>
      {/* Popular Radio */}
      <div className="flex justify-between mt-10">
        <Link to={""}>
          <h1 className="font-bold font-sans text-2xl hover:underline">
            Popular radio
          </h1>
        </Link>
        <Link to={""} className="text-gray-400  hover:underline">
          <p>Show all</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 h-72 overflow-hidden ">
        {popularRadio.map((radio, index) => (
          <div
            key={index}
            className="relative mt-4 cursor-pointer hover:bg-zinc-800 rounded-lg p-2 w-52 group"
          >
            <img className="rounded-lg w-56" src={img} alt="" />

            <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center transition duration-300 ease-in-out transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-16 right-5">
              <IoMdPlay className="text-2xl text-black " />
            </div>
            <h2 className="mt-2">The Weeknd</h2>
            <p style={{ fontSize: ".9rem" }} className="text-slate-400">
              Artist
            </p>
          </div>
        ))}
      </div>
      {/* Featured Charts */}
      <div className="flex justify-between mt-10">
        <Link to={""}>
          <h1 className="font-bold font-sans text-2xl hover:underline">
            Featured charts
          </h1>
        </Link>
        <Link to={""} className="text-gray-400  hover:underline">
          <p>Show all</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 h-72 overflow-hidden ">
        {featuredCharts.map((featuredCharts, index) => (
          <div
            key={index}
            className="relative mt-4 cursor-pointer hover:bg-zinc-800 rounded-lg p-2 w-52 group"
          >
            <img className="rounded-lg w-56" src={img} alt="" />

            <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center transition duration-300 ease-in-out transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-16 right-5">
              <IoMdPlay className="text-2xl text-black " />
            </div>
            <h2 className="mt-2">The Weeknd</h2>
            <p style={{ fontSize: ".9rem" }} className="text-slate-400">
              Artist
            </p>
          </div>
        ))}
      </div>
      {/* Spotify Playlist  */}
      <div className="flex justify-between mt-10">
        <Link to={""}>
          <h1 className="font-bold font-sans text-2xl hover:underline">
            Featured charts
          </h1>
        </Link>
        <Link to={""} className="text-gray-400  hover:underline">
          <p>Show all</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 h-72 overflow-hidden ">
        {spotifyPlaylist.map((spotifyPlaylist, index) => (
          <div
            key={index}
            className="relative mt-4 cursor-pointer hover:bg-zinc-800 rounded-lg p-2 w-52 group"
          >
            <img className="rounded-lg w-56" src={img} alt="" />

            <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center transition duration-300 ease-in-out transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-16 right-5">
              <IoMdPlay className="text-2xl text-black " />
            </div>
            <h2 className="mt-2">The Weeknd</h2>
            <p style={{ fontSize: ".9rem" }} className="text-slate-400">
              Artist
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 h-72  mt-10">
        {/* Grid 1 */}
        <div className="flex flex-col gap-2">
          <h2 className="font-sans font-bold">Company</h2>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              About
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Jobs
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              For the Record
            </p>
          </Link>
        </div>

        {/* Grid 2 */}
        <div className="flex flex-col gap-2">
          <h2 className="font-sans font-bold">Communities</h2>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              For Artists
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Developers
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Advertising
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Investors
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Vendors
            </p>
          </Link>
        </div>
        {/* Grid 3 */}
        <div className="flex flex-col gap-2">
          <h2 className="font-sans font-bold">Useful links</h2>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Support
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Free Mobile App
            </p>
          </Link>
        </div>
        {/* Grid 4 */}
        <div className="flex flex-col gap-2">
          <h2 className="font-sans font-bold">Spotify Plans</h2>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Premium Individual
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Premium Duo
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Premium Family
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Premium Student
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: ".9rem" }}
              className="text-slate-400 hover:text-white hover:underline"
            >
              Spotify Free
            </p>
          </Link>
        </div>

        {/* Grid 5 */}
        <div className="flex  gap-5 ">
          <Link className="text-xl bg-zinc-800 w-10 h-10 flex items-center justify-center rounded-full">
            <FaInstagram />
          </Link>
          <Link className="text-xl bg-zinc-800 w-10 h-10 flex items-center justify-center rounded-full">
            <FaTwitter />
          </Link>
          <Link className="text-xl bg-zinc-800 w-10 h-10 flex items-center justify-center rounded-full">
            <FaFacebookF />
          </Link>
        </div>
      </div>
      <div className=" sm:mt-60 sm:h-40 md:mt-52 md:h-40 lg:mt-1 lg:h-32 border-t">
        <p style={{ fontSize: ".9rem" }} className="text-slate-400 mt-10">
          © 2024 Spotify AB
        </p>
      </div>
    </div>
  );
};

export default Home;
