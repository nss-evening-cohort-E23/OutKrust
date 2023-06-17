const searchBar = (array, searchTerm) => {
  const searchArr = [];
  array.forEach((obj) => {
    const objValueArray = Object.values(obj);
    objValueArray.forEach((value) => {
      if (value.toUpperCase().includes(searchTerm.toUpperCase())) {
        if (searchArr.indexOf(obj) === -1) {
          searchArr.push(obj);
        }
      }
    });
  });
  return searchArr;
};

export default searchBar;
