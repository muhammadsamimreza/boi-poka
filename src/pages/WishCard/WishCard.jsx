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
