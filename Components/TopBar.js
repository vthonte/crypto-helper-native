import * as React from "react";
import { Appbar } from "react-native-paper";

const TopBar = () => (
  <Appbar.Header>
    <Appbar.BackAction />
    <Appbar.Content title="Crypto Helper" subtitle="Make Investing easier" />
  </Appbar.Header>
);

export default TopBar;