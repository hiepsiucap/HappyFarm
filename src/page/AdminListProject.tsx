/** @format */
import { AdminProject } from "../component";
const AdminListProject = () => {
  return (
    <section className=" font-lexend">
      <div className=" flex justify-between items-center">
        <p className=" text-2xl font-semibold">Danh sách các dự án</p>
        <button className=" py-3 px-6 rounded-md bg-button text-white">
          Đăng kí sự kiện mới{" "}
        </button>
      </div>
      <div className=" flex flex-col py-8 space-y-4">
        <AdminProject></AdminProject>
        <AdminProject></AdminProject>
        <AdminProject></AdminProject>
      </div>
    </section>
  );
};
export default AdminListProject;
