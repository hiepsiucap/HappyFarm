/** @format */
import { Link } from "react-router-dom";
const DetailEvent = () => {
  return (
    <div className="rounded-2xl">
      <img
        src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727724898/luke-pennystan-09FcOqmi8R0-unsplash_kc6p4n.jpg"
        alt=""
        className=" rounded-md"
      />
      <div className=" py-3 flex flex-col space-y-2">
        <div className=" text-xl font-semibold ">
          Ngọt Ngào Vị Dâu: Workshop Làm Bánh Từ Dâu Tươi
        </div>
        <div className=" flex items-center space-x-2 ">
          <p className="bg-green-100 text-sm p-1 px-2 rounded-lg">
            Dĩ An, Bình dương
          </p>
          <p className="bg-yellow-100 text-sm p-1 px-2 rounded-lg">
            7:00PM 4/10/2024
          </p>
        </div>
        <div className=" text-gray-600 text-sm">
          Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi
          người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với
          nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho
          những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây
          trong các món tráng miệng.
        </div>
        <div className=" flex justify-between py-2">
          <div className=" text-sm font-bold flex flex-col space-y-1">
            <div>Chi phí 100.000 đồng/ 1 người</div>
            <Link
              to="/project "
              className=" hover:scale-105 hover:underline hover:text-green-500"
            >
              Miễn phí cho thành viên
            </Link>
          </div>
          <button className="bg-primary py-2 px-4 rounded-md text-white">
            Đăng kí ngay
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailEvent;
