import React from "react";
import "./Header.css";
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="/images/profile.jpg" alt="Admin Profile" />
        <div>
          <h1>محمد امین سعیدی راد</h1>
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
