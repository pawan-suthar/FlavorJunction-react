import { IoMdClose } from "react-icons/io";
import Cartitem from "./Cartitem";

const Cart = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-full lg:w-[20vw] h-full bg-white">
        <div className="flex justify-between items-center my-4 p-5">
          <span className="text-xl font-semibold text-gray-800">My Order</span>
          <IoMdClose className="border-2 cursor-pointer border-gray-600 text-gray-600 font-semibold p-1 text-xl rounded-md hover:border-red-300 hover:text-red-300" />
        </div>

        <Cartitem/>
        <Cartitem/>
        <Cartitem/>
        <div className="absolute bottom-6 p-5">
        <h3 className="font-semibold text-gray-800">Items: </h3>
        <h3 className="font-semibold text-gray-800">Total: </h3>
        <hr className="w-[90vw] lg:w-[18vw] my-2" />
        <button className="bg-green-500 mt-2 font-semibold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw]">Checkout</button>
      </div>
      </div>
      
    </>
  );
};

export default Cart;
