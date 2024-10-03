/** @format */
import { AdminEvent } from "../component";
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

const initalListEvent: Event[] = [
  {
    name: "Ngọt Ngào Vị Dâu: Workshop Làm Bánh Từ Dâu Tươi",
    location: "Dĩ An, Bình dương",
    time: "7:00PM 4/10/2024",
    timeout: "7:00PM 7/10/2024",
    minimal: 7,
    maximum: 9,
    current: 8,
    status: "Đang thực hiện",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727724898/luke-pennystan-09FcOqmi8R0-unsplash_kc6p4n.jpg",
  },
  {
    name: "Tour Thăm quan và Trải nghiệm Nông trại Dâu",
    location: "Dĩ An, Bình dương",
    time: "7:00PM 4/10/2024",
    timeout: "7:00PM 7/10/2024",
    minimal: 7,
    maximum: 9,
    current: 8,
    status: "Đang thực hiện",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949816/farsai-chaikulngamdee-IdrzXJQlw5w-unsplash_gjiuhl.jpg",
  },
  {
    name: "Ngày hội Dâu tươi - Lễ hội ẩm thực",
    location: "Dĩ An, Bình dương",
    time: "7:00PM 4/10/2024",
    timeout: "7:00PM 7/10/2024",
    minimal: 7,
    maximum: 9,
    current: 8,
    status: "Đang thực hiện",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949756/jez-timms-CvBZ3Css97c-unsplash_xfjjk2.jpg",
  },
  {
    name: "Sự kiện Cắm trại Tại Nông Trại Dâu",
    location: "Dĩ An, Bình dương",
    time: "7:00PM 4/10/2024",
    timeout: "7:00PM 7/10/2024",
    minimal: 7,
    maximum: 9,
    current: 8,
    status: "Đang thực hiện",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727955341/chris-holder-uY2UIyO5o5c-unsplash_aov73y.jpg",
  },
];
const AdminListEvent = () => {
  return (
    <section className=" font-lexend">
      <div className=" flex justify-between items-center">
        <p className=" text-2xl font-semibold">Danh sách các sự kiện</p>
        <button className=" py-3 px-6 rounded-md bg-button text-white">
          Đăng kí sự kiện mới{" "}
        </button>
      </div>
      <div className=" flex flex-col py-8 space-y-4">
        {initalListEvent.map((event) => {
          return <AdminEvent event={event}></AdminEvent>;
        })}
      </div>
    </section>
  );
};
export default AdminListEvent;
