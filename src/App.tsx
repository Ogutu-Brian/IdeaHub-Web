import React from "react";
import { Row } from "antd";
import "antd/dist/antd.css";

import { LandingPage } from "./LandingPage";
import "./App.scss";

const App: React.FC = props => (
  <Row>
    <LandingPage />
  </Row>
);

export default App;
