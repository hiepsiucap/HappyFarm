/** @format */

/** @format */
import logo from "../assets/img/logo.png";
import image3 from "../assets/img/3.png";
import event from "../assets/img/event.png";
import order from "../assets/img/order.png";
import calendar from "../assets/img/caledar.png";
import fruit from "../assets/img/fruit.png";
import project from "../assets/img/project.png";
import chart from "../assets/img/chart.png";
import dashboard from "../assets/img/dashboard.png";
import info from "../assets/img/info.png";
import { DetailEvent, Post, DetailEventPost } from "../component";
import { Outlet, Link } from "react-router-dom";
const AdminLayout = () => {
  return (
    <section className="bg-background  relative bg-opacity-65 font-lexend">
      <div className=" bg-background shadow-md flex justify-between z-50 fixed w-full items-center ">
        <Link to="/">
          {" "}
          <img src={logo} alt="" className=" w-32" />
        </Link>
        <div className=" flex items-center space-x-2 px-6">
          <p>Hi Hiệp !</p>
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727751526/Joyner-8E2A9181-cmyk_web_t2bsnn.jpg"
            alt=""
            className=" rounded-full w-14 h-14"
          />
        </div>
      </div>
      <div className=" flex space-x-12 pt-32 pb-8 px-6">
        <div className=" fixed w-1/4 overflow-hidden h-screen pr-12 ">
          <p className=" font-semibold text-lg">Danh mục</p>
          <div className=" flex w-full flex-col  py-6">
            <Link
              to="/admin/dashboard"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35 border-t-2 items-end"
            >
              <img src={dashboard} alt="" className="w-8 h-8  rounded-md" />
              <div className="font-semibold text-lg   w-2/3"> Tổng quan</div>
            </Link>

            <Link
              to="/admin/events"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35 border-t-2 items-end"
            >
              <img src={calendar} alt="" className="w-8 h-8  rounded-md" />
              <div className="font-semibold text-lg   w-2/3">
                {" "}
                Danh sách sự kiện
              </div>
            </Link>
            <Link
              to="/admin/projects"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35  border-t-2 items-end"
            >
              <img src={order} alt="" className="w-8 h-8 rounded-md" />
              <div className="font-semibold text-lg   w-2/3">
                {" "}
                Danh sách đầu tư
              </div>
            </Link>
            <Link
              to="/admin/chart"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35  border-t-2 items-end"
            >
              <img src={chart} alt="" className="w-8 h-8 rounded-md" />
              <div className="font-semibold text-lg   w-2/3">
                {" "}
                Thống kê chỉ số
              </div>
            </Link>
            <Link
              to="/registerfarmer"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35  border-t-2 items-end"
            >
              <img src={project} alt="" className="w-8 h-8 rounded-md" />
              <div className="font-semibold text-lg   w-2/3">Đăng kí dự án</div>
            </Link>
            <Link
              to="/admin/registerproject"
              className="flex w-full space-x-4 py-4 border-primary border-opacity-35  border-t-2 items-end"
            >
              <img src={info} alt="" className="w-8 h-8 rounded-md" />
              <div className="font-semibold text-lg   w-2/3"> Đăng xuất</div>
            </Link>
          </div>
        </div>
        <div className=" w-1/4"></div>
        <div className=" w-3/4 ">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};
export default AdminLayout;
