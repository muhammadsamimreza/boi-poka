import React from "react";
import heroImage from "../../assets/heroImage.png";
import Container from "../../components/Container/Container";
import './BookDetails.css'
const BookDetals = () => {
  return (
    <div>
      <div className="pageFont">
        <Container>
          <div className="rounded-2xl">
            <div className="hero-content flex-col lg:flex-row gap-5">
              <div className="w-1/2 flex justify-center backColor py-16 rounded-2xl">
                <img className="" src={heroImage} />
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="mt-5 lg:mt-0 space-y-5">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold space-y-2">
                      <p>Books to freshen up your</p>
                    </h1>
                    <h3 className="font-semibold">By : Get Started</h3>
                  </div>
                  <div className="border-t border-b border-gray-300 py-3">
                    <p>Category</p>
                  </div>
                  <div>
                    <p className="text-sm w-[90%] text-justify">
                    <span className="font-bold">Review : </span> Sit amet consectetur. Interdum porta pulvinar non sit
                      aliquam. Aenean pulvinar blandit vel non enim elementum
                      penatibus pellentesque ac. Nec accumsan euismod nulla
                      adipiscing lectus. Morbi elementum a auctor erat diam
                      tellus. Fermentum faucibus nulla enim ornare. Id neque
                      neque pretium enim platea urna non dictum. Faucibus
                      dignissim ridiculus nibh tristique massa non.
                    </p>
                  </div>
                  <div className="flex gap-5 my-4 items-center">
                    <div className="font-bold">Tag</div>
                    <div className="flex justify-center items-center bg-green-100 px-2 h-[20px] rounded-xl text-xs font-medium text-green-700">
                      Young Adult
                    </div>
                    <div className="flex justify-center items-center bg-green-100 px-2 h-[20px] rounded-xl text-xs font-medium text-green-700">
                      Identity
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-10 items-center">
                      <h2 className="w-1/2 text-gray-500">Number of Pages: </h2>
                      <p className="w-1/2 font-semibold">281</p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <h2 className="w-1/2 text-gray-500">Publisher: </h2>
                      <p className="w-1/2 font-semibold">
                        J.B Lippincott & Co.
                      </p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <h2 className="w-1/2 text-gray-500">
                        Year of Publishing:{" "}
                      </h2>
                      <p className="w-1/2 font-semibold">1960</p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <h2 className="w-1/2 text-gray-500">Rating: </h2>
                      <p className="w-1/2 font-semibold">4.8</p>
                    </div>
                    <div className="flex gap-5 my-5">
                      <button className="btn btn-outline">Read</button>
                      <button className="btn bg-teal-500 text-white">
                        WishList
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BookDetals;
