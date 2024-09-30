/** @format */

import { LinearProgress, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

const CustomLinearProgress = styled(LinearProgress)({
  height: 10, // Tăng độ cao của thanh
  borderRadius: 0, // Bo góc của thanh
  "&.MuiLinearProgress-root": {
    borderBottomLeftRadius: 10, // Bo góc bên trái dưới
    borderBottomRightRadius: 10, // Bo góc bên phải dưới
  },
  backgroundColor: "#e0e0e0", // Màu nền của thanh khi chưa đạt tiến độ
  "& .MuiLinearProgress-bar": {
    borderRadius: 10, // Bo góc của thanh tiến độ
    backgroundColor: "#1a90ff", // Màu của thanh tiến độ
  },
});

const Project = ({ isOpen }: { isOpen: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to="/projects/1"
      className={
        isHovered && !isOpen ? "scale-105 relative z-50 bg-white " : "scale-100"
      }
    >
      <img
        src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
        alt=""
        className=" rounded-t-xl"
      />
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <CustomLinearProgress variant="determinate" value={50} />
      </Box>
      <div className="flex pt-5 space-x-2">
        <div className=" flex flex-col space-y-1 items-start">
          <div className=" min-w-12 ">
            <img
              src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
              alt=""
              className=" w-12 h-12 rounded-full"
            />
          </div>
        </div>
        <div className=" flex flex-col font-lexend">
          <p className="font-lexend  text-xl">
            Dự án gọi vốn đầu tư cây dâu giống Australia
          </p>
          <p className=" text-gray-700 text-sm">Vườn minh Trân</p>
          <div className=" flex space-x-2 pb-1">
            <p className="text-gray-700 text-sm">10 ngày còn lại</p>
            <p className="text-gray-700 text-sm">50% tổng quỹ</p>
          </div>
          {isOpen && (
            <div>
              Dự án gọi vốn cho vườn cây là sáng kiến nhằm huy động nguồn lực từ
              cộng đồng để phát triển và mở rộng diện tích trồng cây xanh. Mục
              tiêu của dự án là cải thiện môi trường sống, tạo ra không gian
              xanh, và cung cấp nguồn nông sản sạch, bền vững.
            </div>
          )}
        </div>
      </div>
      {isHovered && !isOpen && (
        <div className=" absolute top-0 bg-white p-5 border rounded-lg shadow-md ">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
            alt=""
            className=" rounded-t-xl"
          />
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <CustomLinearProgress variant="determinate" value={50} />
          </Box>
          <div className="flex pt-5 space-x-2">
            <div className=" flex flex-col space-y-1 items-start">
              <div className=" min-w-12 ">
                <img
                  src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
                  alt=""
                  className=" w-12 h-12 rounded-full"
                />
              </div>
            </div>
            <div className=" flex flex-col font-lexend">
              <p className="font-lexend  text-xl">
                Dự án gọi vốn đầu tư cây dâu giống Australia
              </p>
              <p className=" text-gray-700 text-sm">Vườn minh Trân</p>
              <div className=" flex space-x-2 pb-1">
                <p className="text-gray-700 text-sm">10 ngày còn lại</p>
                <p className="text-gray-700 text-sm">50% tổng quỹ</p>
              </div>
              <div>
                Dự án gọi vốn cho vườn cây là sáng kiến nhằm huy động nguồn lực
                từ cộng đồng để phát triển và mở rộng diện tích trồng cây xanh.
                Mục tiêu của dự án là cải thiện môi trường sống, tạo ra không
                gian xanh, và cung cấp nguồn nông sản sạch, bền vững.
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Project;
