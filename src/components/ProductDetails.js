import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { CartContext } from "./CartContext";
import { DataContext } from "./DataContext";

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
      maxHeight: 300,
      maxWidth: "100%",
      height: "auto",
    },
  },

  description: {
    height: "100%",
    border: "1px solid #dbdada",
    borderRadius: 10,
    padding: "5px 8px",
  },

  /* productName: {
    marginTop: 0,
    fontFamily: "Lato, sans-serif",
  }, */

  /* productPrice: {
    fontFamily: "sans-serif",
    fontSize: 25,
  }, */
  productDesc: {
    marginBottom: 30,
  },
}));

export const ProductDetails = () => {
  let { id } = useParams();
  const classes = useStyles();

  const { filteredProducts } = useContext(DataContext);
  const { addToCart } = useContext(CartContext);

  const productChosen = filteredProducts.filter((product) => product.id === id);

  return (
    <Grid container spacing={3} direction="row" className={classes.root}>
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
          <Typography gutterBottom variant="h5" className={classes.productName}>
            {productChosen[0].name}
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            className={classes.productPrice}
          >
            $ {productChosen[0].price}
          </Typography>
          <Typography variant="body2" className={classes.productDesc}>
            {productChosen[0].details}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addToCart(productChosen[0])}
          >
            Add to Cart
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
