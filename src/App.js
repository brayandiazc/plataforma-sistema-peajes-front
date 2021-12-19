import React, {useState} from "react";
import UserView from "./components/UserView";
import Home from "./screens/Home";
import Login from "./screens/Login";


function App() {
  const [user, setUser] = useState(false);
  
  return <>{user ? <Home /> : <Login />}</>;
}

export default App;
