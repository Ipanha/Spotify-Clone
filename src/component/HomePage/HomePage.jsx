import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home/Home";
import Library from "./Library/Library";
import Search from "./Search/Search";

function Homepage() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="h-screen p2 bg-black text-white flex flex-col overflow-y-hidden justify-between">
      <div className="mt-2 max-w-full h-full flex gap-2 overflow-y-hidden">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/search"
              element={<Search onSongSelect={setSelectedSong} />}
            />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
      </div>

      <div className="px-2 mt-2">
        <Footer song={selectedSong} />
      </div>
    </div>
  );
}

export default Homepage;
