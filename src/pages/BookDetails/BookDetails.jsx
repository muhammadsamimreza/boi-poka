import React from "react";
import Container from "../../components/Container/Container";
import "./BookDetails.css";
import { useLoaderData, useParams } from "react-router";
const BookDetals = () => {
  const bookIdStr = useParams();
  const bookId = parseInt(bookIdStr.id);
  const allBooksData = useLoaderData();
  const singleBook= allBooksData.find(book=> book.bookId===bookId);
  const {image,bookName,author,rating ,category,review,totalPages,publisher,yearOfPublishing} = singleBook

  return (
    <div>
      <div className="pageFont">
        <Container>
          <div className="rounded-2xl">
            <div className="hero-content flex-col lg:flex-row gap-5">
              <div className="w-1/2 flex justify-center backColor py-14 rounded-2xl">
                <div className="w-[90%] max-h-[500px] overflow-hidden">
                  <img className="w-full h-full object-contain" src={image} />
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="mt-5 lg:mt-0 space-y-5">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold space-y-2">
                      <p>{bookName}</p>
                    </h1>
                    <h3 className="font-semibold">By : {author}</h3>
                  </div>
                  <div className="border-t border-b border-gray-300 py-3">
                    <p>{category}</p>
                  </div>
                  <div>
                    <p className="text-sm w-[90%] text-justify">
                      <span className="font-bold">Review : </span> {review}
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
                      <p className="w-1/2 font-semibold">{totalPages}</p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <h2 className="w-1/2 text-gray-500">Publisher: </h2>
                      <p className="w-1/2 font-semibold">
                       {publisher}
                      </p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <h2 className="w-1/2 text-gray-500">
                        Year of Publishing:{" "}
                      </h2>
                      <p className="w-1/2 font-semibold">{yearOfPublishing}</p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <h2 className="w-1/2 text-gray-500">Rating: </h2>
                      <p className="w-1/2 font-semibold">{rating}</p>
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
