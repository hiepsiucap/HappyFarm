/** @format */

// src/components/Layout.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { CheveRon } from "../assets/icon";
const Layout: React.FC = () => {
  return (
    <div className="">
      <div className=" shadow-2xl ">
        <nav className=" md:container mx-auto flex justify-between p-6 py-3 ">
          <ul className="flex space-x-16 p-4 font-lexend items-center text-primary ">
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
          <div className=" flex items-center font-lexend space-x-2">
            <button className=" p-2 px-5 text-sm bg-primary font-light border-primary border-2 text-white rounded-xl">
              Nhận demo
            </button>
            <button className=" p-2 px-5 bg-white font-light text-sm text-primary border-2 border-primary rounded-xl">
              Dùng thử miễn phí
            </button>
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
