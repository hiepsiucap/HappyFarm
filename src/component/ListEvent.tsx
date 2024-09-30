/** @format */
import DetailEvent from "./DetailEvent";
const ListEvent = () => {
  return (
    <section className=" md:container mx-auto font-lexend">
      <h1 className=" font-bold text-2xl font-lexend py-16 pt-24 ">
        Các sự kiện gần đây
      </h1>
      <div className=" grid grid-cols-3 gap-10">
        <DetailEvent></DetailEvent>
        <DetailEvent></DetailEvent>
        <DetailEvent></DetailEvent>
      </div>
    </section>
  );
};
export default ListEvent;
