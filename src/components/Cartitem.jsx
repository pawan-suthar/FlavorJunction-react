import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Cartitem = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4">
        <MdDelete className="absolute right-7 text-gray-600 cursor-pointer text-xl" />
      <img
        className="w-[50px] h-[50px]"
        src=" https://media.licdn.com/dms/image/D4D35AQE-IK6I5WI9SA/profile-framedphoto-shrink_400_400/0/1693884875767?e=1694858400&v=beta&t=-c4kDG9eIJV9DyTJ_pSm4h9Vjjk0mhtGYTf_0TBvuAw"
      />
      <div className="leading-5">
        <h2 className="font-semibold text-gray-800">Onion Pizza</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-semibold">₹120</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
            <span>1</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
