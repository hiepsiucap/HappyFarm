/** @format */
import Project from "./Project";

const ListProject = () => {
  return (
    <section className=" md:container mx-auto p-10">
      <p className=" text-3xl font-bold text-center p-12 font-lexend text-primary">
        Dự án gọi vốn nổi bật
      </p>
      <div className="flex space-x-4 ">
        <div className=" w-1/2">
          <Project isOpen={true}></Project>
        </div>
        <div className=" w-1/2 grid grid-cols-2 gap-4">
          <Project isOpen={false}></Project>
          <Project isOpen={false}></Project>
          <Project isOpen={false}></Project>
          <Project isOpen={false}></Project>
        </div>
      </div>
    </section>
  );
};

export default ListProject;
