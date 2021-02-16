import "./App.css";
import { Header } from "./components/Header";
import { ProductsGrid } from "./components/ProductsGrid";
import { ProductDetails } from "./components/ProductDetails";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DataContext } from "./components/DataContext";
import { CartContext } from "./components/CartContext";
import { Cart } from "./components/Cart";
import data from "./data";

function App() {
  const cartItem = [];
  const [cartProducts, setCartProducts] = useState(cartItem);

  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleInputChange = (e) => {
    setTimeout(() => {
      setSearchValue(e.target.value);
    }, 1000);
  };

  useEffect(() => {
    if (searchValue !== "") {
      const regex = new RegExp(searchValue, "i");

      const filtered = data.filter((product) => regex.test(product.name));
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data);
    }
  }, [searchValue]);

  return (
    <DataContext.Provider value={data}>
      <CartContext.Provider value={{ cartProducts, setCartProducts }}>
        <div className="App">
          <Router>
            <Header handleInputChange={handleInputChange} />
            <Switch>
              <Route exact path="/">
                <ProductsGrid filteredProducts={filteredProducts} />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/:id">
                <ProductDetails />
              </Route>
            </Switch>
          </Router>
        </div>
      </CartContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
