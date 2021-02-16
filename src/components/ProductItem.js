import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
  },
  root: {
    minWidth: 275,
    maxWidth: 275,
    margin: "20px 10px 0 10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },

  title: {
    fontSize: 15,
    fontFamily: "Lato, sans-serif",
    margin: "10px 0",
  },
}));

export const ProductItem = ({ name, price, images, id }) => {
  const classes = useStyles();
  return (
    <Link to={id} className={classes.link}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={classes.media}
              image={images[0]}
              title={name}
            />
            <Typography
              className={classes.title}
              variant="body2"
              color="textSecondary"
            >
              {name}
            </Typography>
            <Typography variant="h5" component="h2">
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
