import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";

const useStyles = makeStyles({
  root: {
    "& p": {
      textAlign: "center",
      backgroundColor: "transparent",
      fontFamily: "Lato, sans-serif",
    },
    maxWidth: "90%",
    margin: "20px auto 0 auto",
  },
});

export const Cart = () => {
  const classes = useStyles();
  const { cartProducts } = useContext(CartContext);

  const cartProductsGroupById = cartProducts.reduce(function (
    groupedProducts,
    product
  ) {
    (groupedProducts[product.id] = groupedProducts[product.id] || []).push(
      product
    );
    return groupedProducts;
  },
  []);

  return (
    <div className={classes.root}>
      {cartProductsGroupById.length ? (
        cartProductsGroupById.map((cartProduct) => (
          <CartItem
            key={cartProduct[0].id}
            {...cartProduct[0]}
            value={cartProduct.length}
          />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};
