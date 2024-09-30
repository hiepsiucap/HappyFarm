/** @format */

import { Warning } from "../assets/icon";
import { useEffect } from "react";
const ChooseSub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="font-lexend md:container mx-auto py-6">
      <div className=" font-lexend py-6">
        <h1 className=" text-2xl  ">Lựa chọn gói đăng kí của bạn</h1>
      </div>
      <div className=" flex items-center space-x-8">
        <div className=" flex flex-col space-y-5 w-3/4 ">
          <button className=" border rounded-lg flex justify-between items-center  shadow-lg  p-5 text-start">
            <div className=" flex flex-col space-y-2 w-2/3 pr-4">
              <div className="font-xl">Gói Cơ bản (Basic)- 100.000VNĐ</div>
              <div className=" font-semibold">Khách hàng cơ bản</div>
              <div className="text-gray-600 text-sm">
                Gói cơ bản dành cho những ai mong muốn tham gia vào dự án nông
                trại dâu với số vốn đầu tư nhỏ, nhưng vẫn nhận được nhiều quyền
                lợi và lợi ích hấp dẫn từ việc canh tác và thu hoạch dâu. Với
                gói này, nhà đầu tư sẽ được trải nghiệm mô hình nông nghiệp
                sạch, bền vững và đồng thời hưởng lợi từ sự phát triển của mô
                hình trồng dâu công nghệ cao.
              </div>
              <div className=" font-bold">Quyền lợi :</div>
              <ul className=" list-disc px-5 text-sm">
                <li>2 kg dâu tuơi thu hoạch </li>
                <li>Thư cảm ơn </li>
              </ul>
            </div>
            <div className=" w-1/3">
              <img
                src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711993/461601249_878416460628791_3600121618089984177_n_ycb4gh.jpg"
                alt=""
                className=" rounded-md min-h-48"
              />
            </div>
          </button>
          <button className=" border rounded-lg flex justify-between items-center shadow-lg   p-5 text-start">
            <div className=" flex flex-col space-y-2 w-2/3 pr-4">
              <div className="font-xl">Gói Cơ bản (Basic)- 100.000VNĐ</div>
              <div className=" font-semibold">Khách hàng cơ bản</div>
              <div className="text-gray-600 text-sm">
                Gói cơ bản dành cho những ai mong muốn tham gia vào dự án nông
                trại dâu với số vốn đầu tư nhỏ, nhưng vẫn nhận được nhiều quyền
                lợi và lợi ích hấp dẫn từ việc canh tác và thu hoạch dâu. Với
                gói này, nhà đầu tư sẽ được trải nghiệm mô hình nông nghiệp
                sạch, bền vững và đồng thời hưởng lợi từ sự phát triển của mô
                hình trồng dâu công nghệ cao.
              </div>
              <div className=" font-bold">Quyền lợi :</div>
              <ul className=" list-disc px-5 text-sm">
                <li>2 kg dâu tuơi thu hoạch </li>
                <li>Thư cảm ơn </li>
              </ul>
            </div>
            <div className=" w-1/3">
              <img
                src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711993/461601249_878416460628791_3600121618089984177_n_ycb4gh.jpg"
                alt=""
                className=" rounded-md min-h-48"
              />
            </div>
          </button>
          <button className=" border rounded-lg flex justify-between items-center shadow-lg  p-5 text-start">
            <div className=" flex flex-col space-y-2 w-2/3 pr-4">
              <div className="font-xl">Gói Cơ bản (Basic)- 100.000VNĐ</div>
              <div className=" font-semibold">Khách hàng cơ bản</div>
              <div className="text-gray-600 text-sm">
                Gói cơ bản dành cho những ai mong muốn tham gia vào dự án nông
                trại dâu với số vốn đầu tư nhỏ, nhưng vẫn nhận được nhiều quyền
                lợi và lợi ích hấp dẫn từ việc canh tác và thu hoạch dâu. Với
                gói này, nhà đầu tư sẽ được trải nghiệm mô hình nông nghiệp
                sạch, bền vững và đồng thời hưởng lợi từ sự phát triển của mô
                hình trồng dâu công nghệ cao.
              </div>
              <div className=" font-bold">Quyền lợi :</div>
              <ul className=" list-disc px-5 text-sm">
                <li>2 kg dâu tuơi thu hoạch </li>
                <li>Thư cảm ơn </li>
              </ul>
            </div>
            <div className=" w-1/3">
              <img
                src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711993/461601249_878416460628791_3600121618089984177_n_ycb4gh.jpg"
                alt=""
                className=" rounded-md min-h-48"
              />
            </div>
          </button>
        </div>
        <div className="text-gray-500 text-sm w-1/4 flex flex-col items-center space-y-2 ">
          <Warning size={6}></Warning>
          <div>
            Khi đầu tư vào dự án trồng cây dâu giống Australia, các nhà đầu tư
            cần nhận thức rõ về những rủi ro có thể xảy ra. Một trong những rủi
            ro lớn nhất là ảnh hưởng của thời tiết và thiên tai, như hạn hán,
            bão lũ hoặc biến đổi khí hậu, có thể làm giảm năng suất cây trồng.
            Thêm vào đó, rủi ro về thị trường cũng cần được xem xét, vì giá cả
            trái cây có thể biến động do cung cầu không ổn định.
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseSub;
