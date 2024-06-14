const Login = () => {
  const LoginWithSpotify = () => {
    const clientId = "691458d97d41449e90ae624b9841fd6d";
    const redirectUrl = "http://localhost:5173/";
    const scope = [
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-read-email",
      "user-read-private",
    ].join(" ");
    const spotify_url = "https://accounts.spotify.com/authorize";
    window.location.href = `${spotify_url}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&scope=${scope}`;
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <button
        onClick={LoginWithSpotify}
        className="bg-green-400 font-sans font-bold w-32 h-10 rounded-full"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
