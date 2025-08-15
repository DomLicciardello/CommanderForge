import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  SearchOutlined,
  SettingOutlined,
  HomeOutlined,
  CreditCardTwoTone,
  CodepenOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from "../assets/logo-orizzontale-white.png";
import "./Navbar.css";

const items = [
  {
    key: "/",
    icon: <img src={logo} alt="Commander Forge Logo" className="navbar-logo" />,
  },
  {
    label: "HOME",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "CERCA CARTE",
    key: "/search",
    icon: <SearchOutlined />,
  },
  {
    label: "DECK",
    ket: "/",
    icon: <CodepenOutlined />,
  }
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  const onClick = (e) => {
    console.log("Navigating to:", e.key);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default Navbar;
