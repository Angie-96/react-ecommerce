import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import { DataContext } from "./DataContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    margin: "0 auto",
  },

  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "rgba(0, 0, 0, 0.54)",
  },

  divider: {
    height: 28,
    margin: 4,
  },
}));

export const SearchBar = () => {
  const { handleInputChange } = useContext(DataContext);
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ "aria-label": "search..." }}
        onChange={(e) => handleInputChange(e)}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <SearchIcon className={classes.iconButton} />
    </Paper>
  );
};
