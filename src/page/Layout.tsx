/** @format */

// src/components/Layout.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { CheveRon } from "../assets/icon";
import logo from "../assets/img/logo.png";
const Layout: React.FC = () => {
  return (
    <div className="">
      <div className=" shadow-2xl ">
        <nav className=" md:container mx-auto flex justify-between px-6 ">
          <ul className="flex space-x-16 px-4  font-lexend items-center text-primary ">
            <li className=" flex space-x-4 items-center font-medium">
              <img src={logo} alt="" className=" w-32" />
            </li>
            <li className=" flex space-x-4 items-center font-medium">
              <Link to="/">Trang chủ</Link>
              <CheveRon size={6}></CheveRon>
            </li>
            <li className=" flex space-x-4 items-center font-medium">
              <Link to="/about">Sản phẩm</Link>
              <CheveRon size={6}></CheveRon>
            </li>
            <li className=" flex space-x-4 items-center font-medium">
              <Link to="/about">Báo giá</Link>
              <CheveRon size={6}></CheveRon>
            </li>
          </ul>
          <div className=" flex items-center font-lexend space-x-4">
            <Link
              to="/login"
              className=" p-2 px-5 text-sm bg-primary font-light border-primary border-2 text-white rounded-xl"
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className=" p-2 px-5 bg-white font-light text-sm text-primary border-2 border-primary rounded-xl"
            >
              Dùng thử miễn phí
            </Link>
          </div>
        </nav>
      </div>
      <div className="">
        <Outlet />
      </div>
      <footer className="p-4 text-center bg-gray-200">
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
};

export default Layout;
