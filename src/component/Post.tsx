/** @format */
import Cancel from "../assets/icon/cancel";
import More from "../assets/icon/more";
import heart from "../assets/icon/heart.png";
import comment from "../assets/icon/comment.png";
import share from "../assets/icon/share.png";
const Post = () => {
  return (
    <div className=" bg-background  shadow-sm rounded-md">
      <div className=" flex flex-col pb-2">
        <div className=" flex px-4 pt-4 justify-between">
          <div className="flex space-x-2 items-center">
            <div className="">
              <img
                src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className=" flex flex-col font-lexend items-start ">
              <div className=" font-bold ">Vườn minh trân</div>
              <div className=" text-gray-600 text-sm">1 ngày trước</div>
              <div className=" text-gray-600 text-sm">Trồng dâu Australia</div>
            </div>
          </div>
          <div className=" flex space-x-1 pt-2 justify-between">
            <More size={6}></More>
            <Cancel size={6}></Cancel>
          </div>
        </div>
        <div className=" px-4 py-2">
          Hôm nay nhà vườn đã tiến hành gieo giống
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727711973/461481020_328739150328316_8329668403506128640_n_tkxenm.jpg"
            alt=""
          />
        </div>
        <div className=" flex p-2 py-3 justify-between">
          <div className="flex space-x-1">
            <img src={heart} className="w-6" alt="" />
            <p> 1.7K Yêu thích</p>
          </div>
          <div className=" flex space-x-2">
            <p>111 Bình luận</p>
            <p>10 Chia sẻ</p>
          </div>
        </div>
        <div className=" flex justify-around">
          <div className=" flex space-x-1 py-2">
            <img src={heart} className="w-6" alt="" />
            <p>Yêu thích</p>
          </div>
          <div className=" flex space-x-1 py-2">
            <img src={comment} className="w-6" alt="" />
            <p>Bình luận</p>
          </div>
          <div className=" flex space-x-1 py-2">
            <img src={share} className="w-6" alt="" />
            <p>Chia sẻ</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
