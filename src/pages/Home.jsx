import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu/>
      <FoodItems/>
    </>
  );
};

export default Home;
