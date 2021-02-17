import React, { useContext } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { ProductItem } from "./ProductItem";
import { DataContext } from "./DataContext";

const useStyles = makeStyles({
  root: {
    width: 900,
    margin: "50px auto",
  },

  title: {
    fontSize: 15,
  },

  noResultsMessage: {
    fontSize: 20,
    margin: "0 auto",
    fontFamily: "Lato, sans-serif",
  },
});

export const ProductsGrid = () => {
  const { filteredProducts } = useContext(DataContext);
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      spacing={3}
      direction="row"
      className={classes.root}
      justify={"flex-start"}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))
      ) : (
        <p className={classes.noResultsMessage}>No Results...</p>
      )}
    </Grid>
  );
};
