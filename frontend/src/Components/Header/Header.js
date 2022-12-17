import React, { useEffect, useState } from "react";
import "./Header.css";
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Header() {
  const [showValidDiv, setShowValidDiv] = useState(true);

  const [allAdmin, setAllAdmin] = useState([]);
  const [adminUsername, setAdminUsername] = useState("");
  const [mainAdmin, setMainAdmin] = useState({});
  useEffect(() => {
    fetch("http://localhost:7000/api/users/")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((admin) => {
        console.log(admin);
        setAllAdmin(admin);
      });
  }, []);

  useEffect(() => {
    setMainAdmin(allAdmin.find((admin) => admin.username === adminUsername));
  }, [adminUsername]);

  const validAdmin = () => {
    console.log(mainAdmin);
    if (mainAdmin.username === adminUsername) {
      setShowValidDiv(false);
    }
  };
  return (
    <div className="header">
      {showValidDiv ? (
        <div className="valid">
          <input
            type="text"
            placeholder="نام کاربری خود را وارد کنید"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
          />

          <button className="products-table-btn" onClick={validAdmin}>
            تایید
          </button>
        </div>
      ) : null}
      <div className="admin-profile">
        <img src="/images/saeedi.jpeg" alt="Admin Profile" />
        <div>
          {mainAdmin && (
            <h1>
              {" "}
              {mainAdmin.firsname}-{mainAdmin.lastname}{" "}
            </h1>
          )}
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جستجو کنید ..." />
          <button>جست و جو</button>
        </div>

        <button className="header-left-icon">
          <AiOutlineBell />
        </button>
        <button className="header-left-icon">
          <BsBrightnessHigh />
        </button>
      </div>
    </div>
  );
}
