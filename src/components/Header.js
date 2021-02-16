import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    margin: "0 auto",
  },
  headerContainer: {
    width: "60%",
    display: "flex",
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

export const Header = ({ handleInputChange }) => {
  const { cartProducts } = useContext(CartContext);
  const classes = useStyles(cartProducts);

  return (
    <div className="header">
      <div className={classes.headerContainer}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search..."
            inputProps={{ "aria-label": "search..." }}
            onChange={handleInputChange}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <SearchIcon className={classes.iconButton} />
        </Paper>

        <IconButton className={classes.cartButton} aria-label="cart">
          <Link to="/cart">
            <ShoppingCartOutlinedIcon />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};
