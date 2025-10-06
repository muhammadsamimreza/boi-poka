const getDataFromLocalStorage = () => {
  const getBookDataStr = localStorage.getItem("readList");
  if (getBookDataStr) {
    const getBookData = JSON.parse(getBookDataStr);
    return getBookData;
  } else {
    return [];
  } 
};

const addToLocalStorage = (id) => {
  const getData = getDataFromLocalStorage();
  if(getData.includes(id)){
    alert("Already read this Book");
  }else{
    getData.push(id);
    const data = JSON.stringify(getData);
    localStorage.setItem("readList",data)

  }
};
const deleteReadFromLocalStorage = (id) => {
  const savedWishList = getDataFromLocalStorage();
  const updatedWishList = savedWishList.filter(bookId => bookId !== id);
  localStorage.setItem("readList", JSON.stringify(updatedWishList));
};

export { addToLocalStorage, getDataFromLocalStorage, deleteReadFromLocalStorage };
