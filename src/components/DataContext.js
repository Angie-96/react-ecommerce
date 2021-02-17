import { createContext, useEffect, useState } from "react";
import data from "../data";

const DataContext = createContext(null);

const AppDataProvider = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);

  useEffect(() => {
    if (searchValue !== "") {
      const regex = new RegExp(searchValue, "i");

      const filtered = data.filter((product) => regex.test(product.name));
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data);
    }
  }, [searchValue]);

  const contextValue = {
    filteredProducts,
    handleInputChange: (e) => {
      setTimeout(() => {
        setSearchValue(e.target.value);
      }, 1000);
    },
  };
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export { AppDataProvider, DataContext };
