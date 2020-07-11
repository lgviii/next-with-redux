import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  placeholder: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  userImage: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export default function ImageAvatars({ name, imageURL }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {imageURL ? (
        <Avatar className={classes.userImage} alt={name} src={imageURL} />
      ) : (
        <Avatar className={classes.placeholder}>{name[0]}</Avatar>
      )}
    </div>
  );
}
