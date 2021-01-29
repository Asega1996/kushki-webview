import React from "react";

import { CustomSidenavMenuImage } from "@Custom/Image";

import { Drawer, Grid, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const SidenavMenu = (props: any) => {
  const { sideMenu, setSidenavMenu } = props;

  const toggleDrawer = (side: string, open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidenavMenu({ ...sideMenu, [side]: open });
  };

  const SideMenu = (side: any) => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <CustomSidenavMenuImage src="https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png" />
    </div>
  );

  return (
    <Hidden only={["md", "xl", "lg"]}>
      <Grid container alignContent="flex-end">
        <MenuIcon onClick={toggleDrawer("left", true)} />

        <Drawer
          style={{ textAlign: "center", backgroundColor: "transparent" }}
          open={sideMenu.left}
          onClose={toggleDrawer("left", false)}
        >
          {SideMenu("left")}
        </Drawer>
      </Grid>
    </Hidden>
  );
};
