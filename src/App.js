import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="App__body">
          <SideBar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
