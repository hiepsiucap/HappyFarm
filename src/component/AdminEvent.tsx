/** @format */
import { LinearProgress, Box } from "@mui/material";
import { styled } from "@mui/system";
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
type Event = {
  name: string;
  location: string;
  time: string;
  timeout: string;
  minimal: number;
  current: number;
  maximum: number;
  status: string;
  img: string;
};
const AdminEvent = ({ event }: { event: Event }) => {
  return (
    <div className=" items-center bg-background rounded-lg flex justify-between space-x-6 overflow-hidden">
      <div className=" flex space-x-6">
        <div className="w-64">
          <img src={event.img} alt="" className=" rounded-t-xl h-48 w-64" />
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <CustomLinearProgress variant="determinate" value={50} />
          </Box>
        </div>
        <div className=" rounded-xl flex flex-col space-y-2 ">
          <div className=" flex space-x-1 items-end">
            <div className="pb-0.5 text-gray-600 text-sm">Tên Event:</div>
            <div className=" font-semibold text-primary"> {event.name}</div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Địa điểm:</div>
            <div className=" text-sm font-semibold text-primary">
              {event.location}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Thời gian:</div>
            <div className=" text-sm font-semibold text-primary">
              {event.time}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Ngày kết thúc đơn:</div>
            <div className=" text-sm font-semibold text-primary">
              {event.timeout}
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Số người tối thiểu:</div>
            <div className=" text-sm font-semibold text-primary">
              {event.minimal} người
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Số người hiện tại :</div>
            <div className=" text-sm font-semibold text-primary">
              {event.current} người
            </div>
          </div>
          <div className=" flex space-x-1 items-end">
            <div className=" text-gray-600 text-sm">Số người tối đa :</div>
            <div className=" text-sm font-semibold text-primary">
              {event.maximum} người
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center space-y-2 pr-6">
        <h5 className=" font-semibold text-xl text-green-500">
          {event.status}{" "}
        </h5>
        <Link
          to="/project"
          className="px-6 py-2 w-44 text-center text-white text-sm rounded-lg bg-button "
        >
          Cập nhật thông tin
        </Link>
        <Link
          to="/project"
          className="px-6 py-2 w-44 text-center text-white text-sm rounded-lg bg-button "
        >
          Xác nhận tổ chức
        </Link>
        <Link
          to="/project"
          className="px-6 py-2 w-44 text-center text-white text-sm rounded-lg bg-button"
        >
          Xác nhận huỷ
        </Link>
      </div>
    </div>
  );
};
export default AdminEvent;
