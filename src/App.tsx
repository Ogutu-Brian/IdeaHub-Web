import React from "react";
import { Row } from "antd";

import { LandingPage } from "./LandingPage";
import "./App.scss";

interface Props {}

const App: React.FC<Props> = props => {
  return (
    <Row>
      <LandingPage />
    </Row>
  );
};

export default App;
