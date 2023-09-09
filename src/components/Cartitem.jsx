import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementqty,
  decrementqty,
} from "../redux/slices/Cartslices";
import toast from "react-hot-toast";

const Cartitem = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, price, img, qty }));
          toast(`${name} Removed!`, {
            icon: "🤔",
          });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer text-xl"
      />
      <img className="w-[50px] h-[50px]" src={img} />
      <div className="leading-5">
        <h2 className="font-semibold text-gray-800">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-semibold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementqty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementqty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
