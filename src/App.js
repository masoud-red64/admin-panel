import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Header from "./Components/Header/Header";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

export default function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Sidebar />

      <div className="main">
        <Header />

        {router}
      </div>
    </>
  );
}
