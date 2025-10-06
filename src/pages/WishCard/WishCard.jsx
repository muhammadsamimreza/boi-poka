import React from "react";
import { Link } from "react-router";
import { deleteWishFromLocalStorage } from "../../Utility/AddWishListLocalStarage";
const WishCard = ({ book, handleDeleteWish }) => {
  const { image, bookName, author, bookId } = book;

  const handleDelete=(id)=>{
        deleteWishFromLocalStorage(id)
        handleDeleteWish(id)
  }

  return (
    <div className="flex justify-center pageFont">
      <div
        className="flex justify-center items-center 
      md:w-3/4 mx-auto bg-base-200 rounded-2xl shadow-md  border border-gray-200 my-3"
      >
        {/* Imagee */}
        <div className="w-[30%] mx-auto flex justify-center items-center rounded-xl px-2 md:px-0 py-5">
          <div className="w-34 md:h-40 overflow-hidden backColor md:p-4 rounded-xl">
            <img
              className="w-full h-full object-contain shadow-md"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* Card Body */}
        <div className="flex flex-col md:flex-row flex-1 items-center md:justify-between md:mx-10">
          <div className="mb-3 md:mb-0 md:my-4 space-y-2">
            <h1 className="text-[22px] font-bold fontPrimary">{bookName}</h1>
            <h3 className="font-semibold text-[#131313bd]">By : {author} </h3>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={`/bookdetails/${bookId}`}
              className="btn bg-teal-400 hover:bg-teal-500  text-white"
            >
              Detalis
            </Link>
            <button onClick={()=>handleDelete(bookId)} className="btn bg-red-400 hover:bg-red-500  text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
