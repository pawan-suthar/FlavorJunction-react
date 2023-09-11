import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodData from "../data/FoodData";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the Best Flavor</h3>
      <div className="my-4 flex gap-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        <button
          onClick={() => handleCategoryClick("All")}
          className={`px-3 py-2 text-center bg-gray-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => handleCategoryClick(category)}
            key={index}
            className={`px-3 py-2 text-center bg-gray-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white ${
              selectedCategory === category && "bg-green-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
