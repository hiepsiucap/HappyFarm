/** @format */

const Subscription = ({
  onChangeChoose,
  choose,
  id,
}: {
  onChangeChoose: any;
  choose: any;
  id: any;
}) => {
  return (
    <button
      id="1"
      onClick={() => {
        onChangeChoose({
          id: id,
          name: "Gói Cơ bản (Basic)- 100.000VNĐ",
          benefit: "2 kg dâu tuơi thu hoạch - Thư cảm ơn",
          img: "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711993/461601249_878416460628791_3600121618089984177_n_ycb4gh.jpg",
          amount: 100000,
        });
      }}
      className={
        id !== choose?.id
          ? "border rounded-lg flex justify-between items-center hover:border  hover:border-green-500  shadow-lg  p-5 text-start"
          : "border rounded-lg flex justify-between items-center hover:border scale-105 border-green-500  shadow-lg  p-5 text-start"
      }
    >
      <div className=" flex flex-col space-y-2 w-2/3 pr-4 ">
        <div className="font-xl">Gói Cơ bản (Basic)- 100.000VNĐ</div>
        <div className=" font-semibold">Khách hàng cơ bản</div>
        <div className="text-gray-600 text-sm">
          Gói cơ bản dành cho những ai mong muốn tham gia vào dự án nông trại
          dâu với số vốn đầu tư nhỏ, nhưng vẫn nhận được nhiều quyền lợi và lợi
          ích hấp dẫn từ việc canh tác và thu hoạch dâu. Với gói này, nhà đầu tư
          sẽ được trải nghiệm mô hình nông nghiệp sạch, bền vững và đồng thời
          hưởng lợi từ sự phát triển của mô hình trồng dâu công nghệ cao.
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
  );
};
export default Subscription;
