import "./App.css";
import { Header } from "./components/Header";
import { ProductsGrid } from "./components/ProductsGrid";
import { ProductDetails } from "./components/ProductDetails";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CartDataProvider } from "./components/CartContext";
import { Cart } from "./components/Cart";
import { AppDataProvider } from "./components/DataContext";

function App() {
  return (
    <AppDataProvider>
      <CartDataProvider>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <ProductsGrid />
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
      </CartDataProvider>
    </AppDataProvider>
  );
}

export default App;
