import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { CartContext } from "./CartContext";
import { SearchBar } from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(186, 120, 248)",
    width: "100%",
    textAlign: "center",
    height: 80,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 20,
  },

  headerContainer: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },

  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "rgba(0, 0, 0, 0.54)",
  },
  cartButton: {
    padding: 10,
    color: "white",
    "&::after": {
      content: (cartProducts) => `'${cartProducts.length}'`,
      display: "block",
      fontSize: 10,
      color: "red",
      border: "1px solid white",
      borderRadius: "10px",
      padding: ".5px 4px",
      backgroundColor: "white",
      marginBottom: 20,
      marginLeft: "-5px",
    },
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const classes = useStyles(cartProducts);

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <SearchBar />
        <Link to="/cart">
          <IconButton className={classes.cartButton} aria-label="cart">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
