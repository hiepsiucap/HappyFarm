/** @format */
import { Link } from "react-router-dom";
type Event = {
  name: string;
  location: string;
  time: string;
  description: string;
  amount: number;
  img: string;
};
const Event = ({ event }: { event: Event }) => {
  return (
    <div className="flex items-center justify-between shadow-lg  rounded-lg overflow-hidden bg-background  ">
      <div className="w-1/4 p-2">
        <img src={event.img} alt="" className=" rounded-l-md" />
      </div>
      <div className=" flex flex-col space-y-4 py-4  ">
        <div className="p-5 rounded-xl flex flex-col space-y-2 ">
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
            <div className=" text-gray-600 text-sm">Số người tham gia :</div>
            <div className=" text-sm font-semibold text-primary">
              {event.amount} người
            </div>
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
