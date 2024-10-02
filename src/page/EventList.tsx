/** @format */
import Event from "../component/Event";
const EventList = () => {
  return (
    <section className=" font-lexend w-full">
      <h1 className=" text-xl">Danh sách đơn hàng</h1>
      <div className=" flex flex-col space-y-4 py-4">
        <Event></Event>
        <Event></Event>
        <Event></Event>
      </div>
    </section>
  );
};
export default EventList;
