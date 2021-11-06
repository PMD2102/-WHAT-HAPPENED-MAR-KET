import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const MenuItems = [
  {
    title: "INTRODUCTION",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "SOLUTION",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "RATEPLAN",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "LOGIN",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "APPLY FOR FREE USE",
    url: "#",
    cName: "nav-links",
  },
];

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__menu">
        <div
          className="menu-icon"
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          <i className={isClick ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isClick ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
