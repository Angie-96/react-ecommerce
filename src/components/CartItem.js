import React, { useContext } from "react";
import {
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
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
  const { deleteFromCart } = useContext(CartContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cartItemContainer}>
        <div className={classes.imgContainer}>
          <img src={image} alt={name} className={classes.image} />
        </div>
        <div className={classes.productName}>
          <Typography variant="body1">{name}</Typography>
        </div>
        <div className={classes.quantityTextField}>
          <TextField
            type="number"
            id="outlined-basic"
            variant="outlined"
            value="1"
          />
        </div>
        <Typography variant="h5" component="h2">
          $ {price}
        </Typography>
        <div>
          <IconButton
            aria-label="delete"
            className={classes.deleteBtn}
            onClick={() => deleteFromCart(id)}
          >
            <DeleteForeverOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
