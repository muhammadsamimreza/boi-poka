// const getWishDataFromLocalStorage = () => {
//   const getBookDataStr = localStorage.getItem("wishList");
//   if (getBookDataStr) {
//     const getBookData = JSON.parse(getBookDataStr);
//     return getBookData;
//   } else {
//     return [];
//   }
// };

// const addWishToLocalStorage = (id) => {
//   const getData = getWishDataFromLocalStorage();
//   if(getData.includes(id)){
//     alert("Already read this Book");
//   }else{
//     getData.push(id);
//     const data = JSON.stringify(getData);
//     localStorage.setItem("wishList",data)

//   }
// };

// export { getWishDataFromLocalStorage, addWishToLocalStorage };


const getWishDataFromLocalStorage = () => {
  const getBookDataStr = localStorage.getItem("wishList");
  if (getBookDataStr) {
    const getBookData = JSON.parse(getBookDataStr);
    return getBookData;
  } else {
    return [];
  }
};

const addWishToLocalStorage = (id) => {
  const getData = getWishDataFromLocalStorage(); 
  if (getData.includes(id)) {
    alert("Already in Wish List");
  } else {
    getData.push(id);
    localStorage.setItem("wishList", JSON.stringify(getData));
  }
};

const deleteWishFromLocalStorage = (id) => {
  const savedWishList = getWishDataFromLocalStorage();
  const updatedWishList = savedWishList.filter(bookId => bookId !== id);
  localStorage.setItem("wishList", JSON.stringify(updatedWishList));
};

export {
  getWishDataFromLocalStorage,
  addWishToLocalStorage,
  deleteWishFromLocalStorage
};
