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
  if(getData.includes(id)){
    alert("Already read this Book");
  }else{
    getData.push(id);
    const data = JSON.stringify(getData);
    localStorage.setItem("wishList",data)

  }
};

export { getWishDataFromLocalStorage, addWishToLocalStorage };
