/** @format */
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import image3 from "../assets/img/3.png";
import { DetailEvent, Post, DetailEventPost } from "../component";

const Community = () => {
  return (
    <section className="bg-background  relative bg-opacity-65 font-lexend">
      <div className=" bg-background shadow-md flex justify-between fixed w-full items-center ">
        <Link to="/">
          {" "}
          <img src={logo} alt="" className=" w-32" />
        </Link>
        <div className=" flex items-center space-x-2 px-6">
          <p>Hi Hiệp !</p>
          <Link to="/user/orders">
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727751526/Joyner-8E2A9181-cmyk_web_t2bsnn.jpg"
              alt=""
              className=" rounded-full w-14 h-14"
            />
          </Link>
        </div>
      </div>
      <div className=" flex space-x-12 pt-32 pb-8 px-6">
        <div className=" w-1/4 overflow-hidden h-screen pr-12 ">
          <p className=" font-semibold">Các dự án đăng kí</p>
          <div className=" flex w-full flex-col space-y-4 py-6">
            <div className=" flex justify-between items-center">
              <div className="flex w-full space-x-2 items-end">
                <img
                  src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
                  alt=""
                  className="w-12 h-12 rounded-md"
                />
                <div className=" text-sm font-bold break-words w-2/3">
                  {" "}
                  Dự án gọi vốn đầu tư cây dâu giống Australia
                </div>
              </div>
              <div className="p-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="flex w-full space-x-2 items-end">
                <img
                  src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
                  alt=""
                  className="w-12 h-12 rounded-md"
                />
                <div className=" text-sm font-bold break-words w-2/3">
                  {" "}
                  Dự án gọi vốn đầu tư cây dâu giống Australia
                </div>
              </div>
              <div className="p-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="flex w-full space-x-2 items-end">
                <img
                  src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
                  alt=""
                  className="w-12 h-12 rounded-md"
                />
                <div className=" text-sm font-bold break-words w-2/3">
                  {" "}
                  Dự án gọi vốn đầu tư cây dâu giống Australia
                </div>
              </div>
              <div className="p-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="flex w-full space-x-2 items-end">
                <img
                  src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
                  alt=""
                  className="w-12 h-12 rounded-md"
                />
                <div className=" text-sm font-bold break-words w-2/3">
                  {" "}
                  Dự án gọi vốn đầu tư cây dâu giống Australia
                </div>
              </div>
              <div className="p-1.5 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex flex-col space-y-4 overflow-y-scroll h-screen scroll">
          <Post></Post>
          <Post></Post>
        </div>
        <div className=" w-1/4 flex flex-col space-y-4 overflow-y-scroll h-screen">
          <h3 className=" text-2xl">Sự kiện tham gia</h3>
          <DetailEventPost></DetailEventPost>
          <DetailEventPost></DetailEventPost>
        </div>
      </div>
    </section>
  );
};
export default Community;
