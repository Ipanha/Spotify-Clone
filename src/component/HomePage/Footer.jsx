import { FaPlay, FaPause } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb";
import { useState, useEffect, useRef } from "react";

const Footer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleSongEnd = () => setIsPlaying(false);

    if (audio) {
      audio.addEventListener("timeupdate", updateCurrentTime);
      audio.addEventListener("loadedmetadata", updateDuration);
      audio.addEventListener("ended", handleSongEnd);

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateCurrentTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
        audio.removeEventListener("ended", handleSongEnd);
      }
    };
  }, [isPlaying, song]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 10,
        duration
      );
    }
  };

  const handleSkipBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        audioRef.current.currentTime - 10,
        0
      );
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <footer className="flex items-center px-2 justify-between w-full h-20 bg-zinc-900 py-2 rounded-lg mb-2">
      <div className="flex gap-2">
        {song && (
          <>
            <img
              className="rounded-sm w-14 h-14 hidden md:block"
              src={song.album.images[0]?.url}
              alt="art work"
            />
            <div>
              <h1 className="font-bold font-sans hover:underline cursor-pointer">
                {song.name}
              </h1>
              <p className="font-sans text-gray-400 hover:text-white cursor-pointer hover:underline">
                {song.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col items-center justify-center mr-20 ">
        <div className="flex items-center justify-center gap-5 mr-20">
          <TbPlayerSkipBackFilled
            className="cursor-pointer"
            onClick={handleSkipBack}
          />
          <div
            className="flex items-center justify-center bg-white w-8 h-8 rounded-full"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <FaPause className="cursor-pointer text-black " />
            ) : (
              <FaPlay className="cursor-pointer text-black ml-1" />
            )}
          </div>
          <TbPlayerSkipForwardFilled
            className="cursor-pointer"
            onClick={handleSkipForward}
          />
        </div>
        <div className="flex items-center mr-20 mt-2 w-30">
          <p className="mr-2">{formatTime(currentTime)}</p>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => (audioRef.current.currentTime = e.target.value)}
            className="w-40"
          />
          <p className="ml-2">{formatTime(duration)}</p>
        </div>
      </div>

      <div>
        <AiFillSound className="cursor-pointer" />
      </div>
      {song && <audio ref={audioRef} src={song.preview_url} />}
    </footer>
  );
};

export default Footer;
