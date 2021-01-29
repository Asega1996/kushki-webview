import React from "react";

import { CustomContainer } from "@Components/Custom/Container";

import Routes from "@Router/router";

const Content = () => {
  return (
    <CustomContainer maxWidth="xl">
      <Routes />
    </CustomContainer>
  );
};

export default Content;
