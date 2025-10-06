import React, { useState } from "react";
import Container from "../Container/Container";
import BookCard from "../BookCard/BookCard";
import "./AllBooks.css";

const AllBooks = ({ allBooksdata }) => {
  const [sort, setSort] = useState("none");
  const [allBook, setAllbook] = useState([]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedBooks = [...allBooksdata].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setAllbook(sortedBooks);
    } else if (type === "rating") {
      const sortedBooks = [...allBooksdata].sort(
        (a, b) => b.rating - a.rating
      );
      setAllbook(sortedBooks);
    } else {
      setAllbook([]);
    }
  };

  const booksToDisplay =
    sort === "pages" || sort === "rating" ? allBook : allBooksdata;

  return (
    <div>
      <Container>
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-4xl font-bold text-center mt-20 my-14 fontPrimary">
            Books
          </h1>
          <div className="mt-20 my-14">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort By: {sort}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a onClick={() => handleSort("pages")}>pages</a>
                </li>
                <li>
                  <a onClick={() => handleSort("rating")}>rating</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {booksToDisplay.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllBooks;
