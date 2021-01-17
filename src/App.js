import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
