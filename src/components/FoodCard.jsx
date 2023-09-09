import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/Cartslices";

const FoodCard = ({ id, name, desc, rating, img, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-semibold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] overflow-hidden hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="flex text-sm justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex  justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, desc, rating, img, price, qty: 1 }));
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
