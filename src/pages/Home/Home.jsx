import HeroSection from "../../components/HeroSection/HeroSection";
import AllBooks from "../../components/AllBooks/AllBooks"
import { useLoaderData } from "react-router";
const Home = () => {
  const allBooksdata = useLoaderData();
  return (
    <div className="">
      <HeroSection></HeroSection>
      <AllBooks allBooksdata={allBooksdata}></AllBooks>
    </div>
  );
};

export default Home;
