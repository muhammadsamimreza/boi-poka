import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../components/Container/Container";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../Utility/AddToLocalStorage";
import BookCard from "../../components/BookCard/BookCard";
import { getWishDataFromLocalStorage } from "../../Utility/AddWishListLocalStarage";

const ListedBooks = () => {
  const [readBook, setReadBook] = useState([])
  const [wishBook, setWishBook] = useState([])
  const allBooks = useLoaderData();

  useEffect(()=>{
    const localData= getDataFromLocalStorage();
    const wishData = getWishDataFromLocalStorage();

    const getData = allBooks.filter(book=> localData.includes(book.bookId));
    setReadBook(getData);

    const getWishData = allBooks.filter(book=> wishData.includes(book.bookId));
    setWishBook(getWishData);


    
  },[allBooks])
  return (
    <div>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-center text-2xl font-semibold">Read List: {readBook.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {
                readBook.map(book=> <BookCard key={book.bookId} book={book}></BookCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-center text-2xl font-semibold">Wish List: {wishBook.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {
                wishBook.map(book=> <BookCard key={book.bookId} book={book}></BookCard>)
              }
            </div>
          </TabPanel>
          
        </Tabs>
      </Container>
    </div>
  );
};

export default ListedBooks;
