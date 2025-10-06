import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../components/Container/Container";
// import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../Utility/AddToLocalStorage";
import { useLoaderData } from "react-router";
import BookCard from "../../components/BookCard/BookCard";

const ListedBooks = () => {
  const [readBook, setReadBook] = useState([])
  const allBooks = useLoaderData();

  useEffect(()=>{
    const localData= getDataFromLocalStorage();
  
    const getData = allBooks.filter(book=> localData.includes(book.bookId));
    setReadBook(getData);
    
  },[])
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
            <h2>Wish List</h2>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
};

export default ListedBooks;
