import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { DataContext } from "./DataContext";
import { CartContext } from "./CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    backgroundColor: "white",
    textAlign: "center",
    margin: "20px auto",
    paddingBottom: 10,
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
    },
  },

  imgContainer: {
    width: "100%",
    objectFit: "contain",
    height: "100%",
  },
  img: {
    height: "50vh",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      width: "100%",
    },
  },

  description: {
    height: "100%",
    border: "1px solid #dbdada",
    borderRadius: 10,
    padding: "5px 8px",
  },

  productName: {
    marginTop: 0,
    fontFamily: "Lato, sans-serif",
  },

  productPrice: {
    fontFamily: "sans-serif",
    fontSize: 25,
  },
  productDesc: {
    fontFamily: "Roboto",
  },
}));

export const ProductDetails = () => {
  let { id } = useParams();
  const classes = useStyles();

  const data = useContext(DataContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const productChosen = data.filter((product) => product.id === id);

  const handleAddToCart = () => {
    setCartProducts([
      ...cartProducts,
      {
        id: { id },
        image: productChosen[0].images[0],
        name: productChosen[0].name,
        price: productChosen[0].price,
      },
    ]);
  };

  return (
    <Grid
      container
      spacing={3}
      xs={12}
      direction="row"
      className={classes.root}
    >
      <Grid item xs={12} md={8}>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={productChosen[0].images[0]}
            alt={productChosen[0].name}
          />
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.description}>
          <h2 className={classes.productName}>{productChosen[0].name}</h2>
          <h3 className={classes.productPrice}>$ {productChosen[0].price}</h3>
          <p className={classes.productDesc}>{productChosen[0].details}</p>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
