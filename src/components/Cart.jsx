import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {
  const [active, setactive] = useState(true);

  const cartitems = useSelector((state) => state.cart.cart);

  const total = cartitems.reduce((totalqty, item) => totalqty + item.qty, 0);
  const totalprice = cartitems.reduce((total, item) => total + item.qty * item.price, 0);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full lg:w-[20vw] h-full bg-white ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-4 p-5">
          <span className="text-xl font-semibold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setactive(!active)}
            className="border-2 cursor-pointer border-gray-600 text-gray-600 font-semibold p-1 text-xl rounded-md hover:border-red-300 hover:text-red-300"
          />
        </div>
        {cartitems.length > 0 ? cartitems.map((food) => {
          return (
            <Cartitem
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}

            />
          );
        }) : <h2 className="text-center text-xl font-semibold text-gray-800">Your Cart Empty</h2>}

        <div className="absolute bottom-6 p-5">
          <h3 className="font-semibold text-gray-800">Items:{total} </h3>
          <h3 className="font-semibold text-gray-800">Total:{totalprice} </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="bg-green-500 mt-2 font-semibold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw]">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setactive(!active)}
        className={`cursor-pointer rounded-full bg-white shadow-md text-4xl p-3 fixed bottom-4 right-4 ${total>0 && "animate-bounce delay-500 transition-all"} `}
      />
    </>
  );
};

export default Cart;
