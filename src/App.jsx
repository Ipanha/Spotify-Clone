import Login from "./component/Auth/Login";
import Homepage from "./component/HomePage/HomePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./component/redux/slice/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.location.hash;
    const access_token = token.split("=")[1];
    dispatch(setToken(access_token));
  });
  const { access_token} = useSelector((state) => state.auth);

  return <>{access_token ? <Homepage /> : <Login />}</>;
}

export default App;
