const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col lg:flex-row justify-between mx-7 py-4 mb-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-xl font-semibold">Flavor Junction</h1>
        </div>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search"
            autoComplete="off"
            className="p-3 text-sm rounded-lg border border-gray-500 outline-none w-full mt-3 lg:w-[25vw]"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
