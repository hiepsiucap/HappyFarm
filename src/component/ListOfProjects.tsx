/** @format */
import { Project } from ".";
const ListOfProjects = () => {
  return (
    <>
      <div className="grid grid-cols-3 py-6 gap-y-16 gap-x-8">
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
        <Project isOpen={false}></Project>
      </div>
    </>
  );
};
export default ListOfProjects;
