/** @format */
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import image3 from "../assets/img/3.png";
import { useState } from "react";
import { DetailEvent, Post, DetailEventPost } from "../component";
type Event = {
  name: string;
  location: string;
  time: string;
  description: string;
  amount: number;
  img: string;
};
const IntialPostType = [
  {
    page: "Vườn minh trân",
    time: "2 tháng trước",
    project: "Trồng dâu Australia",
    content: "Hôm nay nhà vườn đã tiến hành gieo giống",
    ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727960166/riccardo-atrot-CDCPeN26MdE-unsplash-min_m6zknc.jpg",
    comment: 17,
    share: 15,
    like: 12,
  },
  {
    page: "Vườn minh trân",
    time: "1 tháng trước",
    project: "Trồng dâu Australia",
    content: "Hôm nay nhà vườn đã vào phân. Phân được nhập khẩu từ Đức",
    ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727955327/equalstock-xXDHzBW317Q-unsplash_cwv4on.jpg",
    comment: 17,
    share: 15,
    like: 12,
  },
  {
    page: "Vườn minh trân",
    time: "2 tuần",
    project: "Trồng dâu Australia",
    content: "Hôm nay nhà vườn đã thấy những quả dâu đầu tiên",
    ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    comment: 17,
    share: 15,
    like: 12,
  },
  {
    page: "Vườn minh trân",
    time: "1 tuần",
    project: "Trồng dâu Australia",
    content: "Hôm nay nhà vườn tiến hành thu hoạch dâu",
    ava: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949816/farsai-chaikulngamdee-IdrzXJQlw5w-unsplash_gjiuhl.jpg",
    comment: 17,
    share: 15,
    like: 12,
  },
];
const Community = () => {
  const initalListEvent = [
    {
      name: "Ngọt Ngào Vị Dâu: Workshop Làm Bánh Từ Dâu Tươi",
      location: "Dĩ An, Bình dương",
      time: "7:00PM 4/10/2024",
      description:
        "Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây trong các món tráng miệng.",
      amount: 100000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727724898/luke-pennystan-09FcOqmi8R0-unsplash_kc6p4n.jpg",
    },
    {
      name: "Tour Thăm quan và Trải nghiệm Nông trại Dâu",
      location: "Dĩ An, Bình dương",
      time: "7:00PM 4/10/2024",
      description:
        "Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây trong các món tráng miệng.",
      amount: 100000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949816/farsai-chaikulngamdee-IdrzXJQlw5w-unsplash_gjiuhl.jpg",
    },
    {
      name: "Ngày hội Dâu tươi - Lễ hội ẩm thực",
      location: "Dĩ An, Bình dương",
      time: "7:00PM 4/10/2024",
      description:
        "Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây trong các món tráng miệng.",
      amount: 100000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727949756/jez-timms-CvBZ3Css97c-unsplash_xfjjk2.jpg",
    },
    {
      name: "Sự kiện Cắm trại Tại Nông Trại Dâu",
      location: "Dĩ An, Bình dương",
      time: "7:00PM 4/10/2024",
      description:
        "Một workshop làm bánh từ dâu là một trải nghiệm ẩm thực thú vị, nơi người tham gia học cách tạo ra những món bánh thơm ngon và hấp dẫn với nguyên liệu chính là dâu tây tươi. Đây là một hoạt động lý tưởng cho những người yêu thích nấu nướng và muốn khám phá cách sử dụng dâu tây trong các món tráng miệng.",
      amount: 100000,
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727955341/chris-holder-uY2UIyO5o5c-unsplash_aov73y.jpg",
    },
  ];
  const initallistproject = [
    {
      name: " Dự án gọi vốn đầu tư cây dâu giống Australia",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg",
    },
    {
      name: "  Dự án Trồng Bưởi Da Xanh Vĩnh Long",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951403/buoi-1_viuegf.jpg",
    },
    {
      name: "Dự án  Măng cụt Tươi Đà Lạt",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951415/mang-cut-1_e84ws3.jpg",
    },
    {
      name: "Dự án Trồng Xoài Cát Chu Cao Lãnh",

      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951502/xoai-cat-chu-soc-trang-2_deqtro.jpg",
    },
    {
      name: "Dự án Trồng Xoài Cát Chu Cao Lãnh",
      img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727951443/sau-rieng-4_nusnhb.jpg",
    },
  ];
  const [listevent, changelistevent] = useState(initalListEvent);
  const [listproject, changelistproject] = useState(initallistproject);
  const [listpost, changelistpost] = useState(IntialPostType);
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
            {listproject?.map((project) => {
              return (
                <div className=" flex justify-between items-center">
                  <div className="flex w-full space-x-2 items-end">
                    <img
                      src={project.img}
                      alt=""
                      className="w-12 h-12 rounded-md"
                    />
                    <div className=" text-sm font-bold break-words w-2/3">
                      {" "}
                      {project.name}
                    </div>
                  </div>
                  <div className="p-1.5 rounded-full bg-green-500"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-1/2 flex flex-col space-y-4 overflow-y-scroll h-screen scroll">
          {listpost.map((post) => {
            return <Post post={post}></Post>;
          })}
        </div>
        <div className=" w-1/4 flex flex-col space-y-4 overflow-y-scroll h-screen">
          <h3 className=" text-2xl">Sự kiện tham gia</h3>
          {listevent.map((event) => {
            return <DetailEventPost event={event}></DetailEventPost>;
          })}
        </div>
      </div>
    </section>
  );
};
export default Community;
