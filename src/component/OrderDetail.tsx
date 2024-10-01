/** @format */
import { Link } from "react-router-dom";
const OrderDetail = () => {
  return (
    <div className="flex items-center justify-between bg-background  ">
      <div className=" flex flex-col space-y-4 py-4  ">
        <div className="p-5 rounded-xl flex flex-col shadow-sm ">
          <div className=" flex space-x-1 items-end">
            <div className="pb-0.5 text-gray-600 text-sm">Tên dự án:</div>
            <div className=" font-semibold text-primary">
              {" "}
              Dự án gọi vốn đầu tư cây dâu giống Australia{" "}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Gói đăng kí:</div>
            <div className=" text-sm font-semibold text-primary">
              Gói tiêu chuẩn cơ bản{" "}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Thời gian:</div>
            <div className=" text-sm font-semibold text-primary">
              17:00 Ngày 17 tháng 9 năm 2024
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">
              Thời gian dư kiến nhận :
            </div>
            <div className=" text-sm font-semibold text-primary">
              17:00 Ngày 17 tháng 9 năm 2025
            </div>
          </div>
          <div className=" flex flex-col ">
            <div className=" text-gray-600 text-sm">Quyền lợi :</div>
            <ul className=" list-disc px-5 text-sm">
              <li>2 kg dâu tuơi thu hoạch </li>
              <li>Thư cảm ơn </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <img
          src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711993/461601249_878416460628791_3600121618089984177_n_ycb4gh.jpg"
          alt=""
          className="scale-y-125 rounded-lg"
        />
      </div>
      <div className="border-l-2 h-full px-10 flex flex-col items-center">
        <p className="font-semibold text-lg pt-6 ">700.000VNĐ</p>
        <p className="font-semibold text-lg  text-green-500 pb-2">
          Đã thanh toán
        </p>
        <Link
          to="/project"
          className="px-4 py-3 text-white rounded-lg bg-primary "
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};
export default OrderDetail;
