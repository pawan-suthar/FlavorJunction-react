const CategoryMenu = () => {
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find Best Flavor</h3>
      <div className="my-4 flex gap-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        <button className="px-3 py-2 text-center bg-gray-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white">
          All
        </button>
        <button className="px-3 py-2 text-center bg-gray-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white">
          Lunch
        </button>
        <button className="px-3 py-2 text-center bg-gray-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white">
          Breakfast
        </button>
        <button className="px-3 py-2 text-center bg-gray-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white">
          Dinner
        </button>
        <button className="px-3 py-2 text-center bg-gray-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white">
          FastFood
        </button>
        <button className="px-3 py-2 text-center bg-gray-300 font-semibold rounded-lg hover:bg-green-400 hover:text-white">
          Drinks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
