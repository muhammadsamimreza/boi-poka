import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import BookCard from "../../components/BookCard/BookCard";
import BookDetals from "../BookDetails/BookDetals";

const Home = () => {
  return (
    <div>
      <BookDetals></BookDetals>
      <BookCard></BookCard>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
