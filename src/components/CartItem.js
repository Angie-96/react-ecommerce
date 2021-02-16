import React, { useContext } from "react";
import { IconButton, makeStyles, TextField } from "@material-ui/core";
import { DeleteForeverOutlined } from "@material-ui/icons";
import { CartContext } from "./CartContext";

const useStyles = makeStyles({
  cartItemContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 10px",
  },

  imgContainer: {
    width: "100px",
    height: "100px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  productName: {
    minWidth: "50%",
  },
  quantityTextField: {
    maxWidth: 70,
  },
  deleteBtn: {
    color: "red",
  },
});

export const CartItem = ({ id, image, name, price }) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const classes = useStyles();

  const handleDeleteProducts = (id) => {
    const newCartProducts = cartProducts.filter(
      (productToDelete) => productToDelete.id !== id
    );
    setCartProducts(newCartProducts);
  };

  return (
    <div className={classes.root}>
      <div className={classes.cartItemContainer}>
        <div className={classes.imgContainer}>
          <img src={image} alt={name} className={classes.image} />
        </div>
        <div className={classes.productName}>
          <p>{name}</p>
        </div>
        <div className={classes.quantityTextField}>
          <TextField
            type="number"
            id="outlined-basic"
            variant="outlined"
            value="1"
          />
        </div>
        <div>{price}</div>
        <div>
          <IconButton
            aria-label="delete"
            className={classes.deleteBtn}
            onClick={() => handleDeleteProducts(id)}
          >
            <DeleteForeverOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
