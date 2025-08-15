import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SearchOutlined,
  HomeOutlined,
  CodepenOutlined,
  CrownOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Menu, Avatar } from "antd";
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
    icon: <HomeOutlined style={{ fontSize: "16px" }} />,
  },
  {
    label: "I MIEI DECKS",
    key: "/decks",
    icon: <CodepenOutlined style={{ fontSize: "16px" }} />,
  },
  {
    label: "RICERCA CARTE",
    key: "/search",
    icon: <SearchOutlined style={{ fontSize: "16px" }} />,
  },
  {
    label: "COMANDANTI",
    key: "/commanders",
    icon: <CrownOutlined style={{ fontSize: "16px" }} />,
  },
  {
    label: "LISTA ACQUISTI",
    key: "/cart",
    icon: <ShoppingCartOutlined style={{ fontSize: "16px" }} />,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div className="navbar-container">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="navbar-menu"
      />
      <Avatar size={52} icon={<UserOutlined style={{ color: "black" }}/>} className="navbar-avatar" />
    </div>
  );
};

export default Navbar;
