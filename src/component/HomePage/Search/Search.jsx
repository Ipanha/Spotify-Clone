import { IoSearch } from "react-icons/io5";
import { letSearchASong } from "../../api_call/spotify_app";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Search = ({ onSongSelect }) => {
  const { access_token } = useSelector((state) => state.auth);
  const [searchKey, setSearchKey] = useState("");
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchKey) {
      const searchSong = async () => {
        try {
          const response = await letSearchASong(access_token, searchKey);
          setSongs(response.tracks.items); // Assuming the response structure
          setError("");
        } catch (err) {
          setError("Failed to fetch songs. Please try again.");
        }
      };
      searchSong();
    } else {
      setSongs([]);
    }
  }, [searchKey, access_token]);

  return (
    <div className="h-full overflow-auto pb-16">
      <div className="flex items-center ml-2">
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="What do you want to play?"
          className="border bg-transparent rounded-full px-4 py-3 pl-12 mt-4 sm:w-[50%] lg:w-[25%]"
        />
        <IoSearch className="text-2xl sm:-ml-80 lg:-ml-96 sm:mt-4 cursor-pointer" />
      </div>
      {error && <p className="text-red-500 ml-2 mt-2">{error}</p>}
      <div className="mt-4">
        <h2 className="text-2xl font-bold font-sans ml-2">Search found</h2>
        <table className="w-[98%] mt-4 cursor-pointer rounded-lg">
          <tbody>
            {songs.map((song, index) => (
              <tr
                key={index}
                className="hover:bg-zinc-800"
                onClick={() => onSongSelect(song)}
              >
                <td className="text-start flex items-center gap-4 py-2 px-2">
                  <p>{index + 1}</p>
                  <img
                    className="w-14"
                    src={song.album.images[0]?.url}
                    alt={song.name}
                  />
                  <p>{song.name}</p>
                </td>
                <td className="text-start">
                  {song.artists.map((artist) => artist.name).join(", ")}
                </td>
                <td className="text-end px-2">
                  {(song.duration_ms / 60000).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
