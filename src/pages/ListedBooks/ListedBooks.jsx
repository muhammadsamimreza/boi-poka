import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../components/Container/Container";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../Utility/AddToLocalStorage";
import { getWishDataFromLocalStorage } from "../../Utility/AddWishListLocalStarage";
import WishCard from "../WishCard/WishCard";
import ReadBooks from "../ReadBooks/ReadBooks";
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


  const handleDeleteWish =(id)=>{
    const updatedWish = wishBook.filter(book=> book.bookId !== id);
    setWishBook(updatedWish);
  }
  const handleDeleteRead =(id)=>{
    const updatedRead = readBook.filter(book=> book.bookId !== id);
    setReadBook(updatedRead);
  }
  

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
                 readBook.length === 0 ? (
                  <p className="min-h-[calc(100vh-415px)]"></p>
                ) : (
                  readBook.map(book=> <WishCard 
                  key={book.bookId} 
                  book={book}
                  handleDeleteRead={handleDeleteRead}
                  ></WishCard>)
                )
              }
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className=" text-center h-10 text-2xl font-semibold">Wish List: {wishBook.length}</h2>
            <div className="">
              {
                wishBook.length === 0 ? (
                  <p className="min-h-[calc(100vh-420px)]"></p>
                ) : (
                  wishBook.map(book=> <WishCard 
                  key={book.bookId} 
                  book={book}
                  handleDeleteWish={handleDeleteWish}
                  ></WishCard>)
                )
              }
            </div>
          </TabPanel>
          
        </Tabs>
      </Container>
    </div>
  );
};

export default ListedBooks;
