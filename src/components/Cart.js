import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#e8e8e8",
    maxWidth: "90%",
    margin: "20px auto 0 auto",
  },
});

export const Cart = () => {
  const classes = useStyles();
  const { cartProducts } = useContext(CartContext);

  return (
    <div className={classes.root}>
      {cartProducts.map((cartProduct) => (
        <CartItem key={cartProduct.id} {...cartProduct} />
      ))}
    </div>
  );
};
