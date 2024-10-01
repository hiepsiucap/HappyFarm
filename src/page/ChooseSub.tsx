/** @format */

import { Warning } from "../assets/icon";
import { useEffect, useState } from "react";
import { Subscription } from "../component";
import { formatPrice } from "../utilize/Price";
const ChooseSub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  interface ChooseType {
    id: string;
    name: string;
    benefit: string;
    img: string;
    amount: number;
  }
  const [choose, changechoose] = useState<ChooseType | null>(null);

  return (
    <section className="font-lexend md:container mx-auto py-6">
      <div className=" font-lexend py-6">
        <h1 className=" text-2xl  ">Lựa chọn gói đăng kí của bạn</h1>
      </div>
      <div className=" flex items-center space-x-8">
        <div className=" flex flex-col space-y-5 w-3/4 ">
          <Subscription
            onChangeChoose={changechoose}
            choose={choose}
            id={"1"}
          ></Subscription>
          <Subscription
            onChangeChoose={changechoose}
            choose={choose}
            id={"2"}
          ></Subscription>
          <Subscription
            onChangeChoose={changechoose}
            choose={choose}
            id={"3"}
          ></Subscription>
        </div>
        <div className="text-gray-500 text-sm w-1/4 flex flex-col items-center space-y-2 ">
          {choose && (
            <section className=" flex flex-col space-y-2">
              <div className=" text-xl font-bold ">Gói đã chọn</div>
              <img src={choose.img} alt="" />
              <h5 className=" py-2 font-bold text-gray-900">{choose?.name}</h5>
              <p className=" text-gray-600">{choose?.benefit}</p>
              <div className=" flex justify-between w-full">
                <p className=" text-gray-600">Giá tiền:</p>
                <p className=" text-end font-bold">
                  {formatPrice(choose.amount)}
                </p>
              </div>
              <div className=" flex justify-between w-full">
                <p className=" text-gray-600">Thuế, phí:</p>
                <p className=" text-end font-bold">
                  {formatPrice(choose.amount * 0.1)}
                </p>
              </div>
              <div className=" flex justify-between w-full">
                <p className=" text-gray-600">Thành tiền:</p>
                <p className=" text-end font-bold">
                  {formatPrice(choose.amount * 1.1)}
                </p>
              </div>
              <div className=" flex justify-end">
                <button
                  className=" py-2 px-4 bg-primary rounded-md my-2 text-white
                "
                >
                  Thanh toán ngay
                </button>
              </div>
            </section>
          )}
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
