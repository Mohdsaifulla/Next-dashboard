"use client";

import SideBar from "../sideBar/SideBar";
import Header from "../header/Header";
import MainDashboard from "../mainDashboard/MainDashboard";
const DashboardUi = () => {
  return (
    <div className="flex">
      <div className="sidebar" style={{ flex: "1" }}>
        <SideBar />
      </div>
      <div className="main-content border">
        <Header />
        <MainDashboard />
      </div>
    </div>
  );
};

export default DashboardUi;
