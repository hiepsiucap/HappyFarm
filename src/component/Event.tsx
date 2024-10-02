/** @format */
import { Link } from "react-router-dom";
const Event = () => {
  return (
    <div className="flex items-center justify-between shadow-lg  rounded-lg overflow-hidden bg-background  ">
      <div className="w-1/4 p-2">
        <img
          src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727724898/luke-pennystan-09FcOqmi8R0-unsplash_kc6p4n.jpg"
          alt=""
          className=" rounded-l-md"
        />
      </div>
      <div className=" flex flex-col space-y-4 py-4  ">
        <div className="p-5 rounded-xl flex flex-col space-y-2 ">
          <div className=" flex space-x-1 items-end">
            <div className="pb-0.5 text-gray-600 text-sm">Tên Event:</div>
            <div className=" font-semibold text-primary">
              {" "}
              Ngọt Ngào Vị Dâu: Workshop Làm Bánh Từ Dâu Tươi{" "}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Địa điểm:</div>
            <div className=" text-sm font-semibold text-primary">
              Dĩ An, Bình dương{" "}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Thời gian:</div>
            <div className=" text-sm font-semibold text-primary">
              17:00 Ngày 17 tháng 9 năm 2024
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Số người tham gia :</div>
            <div className=" text-sm font-semibold text-primary">5 người</div>
          </div>
        </div>
      </div>
      <div className="border-l-2 h-full px-10 flex flex-col space-y-2 items-center">
        <Link
          to="/project"
          className="px-6 py-2 w-36 text-center text-white text-sm rounded-lg bg-button "
        >
          Đăng kí thêm
        </Link>
        <Link
          to="/project"
          className="px-6 py-2 w-36 text-center text-white text-sm rounded-lg bg-button "
        >
          Huỷ tham gia
        </Link>
        <Link
          to="/project"
          className="px-6 py-2 w-36 text-center text-white text-sm rounded-lg bg-button"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};
export default Event;
