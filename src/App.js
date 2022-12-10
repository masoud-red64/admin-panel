import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <>
      <Sidebar />

      <div className="main">
        <Header />
      </div>
    </>
  );
}
