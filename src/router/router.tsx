import MakePaymentScreen from "@Screens/MakePaymentScreen";
import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      {/* ROUTES WITH COMPONENTS */}
      <Route exact path="/" component={MakePaymentScreen} />
    </Switch>
  );
};

export default Routes;
