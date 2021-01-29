import React from "react";

import { CustomTopMenuImage } from "@Custom/Image";
import { Hidden, List, ListItemIcon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  inline: {
    display: "inline-flex",
  },
}));

export const MainMenu = () => {
  const classes = useStyles();

  return (
    <Hidden only={["xs", "sm"]}>
      <CustomTopMenuImage src="https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png" />
    </Hidden>
  );
};
