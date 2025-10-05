import React from "react";
import Container from "../Container/Container";
import heroImage from "../../assets/heroImage.png"

const HeroSection = () => {
  return (
    <div className="">
      <Container>
        <div className="py-10 backColor rounded-2xl">
          <div className="hero-content justify-around flex-col lg:flex-row-reverse">
            <img className="max-h-[350px]"
              src={heroImage}
            />
            <div className="space-y-10 mt-5 lg:mt-0 lg:space-y-14 text-center lg:text-left">
              <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
