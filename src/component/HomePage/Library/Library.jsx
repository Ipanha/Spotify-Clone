const Library = () => {
  const songs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14];
  return (
    <div className="h-full overflow-auto pb-16">
      <div className="mt-4">
        <h2 className="text-2xl font-bold font-sans">Top Songs</h2>
        <table className="w-[98%] mt-4 cursor-pointer rounded-lg">
          {songs.map((song, index) => (
            <tr key={index} className="hover:bg-zinc-800  ">
              <td className="text-start flex items-center gap-4 py-2 px-2 ">
                <p>{index + 1}</p>
                <img
                  className="w-14"
                  src="https://i.scdn.co/image/ab67616d0000b27367314026d020fd906872f23c"
                  alt=""
                />
                <p>Title song</p>
              </td>
              <td className="text-start">2000</td>
              <td className="text-end px-2">2.98</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Library;
