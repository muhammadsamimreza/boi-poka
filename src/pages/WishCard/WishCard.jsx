import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";
const WishCard = ({ book }) => {
  const { image, bookName, author, bookId } = book;
  return (
    <div className="flex justify-center pageFont">
      <div
        className="flex justify-center
      w-3/4 mx-auto bg-base-200 rounded-2xl shadow-md  border border-gray-200 my-3"
      >
        {/* Imagee */}
        <div className="w-[30%] flex justify-center items-center rounded-xl py-5">
          <div className="w-34 h-40 overflow-hidden backColor p-4 rounded-xl">
            <img
              className="w-full h-full object-contain shadow-md"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* Card Body */}
        <div className="flex flex-1 items-center justify-between mx-10">
          <div className="my-4 space-y-2">
            <h1 className="text-[22px] font-bold fontPrimary">{bookName}</h1>
            <h3 className="font-semibold text-[#131313bd]">By : {author} </h3>
          </div>

          <div className="flex justify-center">
            <Link
              to={`/bookdetails/${bookId}`}
              className="btn w-full bg-teal-400 hover:bg-teal-500  text-white"
            >
              Detalis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
