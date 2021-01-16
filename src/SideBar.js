import React from "react";
import "./SideBar.css";
import { Avatar } from "@material-ui/core";

function SideBar() {
  const recentItem = (topic) => (
    <div className="sideBar__recentItem">
      <span className="sideBar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="SideBar">
      <div className="sideBar__top">
        <img
          src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <Avatar className="sideBar__avatar" />
        <h2>Achraf Oudani</h2>
        <h4>Achraf.oudani@gmail.com</h4>
      </div>
      <div className="sideBar__stats">
        <div className="sideBar__stat">
          <p>Who viewed you</p>
          <p className="sideBar__statNumber">2,543</p>
        </div>
        <div className="sideBar__stat">
          <p>Views on post</p>
          <p className="sideBar__statNumber">2,468</p>
        </div>
      </div>
      <div className="sideBar__bottom">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Developer")}
        {recentItem("NextJs")}
        {recentItem("Programming")}
      </div>
    </div>
  );
}

export default SideBar;
