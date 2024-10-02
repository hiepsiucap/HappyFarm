/** @format */
import { Link } from "react-router-dom";
import { OrderDetail } from "../component";
const Orders = () => {
  return (
    <section className=" font-lexend w-full">
      <h1 className=" text-xl">Danh sách đơn hàng</h1>
      <div className=" flex flex-col space-y-4 py-6">
        <OrderDetail></OrderDetail>
        <OrderDetail></OrderDetail>
        <OrderDetail></OrderDetail>
      </div>
    </section>
  );
};
export default Orders;
