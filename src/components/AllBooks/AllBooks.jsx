import React from "react";
import Container from "../Container/Container";
import BookCard from "../BookCard/BookCard";
import './AllBooks.css'
const AllBooks = ({ allBooksdata }) => {
  return (
    <div>
      <Container>
        <h1 className="text-4xl font-bold text-center mt-20 my-14 fontPrimary">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allBooksdata.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
        </div>
      </Container>
    </div>
  );
};

export default AllBooks;
